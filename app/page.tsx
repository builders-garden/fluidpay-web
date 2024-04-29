import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-16 space-y-8">
      <div className="flex flex-col space-y-4">
        <div>
          <span className="text-6xl text-primary font-semibold">P</span>
          <span className="text-6xl text-white font-semibold">link</span>
        </div>
        <div>
          <p className="text-2xl">Your USDC shortcut.</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image alt="mockup" src="/mockup.png" width={250} height={500} />
      </div>
      <div className="flex flex-col space-y-8">
        <span className="text-xl font-medium text-center">
          Wanna try it? <br></br>
          <a
            target="_blank"
            href="https://t.me/+vjYitI1IT9piYWNk"
            className="text-primary"
          >
            Join alpha group chat{"  "}
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
  )
}
