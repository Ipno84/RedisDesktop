import Color from "color";

const black = Color("#000000");
const white = Color("#FFFFFF");
const teal = Color("#008080");
const firebrick = Color("#B22222");

const getColor = (color, opacity = 1, darken = 0) => {
    return color
        .fade(1 - opacity)
        .darken(darken)
        .string();
};

export default {
    colors: {
        black: (opacity = 1, darken = 0) => getColor(black, opacity, darken),
        white: (opacity = 1, darken = 0) => getColor(white, opacity, darken),
        primary: (opacity = 1, darken = 0) => getColor(teal, opacity, darken),
        primaryInvert: (opacity = 1, darken = 0) => getColor(white, opacity, darken),
        light: (opacity = 1, darken = 0) => getColor(white, opacity, darken),
        lightInvert: (opacity = 1, darken = 0) => getColor(black, opacity, darken),
        danger: (opacity = 1, darken = 0) => getColor(firebrick, opacity, darken),
        dangerInvert: (opacity = 1, darken = 0) => getColor(white, opacity, darken)
    }
};
