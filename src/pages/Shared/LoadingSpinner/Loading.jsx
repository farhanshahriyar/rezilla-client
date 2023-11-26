/* eslint-disable no-unused-vars */
import React from 'react'

const Loading = () => {
    const fullPageStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
      };
      
      const spinnerStyle = {
        border: '6px solid #f3f3f3', // Light grey
        borderTop: '6px solid #3498db', // Blue color
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
      };
      
      const spinnerKeyframes = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      `;
  return (
    <div>
        <div style={fullPageStyle}>
            <style>
            {spinnerKeyframes}
            </style>
            <div style={spinnerStyle} />
        </div>
    </div>
  )
}

export default Loading