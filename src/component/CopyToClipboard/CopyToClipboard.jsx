import React, { useRef } from "react";
import CutomButton from "../CutomButton";
import toast from "react-hot-toast";

const CopyToClipboard = ({quoteText}) => {

  const textAreaRef = useRef(null);

  const copyToClipboard = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
    }
    toast.success("Copied Successfuly")
  };
  return (
    <div>
      
    

      {/* Text area to facilitate copying */}
      <textarea
        style={{ position: "absolute", left: "-9999px" }}
        readOnly
        ref={textAreaRef}
        value={quoteText}
      />

    <CutomButton text="Copy to Clipboard" onClick={copyToClipboard}/>
    </div>
  );
};

export default CopyToClipboard;
