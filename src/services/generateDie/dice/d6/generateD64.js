const generateD64 = (fill, outline, viewBoxW = "300", viewBoxH = "300") => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxW} ${viewBoxH}">
  <g>
      <g fill="${fill}">
          <path d="M208.3 255H59.9c-7.4 0-13.4-6-13.4-13.4V93.1c0-7.4 6-13.4 13.4-13.4h148.4c7.4 0 13.4 6 13.4 13.4v148.4c.1 7.5-6 13.5-13.4 13.5z"/>
          <path d="M224.4 246.3l29.4-32.2c1.5-1.6 2.7-8.6 2.7-15.6V58.9c0-7-1.2-11.4-2.7-9.7l-29.4 32.2c-1.5 1.6-2.7 8.6-2.7 15.6v139.7c.1 6.8 1.3 11.2 2.7 9.6zm-18-166.4H64.9c-7.1 0-11.5-1.2-9.9-2.6l31.8-28.7c1.6-1.4 8.6-2.6 15.7-2.6h141.4c7.1 0 11.5 1.2 9.9 2.6L222 77.3c-1.5 1.4-8.6 2.6-15.6 2.6z"/>
      </g>
      <g fill="none" stroke="${outline}" stroke-width="12" stroke-miterlimit="10">
          <path d="M208.3 255H59.9c-7.4 0-13.4-6-13.4-13.4V93.1c0-7.4 6-13.4 13.4-13.4h148.4c7.4 0 13.4 6 13.4 13.4v148.4c.1 7.5-6 13.5-13.4 13.5z"/>
          <path d="M224.4 246.3l29.4-32.2c1.5-1.6 2.7-8.6 2.7-15.6V58.9c0-7-1.2-11.4-2.7-9.7l-29.4 32.2c-1.5 1.6-2.7 8.6-2.7 15.6v139.7c.1 6.8 1.3 11.2 2.7 9.6zm-18-166.4H64.9c-7.1 0-11.5-1.2-9.9-2.6l31.8-28.7c1.6-1.4 8.6-2.6 15.7-2.6h141.4c7.1 0 11.5 1.2 9.9 2.6L222 77.3c-1.5 1.4-8.6 2.6-15.6 2.6z"/>
      </g>
  </g>
  <g>
      <path d="M97.5 191v-16.2l36.6-50.2H155v49.5h9.6V191H155v14.7h-19.6V191H97.5zm39.4-44l-19.7 27.1h19.7V147z"/>
      <path d="M139.1 58.5l3.3-3.3h26.8l-14.7 14.7h-16.9L149 58.5h-9.9z"/>
      <path d="M242 136.9c0-4.7-.8-6.5-2.3-5.5-.9.6-1.5 1.8-1.9 3.6-.4 1.9-.6 4.5-.7 7.9l-5.4 3.6c.1-7.4 1-13.5 2.5-18.2 1.5-4.7 3.5-7.9 5.9-9.4 2.5-1.6 4.3-1.2 5.6 1.2 1.3 2.5 1.9 6.3 1.9 11.6 0 5.9-.8 12.1-2.5 18.9-1.7 6.7-3.7 12.8-6.1 18.3l9-6v11.8l-16.2 10.8v-10.9c6.8-17.5 10.2-30.1 10.2-37.7z"/>
  </g>
</svg>
`;

module.exports = generateD64;
