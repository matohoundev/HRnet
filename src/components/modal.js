import React from "react";

const defaultStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.75)",
};

const defaultContentStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "5px",
};

const Modal = ({
  isOpen,
  onRequestClose,
  style = {},
  contentStyle = {},
  children,
}) => {
  const modalStyle = { ...defaultStyle, ...style };
  const modalContentStyle = { ...defaultContentStyle, ...contentStyle };

  if (!isOpen) {
    return null;
  }

  return (
    <div style={modalStyle} onClick={onRequestClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
