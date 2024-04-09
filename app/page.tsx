import Image from "next/image";
import { FaTelegram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24 space-y-8">
      <div className="flex flex-col space-y-4">
        <div>
          <span className="text-6xl text-blue-700 font-semibold">fluid</span>
          <span className="text-6xl text-white font-semibold">pay</span>
        </div>
        <div>
          <p className="text-3xl">Stablecoin payments made easy.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image alt="mockup" src="/mockup.png" width={250} height={500} />
      </div>
      <div className="flex flex-col space-y-8">
        <span className="text-xl font-medium flex flex-row space-x-1 items-center">
          <p>Wanna try it? Reach out to{"  "}</p>
          <a
            target="_blank"
            href="https://t.me/limone_eth"
            className="text-amber-300 flex flex-row space-x-1 items-center"
          >
            <p>limone.eth</p>
            <FaTelegram />
          </a>
        </span>
        <p>
          Made with ❤️ by{" "}
          <a
            target="_blank"
            href="https://builders.garden"
            className="text-green-500"
          >
            builders.garden
          </a>
        </p>
      </div>
    </main>
  );
}
