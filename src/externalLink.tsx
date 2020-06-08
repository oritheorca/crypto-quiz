import React from "react";

export default (url: string, text: string) => (
  <a href={url} rel="noopener noreferrer" target="_blank">
    {text}
  </a>
);
