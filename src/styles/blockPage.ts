export const blockPageStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #2c3e50;
  }

  .container {
    max-width: 800px;
    background: rgba(255, 255, 255, 0.95);
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .warning-icon {
    font-size: 80px;
    margin-bottom: 20px;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }

  h1 {
    color: #e74c3c;
    font-size: 2.8em;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .message {
    font-size: 1.3em;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #34495e;
  }

  .warning-box {
    background: #fff3cd;
    border: 2px solid #ffeeba;
    border-radius: 15px;
    padding: 25px;
    margin: 25px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .warning-title {
    color: #856404;
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .warning-text {
    color: #533f03;
    font-size: 1.1em;
    line-height: 1.6;
  }

  .warning-text p {
    margin-bottom: 15px;
  }

  .warning-text p:last-child {
    margin-bottom: 0;
  }

  .help-section {
    background: #d4edda;
    border-radius: 15px;
    padding: 25px;
    margin: 25px 0;
  }

  .help-title {
    color: #155724;
    font-size: 1.3em;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .help-contact {
    font-size: 1.2em;
    color: #155724;
    font-weight: 500;
  }

  .pix-info {
    background: #e8f4fd;
    border-radius: 15px;
    padding: 25px;
    margin-top: 25px;
    border: 2px solid #b8daff;
  }

  .pix-title {
    color: #004085;
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 1.2em;
  }

  .pix-key {
    font-family: monospace;
    background: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    border: 1px solid #b8daff;
    display: inline-block;
    margin-top: 10px;
    font-size: 1.1em;
    color: #0056b3;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`;