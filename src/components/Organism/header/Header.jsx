import { PROJECT_NAME } from "../../../utils/\bconstants/project";
import GNB from "../../molecules/gnb/GNB";

export default function Header() {
  return (
    <>
      <h2>{PROJECT_NAME}</h2>
      <GNB />
    </>
  );
}
