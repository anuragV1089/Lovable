import React, { useState, useRef, useEffect } from "react";
import Button from "./ui/Button";
import Arrow from "./ui/Arrow";

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" && event.ctrlKey) {
      console.log(`things happened`);
    }
  };
  return (
    <div className="min-h-32 w-200 rounded-3xl p-4 bg-[#272725] text-white ">
      <form action="" onKeyDown={handleKeyDown}>
        <div>
          <textarea
            name=""
            id=""
            className="w-full focus-none resize-none p-2 focus:outline-none mb-3"
            rows={1}
            ref={textareaRef}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Let it all out..."
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <Button content="Attach" />
          <Button icon={<Arrow />}></Button>
        </div>
      </form>
    </div>
  );
}
