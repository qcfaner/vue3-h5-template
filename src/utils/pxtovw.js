function toFixed (number, precision) {
    var multiplier = Math.pow(10, precision + 1),
        wholeNumber = Math.floor(number * multiplier)
    return Math.round(wholeNumber / 10) * 10 / multiplier
}

export const pxtovw = (pxValue) => {
    if(!pxValue) return 0;
    const viewportSize = 750;
    const unitPrecision = 5;
    let pixels = parseFloat(pxValue);
    if(pixels <= 1) return;
    return toFixed((pixels / viewportSize * 100), unitPrecision) + 'vw';
}