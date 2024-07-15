function getElementWidth(content, padding, border) {
  const x = Number.parseFloat(content);
  const y = Number.parseFloat(padding) * 2;
  const z = Number.parseFloat(border) * 2;

    return x + y + z;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px")); 