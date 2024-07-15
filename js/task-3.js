function getElementWidth(content, padding, border) {
    function parsePx(value) {
        return parseFloat(value.replace('px', ''))
}

    const contentWidth = parsePx(content);
    const paddingWidth = parsePx(padding) * 2;
    const borderWidth = parsePx(border) * 2;
     
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px")); 