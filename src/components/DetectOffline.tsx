import React, { useEffect, useState } from "react";
import Loading from "./Loading"

export default function DetectOffline(props: any) {
  const [isDisconnected, setDisconnect] = useState(false);

  useEffect(() => {
    handleConnectionChange();
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);
    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);
    }
  }, []);

  const handleConnectionChange = () => {
    const condition = navigator.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      const webPing = setInterval(() => {
        fetch('//google.com', {
          mode: 'no-cors',
        }).then(() => {
          setDisconnect(false);
          return clearInterval(webPing);
        }).catch(() => setDisconnect(true))
      }, 2000);
      return;
    }

    return setDisconnect(true);
  }

  return isDisconnected ? <Loading /> : props.children;
}