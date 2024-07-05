import React, { useState, useEffect } from 'react';
import '../assets/css/softAlert.css'; // Styling for the soft alert

const SoftAlert = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the alert when component mounts
    setVisible(true);

    // Automatically close the alert after 2 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    // Clear the timer when component unmounts or when visibility changes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`soft-alert ${visible ? 'visible' : ''}`}>
      <span className="message">{message}</span>
    </div>
  );
};

export default SoftAlert;
