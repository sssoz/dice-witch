const generateD2011 = (fill, outline, viewBoxW = "600", viewBoxH = "600") => {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxW} ${viewBoxH}">
    <g>
        <g fill="${fill}">
            <path d="M157.6 402.9L295.9 553c2 2.1 6.8 2.1 8.8 0L443 402.9c2-2.1-.5-4.8-4.4-4.8H162c-3.9 0-6.3 2.7-4.4 4.8zm1.4-21.2l135.1-228c2.5-4.2-1-9.4-5.8-8.8L86.2 171.6c-3.6.5-5.9 4.2-4.8 7.6l67 201.3c1.7 4.8 8.1 5.5 10.6 1.2z"/>
            <path d="M300.3 47.5v94.1c0 1-.8 1.9-1.8 2L89.4 171.2c-2.2.3-3.2-2.7-1.3-3.8L297.2 45.7c1.4-.8 3.1.2 3.1 1.8zm0 0v94.1c0 1 .8 1.9 1.8 2l209.1 27.6c2.2.3 3.2-2.7 1.3-3.8L303.4 45.7c-1.4-.8-3.1.2-3.1 1.8zM151.2 398.6l-68.4 28.1c-.9.4-2-.3-2-1.3l-1.6-243.6c0-1.6 2.3-2 2.8-.4l70 215.5c.2.7-.1 1.4-.8 1.7z"/>
            <path d="M151.2 398.6l-67 27.5c-1.4.6-1.5 2.5-.2 3.2l205.5 123.1c1.8 1.1 3.7-1.2 2.3-2.8L153.3 399.1c-.5-.6-1.4-.8-2.1-.5zm297.3 0l67 27.5c1.4.6 1.5 2.5.2 3.2L310.3 552.5c-1.8 1.1-3.7-1.2-2.3-2.8l138.5-150.6c.5-.6 1.3-.8 2-.5zm.3 0l68.4 28.1c.9.4 2-.3 2-1.3l1.6-243.6c0-1.6-2.3-2-2.8-.4l-70 215.5c-.2.7.1 1.4.8 1.7z"/>
            <path d="M442.3 388.3l-137-236.1c-2.1-3.6.9-8.1 5-7.5l204.8 27c3.1.4 5.1 3.6 4.1 6.6l-67.8 209c-1.2 4.2-6.9 4.8-9.1 1z"/>
            <path d="M157.6 390.5L295.9 151c2-3.4 6.8-3.4 8.8 0L443 390.5c2 3.4-.5 7.6-4.4 7.6H162c-3.9 0-6.3-4.2-4.4-7.6z"/>
        </g>
        <g fill="none" stroke="${outline}" stroke-width="12" stroke-miterlimit="10">
            <path d="M157.6 402.9L295.9 553c2 2.1 6.8 2.1 8.8 0L443 402.9c2-2.1-.5-4.8-4.4-4.8H162c-3.9 0-6.3 2.7-4.4 4.8zm1.4-21.2l135.1-228c2.5-4.2-1-9.4-5.8-8.8L86.2 171.6c-3.6.5-5.9 4.2-4.8 7.6l67 201.3c1.7 4.8 8.1 5.5 10.6 1.2z"/>
            <path d="M300.3 47.5v94.1c0 1-.8 1.9-1.8 2L89.4 171.2c-2.2.3-3.2-2.7-1.3-3.8L297.2 45.7c1.4-.8 3.1.2 3.1 1.8zm0 0v94.1c0 1 .8 1.9 1.8 2l209.1 27.6c2.2.3 3.2-2.7 1.3-3.8L303.4 45.7c-1.4-.8-3.1.2-3.1 1.8zM151.2 398.6l-68.4 28.1c-.9.4-2-.3-2-1.3l-1.6-243.6c0-1.6 2.3-2 2.8-.4l70 215.5c.2.7-.1 1.4-.8 1.7z"/>
            <path d="M151.2 398.6l-67 27.5c-1.4.6-1.5 2.5-.2 3.2l205.5 123.1c1.8 1.1 3.7-1.2 2.3-2.8L153.3 399.1c-.5-.6-1.4-.8-2.1-.5zm297.3 0l67 27.5c1.4.6 1.5 2.5.2 3.2L310.3 552.5c-1.8 1.1-3.7-1.2-2.3-2.8l138.5-150.6c.5-.6 1.3-.8 2-.5zm.3 0l68.4 28.1c.9.4 2-.3 2-1.3l1.6-243.6c0-1.6-2.3-2-2.8-.4l-70 215.5c-.2.7.1 1.4.8 1.7z"/>
            <path d="M442.3 388.3l-137-236.1c-2.1-3.6.9-8.1 5-7.5l204.8 27c3.1.4 5.1 3.6 4.1 6.6l-67.8 209c-1.2 4.2-6.9 4.8-9.1 1z"/>
            <path d="M157.6 390.5L295.9 151c2-3.4 6.8-3.4 8.8 0L443 390.5c2 3.4-.5 7.6-4.4 7.6H162c-3.9 0-6.3-4.2-4.4-7.6z"/>
        </g>
    </g>
    <g>
        <path d="M266.1 291.3v-17.1h30.6v75.7h-19.3v-58.5h-11.3zm38.1 0v-17.1h30.6v75.7h-19.3v-58.5h-11.3z"/>
        <path d="M249.1 102.4c-.4-.6-1.2-.9-2.3-.7-1.8.2-3.3 1.3-4.5 3.3-1.3 1.9-2.5 4.8-3.6 8.6 1.1-1.4 2.4-2.7 4.1-3.7 1.7-1 3.4-1.6 5.2-1.9 3.7-.5 6.2.3 7.7 2.4s1.5 5.4.1 9.8c-.9 2.9-2.2 5.5-4.1 7.9-1.8 2.4-4 4.3-6.5 5.8s-5.2 2.5-8.2 2.9c-5.8.8-9.3-.5-10.4-4.1-1.1-3.5-.6-8.7 1.5-15.5 1.6-5.3 3.5-9.8 5.5-13.3 2.1-3.5 4.4-6.2 7.2-8.1 2.7-1.9 5.9-3.1 9.5-3.7 4.3-.6 7.2.2 8.6 2.5 1.4 2.3 1.7 5.4.7 9.3l-10.3 1.4c.3-1.2.2-2.3-.2-2.9zM236.7 126c.5.7 1.5 1 3 .8 1.3-.2 2.5-.7 3.5-1.6s1.7-2.1 2.2-3.7c.5-1.5.4-2.6-.1-3.3-.5-.7-1.5-.9-2.8-.7-1.3.2-2.5.7-3.6 1.7-1.1.9-1.9 2.1-2.3 3.5-.5 1.5-.5 2.6.1 3.3z"/>
        <path d="M331.4 100.5l-1.2-10.8 17.5 2.5 4.7 41.2-11.6-1.6-3.5-30.4-5.9-.9zm26 26.7l-1.1-9.5 14.5-22.8 11.9 1.7 2.9 24.9 4.4.6 1.1 9.9-4.4-.6.8 7-11.1-1.6-.8-7-18.2-2.6zm16.5-19l-6.6 10.7 7.9 1.1-1.3-11.8z"/>
        <path d="M164.2 458.5l-9.5 1.9-11.8-13.2 36.4-7.5 7.8 8.7-26.9 5.5 4 4.6z"/>
        <path d="M107.7 370.2l-7.4 5.2-5.3-16.9 28.5-19.9 3.5 11.1-21.1 14.7 1.8 5.8zm3.7-43.8c.3-1 .3-2-.1-3.1-.5-1.7-1.5-2.4-3-2.2-1.4.2-3.4 1.3-6 3.1 1.1 0 2.1.5 3.1 1.5s1.7 2.4 2.3 4.1c1.1 3.5 1.2 6.9.2 10.1-1 3.2-2.9 5.8-5.9 7.9-2 1.4-3.8 2-5.7 1.9-1.8-.1-3.5-.8-4.9-2.3-1.5-1.5-2.6-3.7-3.5-6.5-1.2-3.9-1.6-7.4-1.1-10.4s1.7-5.7 3.5-8 4.2-4.5 7.2-6.6c5.2-3.6 9.5-5.3 12.8-5.1 3.3.3 5.8 2.9 7.3 7.9.9 2.8 1.2 5.6 1 8.2-.2 2.6-.9 5-1.9 7-1.1 2.1-2.4 3.7-4 5l-3.1-10c.9-.6 1.5-1.5 1.8-2.5zm-17 5.6c-.3 1.1-.3 2.4.2 3.8.4 1.3 1 2.1 1.8 2.5.8.4 1.7.2 2.7-.5 1-.7 1.6-1.6 1.9-2.8.3-1.2.3-2.4-.2-3.7-.4-1.2-1-2.1-1.8-2.5-.8-.4-1.7-.3-2.6.4-1 .7-1.7 1.7-2 2.8z"/>
        <path d="M507.2 324.1l6.4 7.3-5.5 16.8-24.6-27.8 3.6-11.1 18.2 20.5 1.9-5.7zm-3.8 29.6c.7 2.2 1.1 4.8 1 7.7s-.5 5.8-1.5 8.8c-1 3-2.2 5.2-3.5 6.6-1.4 1.4-2.8 2-4.1 1.8-1.4-.1-2.7-.9-3.9-2.2-1.3-1.4-2.2-3.1-2.8-5-.6-1.9-.9-3.9-.9-6.1-2.6 2.5-5.3 2.2-8.1-1.1-1.7-1.9-3-4.3-3.8-7-.8-2.7-1.1-5.5-1-8.5.1-3 .6-5.8 1.5-8.5s2-4.9 3.4-6.5c1.4-1.6 2.9-2.3 4.5-2.3s3.3 1 5.1 3c2.9 3.2 4.3 7.5 4.3 12.9 1-1 2.2-1.5 3.3-1.4 1.2.1 2.4.9 3.7 2.3 1.1 1.5 2.1 3.3 2.8 5.5zm-19.5-9.6c-.8.2-1.4 1-1.9 2.5-.5 1.4-.6 2.9-.3 4.3s.8 2.6 1.7 3.6c.9 1 1.7 1.4 2.5 1.1s1.4-1.1 1.9-2.5.5-2.8.3-4.2c-.2-1.4-.8-2.6-1.7-3.6-.9-1-1.8-1.4-2.5-1.2zm9.9 12.3c-.6.2-1.1.8-1.5 1.9s-.4 2.2-.2 3.3.7 2.2 1.5 3.1c.8.9 1.5 1.3 2.2 1.1.7-.1 1.2-.7 1.5-1.8.3-1 .4-2.2.1-3.3-.2-1.2-.8-2.2-1.6-3.1-.6-1-1.4-1.3-2-1.2z"/>
        <path d="M431.5 466.5l11.7-12.7-5.1-2.4c.1.9-.1 1.9-.6 3s-1.3 2.2-2.3 3.4c-1.8 2-3.8 3.4-5.9 4.2-2.2.9-4.3 1.3-6.5 1.2s-4.2-.6-6.1-1.5c-3.5-1.6-5.4-3.8-5.7-6.6-.3-2.8 1.1-5.8 4.1-9.1 2.1-2.3 4.4-4.1 6.8-5.4 2.4-1.3 4.8-2 7.2-2.2 2.4-.2 4.5.2 6.6 1.2l-7.4 8c-.8-.3-1.7-.3-2.6-.1-.9.2-1.8.7-2.6 1.6-.9 1-1.2 1.9-1 2.7.2.8 1 1.5 2.1 2s2.2.7 3.3.4c1.1-.3 2.1-.9 2.9-1.8.7-.7 1-1.4 1.1-2 .1-.6-.1-1.1-.6-1.5l7.4-8 19.5 9.1-18.5 20.1-7.8-3.6z"/>
        <path d="M192.4 237.2c1.9-3.3 1.8-6.4-.3-9.4s-6.2-6.2-12.4-9.6c1.7 2.2 2.5 4.9 2.4 8-.1 3.1-1 6.2-2.8 9.3-3.3 5.7-7.5 9.2-12.7 10.6-5.2 1.4-10.8.3-16.9-3.2-3.8-2.2-6.8-5-8.8-8.4-2-3.4-2.9-7.1-2.8-11.3.2-4.2 1.6-8.5 4.2-12.9 3.5-6.1 7.5-10.1 11.9-12.1s9.1-2.4 14-1.3c5 1.1 10.4 3.4 16.3 6.8 10.4 6 17.3 12.2 20.7 18.6 3.4 6.4 2.9 13.5-1.6 21.3-2.5 4.3-5.4 7.5-8.9 9.7-3.4 2.1-7 3.2-10.7 3.3-3.7.1-7.3-.7-10.7-2.4l7.8-13.6c5.1 2 8.9.8 11.3-3.4zm-31.9-25.6c-2.4.6-4.4 2.3-6 5.1-1.5 2.5-1.9 4.9-1.4 7.2.5 2.2 2.1 4.1 4.7 5.6s5 1.9 7.3 1.2c2.2-.7 4.1-2.3 5.6-4.8 1.4-2.4 1.9-4.9 1.5-7.3-.4-2.4-1.8-4.3-4.2-5.7-2.6-1.5-5.1-1.9-7.5-1.3z"/>
        <path d="M403.1 212.9l11.6-6.7 51.9 6.7 9 15.6-35.5 20.5 4.2 7.2-12.1 7-4.2-7.2-10.6 6.1-8.5-14.7 10.6-6.1-16.4-28.4zm48.6 11.3l-28-3.6 8.5 14.8 19.5-11.2z"/>
        <path d="M339.8 468.3v12.1h-24v-53.6h15.1v41.5h8.9zm-65.1 12.6c-3-1.3-5.2-3.1-6.8-5.3-1.5-2.2-2.3-4.8-2.3-7.6 0-3.5 1-6.3 3-8.4 2-2.1 4.5-3.5 7.4-4v-.4c-7.7-2.2-11.5-6.5-11.5-13 0-3.1.8-5.8 2.4-8.2 1.6-2.4 3.9-4.3 6.9-5.6 3-1.3 6.6-2 10.8-2 6.8 0 12.3 1.5 16.3 4.5s6.2 7.7 6.5 13.9h-14c-.1-2.4-.8-4.2-2.2-5.6-1.3-1.4-3.3-2-5.9-2-2.1 0-3.7.6-4.9 1.7-1.2 1.1-1.8 2.6-1.8 4.3 0 4.4 3.5 6.6 10.6 6.6h2.7v10.5h-2.6c-6.3-.1-9.5 1.9-9.5 6.1 0 1.8.5 3.2 1.6 4.2s2.6 1.5 4.4 1.5c2 0 3.6-.6 4.8-1.9 1.2-1.2 1.8-2.9 2-5h14c-.3 5.7-2.2 10-5.9 13-3.6 3-8.7 4.5-15.3 4.5-4.2.1-7.7-.6-10.7-1.8z"/>
    </g>
</svg>`;
};

module.exports = generateD2011;
