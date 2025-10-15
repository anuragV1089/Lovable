import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="max-w-screen-xl min-h-screen bg-black mx-auto">
      <div className="h-screen flex -mt-40 flex-col justify-center items-center text-center gap-6">
        <div className="text-6xl text-white font-medium">
          CREATE.EXPLORE.
          <br />
          EXPAND.<span className="text-[#0D99FF]">CONQUER.</span>
        </div>
        <div className="flex justify-end w-1/2">
          <Button content="~ ASAP Rocky" />
        </div>
      </div>
    </div>
  );
}
