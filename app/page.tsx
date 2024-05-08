import { Button } from "@nextui-org/react"
import ScreenCarousel from "@/components/screens-carousel"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col gap-10 w-full max-w-full h-screen sm:h-full items-center text-center justify-between py-16 px-4 sm:px-16 bg-gradient-to-tr from-black from-50% to-primary">
      <div className="flex gap-4 items-center align-middle h-full">
        <div className="flex flex-col gap-4 text-left w-1/2 px-2">
          <span className="text-7xl text-white font-semibold">
            <span className="text-primary">P</span>link
          </span>
          <p className="text-white text-3xl sm:text-5xl text-balance z-10">
            Split group expenses with USDC, onchain.
          </p>
          <Button
            color="primary"
            size="lg"
            radius="full"
            className="w-fit px-6 py-3"
          >
            <a
              target="_blank"
              href="https://t.me/+vjYitI1IT9piYWNk"
              className="flex flex-row gap-2 items-center text-white"
            >
              <Image
                alt="apple-logo"
                src="/apple-logo.svg"
                width={16}
                height={16}
              />
              Join alpha
            </a>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 h-full max-h-full overflow-hidden">
          <ScreenCarousel />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center text-center text-white">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-medium">Wanna try it?</span>
          <a
            target="_blank"
            href="https://t.me/+vjYitI1IT9piYWNk"
            className="text-primary"
          >
            Join alpha group chat{"  "}
          </a>
        </div>
        <div>
          <p className="">
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
      </div>
    </main>
  )
}
