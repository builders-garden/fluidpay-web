"use client"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const ScreenCarousel = () => {
  const imgPaths = [
    "/screens-1.png",
    "/screens-2.png",
    "/screens-3.png",
    "/screens-4.png",
  ]
  return (
    <div className="relative lg:h-[80vh]">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
      >
        <CarouselContent>
          {imgPaths.map((path, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center text-center">
                <Image
                  alt="mockup"
                  src={path}
                  width={1920}
                  height={1080}
                  className="z-0 h-[70%] w-[80%]"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  )
}

export default ScreenCarousel
