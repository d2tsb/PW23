import React from 'react';
export default (text: string) => (
  <span>
    {text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))}
  </span>
);
