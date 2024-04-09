import { Raleway } from "next/font/google";
import Image from "next/image";

const raleway = Raleway({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-24 space-y-8">
      <div className="flex flex-col space-y-4">
        <div>
          <span className="text-6xl text-blue-700 font-bold">fluid</span>
          <span className="text-6xl text-white font-bold">pay</span>
        </div>
        <div>
          <p className="text-2xl font-medium">
            Crypto made simple, payments made easy.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image alt="mockup" src="/mockup.png" width={250} height={500} />
      </div>
      <div className="flex flex-col space-y-8">
        <p className="text-xl font-medium">
          Wanna try it? Reach out to{" "}
          <a
            target="_blank"
            href="https://t.me/limone_eth"
            className="text-amber-300"
          >
            limone.eth
          </a>
        </p>
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
