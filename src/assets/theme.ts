import CSS from "csstype";

export interface IThemeProp {
  bgColor: CSS.ColorProperty;
  fontColor: CSS.ColorProperty;
  linksColor: CSS.ColorProperty;
  navButtonColor: CSS.ColorProperty;
  navButtonHoverColor: CSS.ColorProperty;
}

export interface ITheme {
  light: IThemeProp;
  dark: IThemeProp;
}

export const theme: ITheme = {
  light: {
    bgColor: "#f7f7f7",
    fontColor: "black",
    linksColor: "#019fcd",
    navButtonColor: "black",
    navButtonHoverColor: "rgb(170, 170, 182)",
  },

  // dark: {
  //   bgColor: "#666666",
  //   fontColor: "white",
  //   linksColor: "#00c77f",
  //   navButtonColor: "white",
  //   navButtonHoverColor: "red",
  // },

  dark: {
    bgColor: "black",
    fontColor: "white",
    linksColor: "#00c77f",
    navButtonColor: "white",
    navButtonHoverColor: "red",
  },
};
