import type { Key } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type ObjType = { id: string; val: boolean }[];

type SwitchType = {
  currActive: ObjType;
  setCurrActive: React.Dispatch<React.SetStateAction<ObjType>>;
};

const ToolTipContext = createContext<SwitchType | null>(null);

type ToolTipProps = {
  children: ReactNode;
};

export const useToolTip = () => {
  const context = useContext(ToolTipContext);
  if (!context) throw new Error(`useToolTip must be within an ToolTipProvider`);

  return context;
};

export const ToolTipProvider: React.FC<ToolTipProps> = ({ children }) => {
  const [currActive, setCurrActive] = useState<ObjType>([
    { id: "Code", val: false },
    { id: "Preview", val: true },
    { id: "Logo", val: false },
    { id: "Arrow", val: false },
  ]);
  return (
    <ToolTipContext.Provider value={{ currActive, setCurrActive }}>
      {children}
    </ToolTipContext.Provider>
  );
};
