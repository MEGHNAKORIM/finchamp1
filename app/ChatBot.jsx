"use client";

import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Check if the script is already present
    if (!document.getElementById('botpress-webchat-script')) {
      const script = document.createElement('script');
      script.id = 'botpress-webchat-script'; // Add an id to the script
      script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.botpressWebChat) {
          window.botpressWebChat.init({
            botId: 'af054bfe-65de-4ab1-95bd-94f3a2a40abc',
            hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
            messagingUrl: 'https://messaging.botpress.cloud',
            clientId: 'af054bfe-65de-4ab1-95bd-94f3a2a40abc',
            webhookId: "c1184ffa-4f33-4b5d-b911-0a50a55775a7",
            lazySocket: true,
            themeName: "prism",
            botName: "Finzzy",
            frontendVersion: "v1",
            useSessionStorage: true,
            theme: "prism",
            themeColor: "#2563eb",
            allowedOrigins: []
          });
        }
      };
    }

    return () => {
      // Cleanup not needed as the script is only added once
    };
  }, []);

  return null; // This component does not render any visible UI
};

export default Chatbot;