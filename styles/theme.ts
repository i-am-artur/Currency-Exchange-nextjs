export const base_fontSize = 16;

export function pxToRem(px: number) {
  return px / base_fontSize + "rem";
}

export const zIndex = {
  nav: 10,
};

export const colors = {
  text: "#2c3e50",
  text_dark: "black",
  main_color: "#121a3e",
  logo: "#fc0",
  menu_active: "#ff0",
};

export const gap = {
  small: "5px",
  original: "8px",
  general: "16px",
  section: "24px",
};

export const radius = {
  general: "5px",
};

export const fontSize = {
  original: pxToRem(16),
  regular: pxToRem(18),
  medium: pxToRem(22),
  logo: pxToRem(26),
  menu_large: pxToRem(44),
};

export const width = {
  mobile: "320px",
  tablet: "600px",
  desktop: "768px",
  header_max: "1090px",
  maximum: "1470px",
};

export const media = {
  Tablet: `@media (min-width: ${width.tablet})`,
  Desktop: `@media (min-width: ${width.desktop})`,
  Max_Width: `@media (min-width: ${width.maximum})`,
};
