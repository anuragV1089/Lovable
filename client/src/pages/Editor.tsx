import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";
import ExpandingButton from "@/components/ui/ExpandingButton";
import ToolTip from "@/components/ui/ToolTip";
import Code from "@/components/ui/Code";
import { ToolTipProvider, useToolTip } from "@/context/ToolTipContext";

type ItemType = { [key: string]: ReactNode };

export default function Editor() {
  const { currActive } = useToolTip();
  const items: ItemType = {
    Code: <div>Code</div>,
    Preview: <div>Preview</div>,
    Arrow: <div>Arrow</div>,
    Logo: <div>Logo</div>,
  };
  const element = currActive.filter((ele) => {
    return ele.val === true;
  });

  return (
    <div className="max-w-screen mx-auto h-screen flex flex-col text-white p-1">
      <div className="flex-1">
        <ResizablePanelGroup direction="horizontal" className="border">
          <ResizablePanel defaultSize={25} className="min-w-sm">
            <div className="bg-[#1C1C1C] h-12 text-white px-4 flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 42 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.6678 10.2426C39.7287 10.208 39.7793 10.1584 39.8145 10.0989C39.8496 10.0394 39.8681 9.97191 39.8681 9.90326C39.8681 9.83461 39.8496 9.76715 39.8145 9.70762C39.7793 9.64809 39.7287 9.59856 39.6678 9.56396L24.2469 0.849283C23.2602 0.292973 22.14 0 20.9995 0C19.859 0 18.7388 0.292973 17.7521 0.849283L2.33424 9.56396C2.27328 9.59856 2.2227 9.64809 2.18755 9.70762C2.1524 9.76715 2.1339 9.83461 2.1339 9.90326C2.1339 9.97191 2.1524 10.0394 2.18755 10.0989C2.2227 10.1584 2.27328 10.208 2.33424 10.2426L20.7981 20.8074C20.8602 20.843 20.931 20.8618 21.003 20.8618C21.0751 20.8618 21.1459 20.843 21.208 20.8074L39.6678 10.2426ZM0.605778 12.9147C0.544193 12.8801 0.474311 12.862 0.403199 12.8621C0.332086 12.8622 0.262264 12.8806 0.200794 12.9153C0.139324 12.9501 0.0883849 13.0001 0.0531282 13.0601C0.0178715 13.1202 -0.000452791 13.1883 8.49884e-06 13.2574V30.3342C0.00153272 31.1572 0.224516 31.9654 0.646781 32.6785C1.06905 33.3916 1.67588 33.9847 2.40693 34.3989L18.7789 43.9474C18.8402 43.9818 18.9098 44 18.9807 44C19.0515 44 19.1211 43.9819 19.1825 43.9475C19.2439 43.913 19.2949 43.8635 19.3304 43.8038C19.3658 43.7442 19.3845 43.6765 19.3846 43.6076V23.7948C19.3845 23.7259 19.3659 23.6583 19.3304 23.5986C19.295 23.539 19.244 23.4895 19.1827 23.455L0.605778 12.9147ZM22.6154 23.8635V43.6027C22.6155 43.6716 22.6342 43.7393 22.6696 43.7989C22.7051 43.8586 22.7561 43.9081 22.8175 43.9426C22.8789 43.977 22.9485 43.9951 23.0193 43.9951C23.0902 43.9951 23.1598 43.9769 23.2212 43.9425L39.5921 34.394C40.3226 33.9804 40.9291 33.388 41.3515 32.6759C41.7739 31.9637 41.9975 31.1564 42 30.3342V13.2574C41.9998 13.1886 41.9809 13.121 41.9454 13.0615C41.9098 13.002 41.8588 12.9526 41.7975 12.9183C41.7361 12.884 41.6666 12.8659 41.5958 12.866C41.525 12.8661 41.4555 12.8842 41.3942 12.9186L22.8173 23.5247C22.7561 23.5591 22.7053 23.6085 22.6698 23.6679C22.6344 23.7274 22.6156 23.7948 22.6154 23.8635Z"
                  fill="url(#paint0_linear_32_89)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_32_89"
                    x1="21"
                    y1="0"
                    x2="21"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0.3" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>Editor</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <Navbar />
            {currActive && items[element[0].id]}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
