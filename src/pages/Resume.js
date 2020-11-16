import React from 'react';
import ResumePhoto from '../images/resume.jpg';

function Resume() {
  const resumeStyles = {
    width: '100%',
    height: 'auto',
  };
  return (
    <div>
      <div>Home</div>
      <div>
        <img src={ResumePhoto} alt="resume" style={resumeStyles} />
      </div>
    </div>
  );
}

export default Resume;
