import { ModalUtils } from "../utils/ModalUtils";
import { CustomButton } from "../components/atoms/Button/Button";
import { PageHead } from "../components/atoms/Head/HtmlHead";

export default function MyComponent() {
  const { handleOpenModal, handleCloseModal, modalOpen } = ModalUtils();

  return (
    <>
      <div id="modal-root" />
      {/* <div id='tooltip-root' /> */}
      <PageHead
        title="헤더 테스트 중"
        description="테스트"
        keyword="테스트, next.js"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "400px",
          alignItems: "center",
        }}
      >
        <CustomButton className="text-btn" onClick={() => alert("안녕")}>
          <span>
            <p>Button</p>
          </span>
        </CustomButton>
      </div>
    </>
  );
}
