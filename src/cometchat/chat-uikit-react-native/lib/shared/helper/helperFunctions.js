export const getFilteredStyles = (style, arrayOfKeys) => {
    let overrideStyle = {};
    arrayOfKeys.forEach((element) => {
        if (style && style[element])
            overrideStyle[element] = style[element];
    });
    return overrideStyle;
};
export const getFilteredStylesWithKeySwap = (style, objectOfKeys) => {
    let overrideStyle = {};
    for (const key in objectOfKeys) {
        if (style[key])
            overrideStyle[objectOfKeys[key]] = style[key];
    }
    return overrideStyle;
};
//# sourceMappingURL=helperFunctions.js.map