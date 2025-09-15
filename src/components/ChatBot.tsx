'use client';

import { useEffect } from 'react';

const ChatBot = () => {
  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      // Create config script
      const configScript = document.createElement('script');
      configScript.innerHTML = 'window.chtlConfig = { chatbotId: "6221814175" }';
      
      // Create chat script
      const chatScript = document.createElement('script');
      chatScript.src = 'https://chatling.ai/js/embed.js';
      chatScript.async = true;
      chatScript.id = 'chtl-script';
      chatScript.setAttribute('data-id', '6221814175');
      
      // Append scripts to the document body
      document.body.appendChild(configScript);
      document.body.appendChild(chatScript);
      
      // Cleanup function to remove scripts when component unmounts
      return () => {
        document.body.removeChild(configScript);
        const existingScript = document.getElementById('chtl-script');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
        // @ts-expect-error - chtl is dynamically injected by chatling.ai script
        if (window.chtl) {
          // @ts-expect-error - chtl.destroy() is part of the chatling.ai API
          window.chtl.destroy();
        }
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default ChatBot;
