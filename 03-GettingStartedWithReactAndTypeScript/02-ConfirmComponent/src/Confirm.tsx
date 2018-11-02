import * as React from "react";
import "./Confirm.css";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

const Confirm: React.SFC<IProps> = props => {
  console.log("Confirm rendering");

  const [cancelClickCount, setCancelClickCount] = (React as any).useState(0);

  // (React as any).useEffect(() => {
  //   console.log("Confirm first rendering");
  // }, []);

  // (React as any).useEffect(() => {
  //   console.log("Confirm rendering");
  // });

  // (React as any).useEffect(
  //   () => {
  //     console.log("open changed");
  //   },
  //   [props.open]
  // );

  (React as any).useEffect(() => {
    console.log("Confirm first rendering");
    return () => {
      console.log("Confirm unmounted");
    };
  }, []);

  const handleOkClick = () => {
    props.onOkClick();
  };

  const handleCancelClick = () => {
    setCancelClickCount((prevCount: number) => {
      const newCount = prevCount + 1;
      if (newCount === 2) {
        props.onCancelClick();
      }
      return newCount;
    });
  };

  return (
    <div
      className={
        props.open ? "confirm-wrapper confirm-visible" : "confirm-wrapper"
      }
    >
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>{props.title}</span>
        </div>
        <div className="confirm-content-container">
          <p>{props.content}</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel" onClick={handleCancelClick}>
            {cancelClickCount === 0 ? props.cancelCaption : "Really?"}
          </button>
          <button className="confirm-ok" onClick={handleOkClick}>
            {props.okCaption}
          </button>
        </div>
      </div>
    </div>
  );
};
Confirm.defaultProps = {
  cancelCaption: "Cancel",
  okCaption: "Okay"
};

const ConfirmMemo = (React as any).memo(Confirm);

export default ConfirmMemo;
