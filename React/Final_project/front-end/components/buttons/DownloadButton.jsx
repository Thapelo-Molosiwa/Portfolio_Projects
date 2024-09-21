import React from 'react';
import './DownloadButton.css';

const DownloadButton = () => {
  return (
    <a 
      href="../components\images\IT.Molosiwa's Resume.docx (2).pdf" 
      download="Thapelo_Molosiwa_Resume.pdf"
      className="download-resume" 
    >
      <button className="download-btn pixel-corners">
        <div className="button-content">
          <div className="svg-container">
            <svg
              className="download-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
              />
            </svg>
          </div>
          <div className="text-container">
            <div className="text">Resume</div>
          </div>
        </div>
      </button>
    </a>
  );
};

export default DownloadButton;