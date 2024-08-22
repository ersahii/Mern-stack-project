import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CopyCodeBlock.css';

const CopyCodeBlock = () => {
  const [copied, setCopied] = useState(false);
  const code = "npm install express"
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "copied" status after 2 seconds
  };

  return (
    <div className="code-block">
      <pre className="code-block-content">
        <code>{code}</code>
      </pre>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button className="copy-button">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyCodeBlock;
