import Button from "../components/ui/Button";
import Prompter from "../components/Prompter";
import SparkleBar from "../components/ui/SparkleBar";

export default function Home() {
  return (
    <div className="max-w-screen-xl min-h-screen bg-black mx-auto">
      <div className="min-h-screen mt-10 flex flex-col justify-center items-center text-center gap-6">
        <div className="text-6xl text-white font-medium">
          CREATE.EXPLORE.
          <br />
          EXPAND.<span className="text-[#0D99FF]">CONQUER.</span>
        </div>
        <div className="flex justify-end w-1/2">
          <Button content="~ ASAP Rocky" />
        </div>
        <p className="text-white/60 text-xl">
          Create a website by chatting with AI.
        </p>
        <div>
          <Prompter />
        </div>
        <div className="-mt-2">
          <SparkleBar />
        </div>
      </div>
    </div>
  );
}
