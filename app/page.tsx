import { Button } from "@nextui-org/react"
import ScreenCarousel from "@/components/screens-carousel"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-col gap-10 w-full lg:h-screen h-full items-center text-center justify-between py-16 px-4 sm:px-16 bg-gradient-to-tr from-black from-50% to-primary">
      <div className="flex flex-row items-center align-middle p-16">
        <div className="flex flex-col gap-4 lg:text-left text-center lg:items-start items-center px-2">
          <span className="text-7xl text-white font-semibold">
            <span className="text-primary">P</span>link
          </span>
          <p className="text-white text-3xl sm:text-5xl text-balance">
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
        <div className="lg:flex hidden">
          <ScreenCarousel scale={30} width={960} height={540} />
        </div>
      </div>
      <div className="flex lg:hidden">
        <ScreenCarousel scale={50} width={960} height={540} />
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
