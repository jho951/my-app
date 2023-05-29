import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../../styles/GlobalStyled";
import { theme } from "../../utils/\bconstants/COLORS";
import Header from "../Organism/header/Header";

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};
