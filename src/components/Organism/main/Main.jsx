import { MainWrap } from "./Main.styled";

const Main = ({ children }) => {
  return <MainWrap tabIndex={0}>{children}</MainWrap>;
};

export default Main;
