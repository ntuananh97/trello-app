import React from "react";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

type TextAreaProps = Omit<TextareaAutosizeProps, "style"> &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "style"> & {
    style?: React.CSSProperties & {
      height: number;
    };
  };

const TextArea: React.FC<TextAreaProps> = ({ style, ...restProps }) => {
  return (
    <TextareaAutosize
      {...restProps}
      className="textarea"
      style={{
        fontSize: "14px",
        padding: "6px 12px",
        height: 32,
        ...style,
      }}
    />
  );
};

export default TextArea;
