import React from "react";

interface TextComponentProps {
  color: string;
  textColor: string;
}

const TextOnBgExample: React.FC<TextComponentProps> = ({ color, textColor }) => {
  const isGradient = color.startsWith("linear-gradient") || color.startsWith("radial-gradient");

  return (
    <div
      className="p-4 border border-neutral-800 text-sm rounded-md duration-300"
      style={{
        backgroundColor: isGradient ? 'transparent' : color || '#1C1917',
        backgroundImage: isGradient ? color : 'none',
        color: textColor,
      }}
    >
      The quick brown fox jumps over the lazy dog.
    </div>
  );
};

export default TextOnBgExample;
