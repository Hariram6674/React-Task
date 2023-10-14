import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./styling";
import {
  ThemeContainer,
  ThemeButton,
} from "./styling";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
  orange,
  red,
  yellow,
  peach,
  magenta
} from "./Theme.styled";

export function Task3() {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState(light);

  // react hook to get the theme selected by the user that is saved in local storage
  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("current-theme"));
    if (currentTheme) {
      setSelectedTheme(currentTheme);
    }
  }, []);

  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("current-theme", JSON.stringify(theme));
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <div style={{ height: '850px' }}>
        <GlobalStyles />

        <ThemeContainer>
          <span>Colors: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(blue)}></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(green)}></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(brown)}></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(pink)}></ThemeButton>
          <ThemeButton
            className={`orange ${selectedTheme === orange ? "active" : ""}`}
            onClick={() => HandleThemeChange(orange)}></ThemeButton>
          <ThemeButton
            className={`peach ${selectedTheme === peach ? "active" : ""}`}
            onClick={() => HandleThemeChange(peach)}></ThemeButton>
          <ThemeButton
            className={`red ${selectedTheme === red ? "active" : ""}`}
            onClick={() => HandleThemeChange(red)}></ThemeButton>
          <ThemeButton
            className={`yellow ${selectedTheme === yellow ? "active" : ""}`}
            onClick={() => HandleThemeChange(yellow)}></ThemeButton>
          <ThemeButton
            className={`magenta ${selectedTheme === magenta ? "active" : ""}`}
            onClick={() => HandleThemeChange(magenta)}></ThemeButton>
        </ThemeContainer>
      </div>
    </ThemeProvider>
  );
}

