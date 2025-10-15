import { useState, useRef, useEffect } from "react";

export default function Prompter() {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [value]);
  return (
    <div className="min-h-32 w-160 rounded-3xl p-4 m-4 bg-[#272725] text-white ">
      <textarea
        name=""
        id=""
        className="w-full focus-none resize-none p-2 focus:outline-none"
        rows={1}
        ref={textareaRef}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Let it all out..."
      ></textarea>
    </div>
  );
}
