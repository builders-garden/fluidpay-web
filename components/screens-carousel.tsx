"use client"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const ScreenCarousel = ({
  scale,
  width,
  height,
}: {
  width: number
  height: number
  scale: number
}) => {
  const imgPaths = [
    "/screens-1.png",
    "/screens-2.png",
    "/screens-3.png",
    "/screens-4.png",
  ]
  return (
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
                width={width}
                height={height}
                className={`h-[${scale}%] w-[${scale}%]`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  )
}

export default ScreenCarousel
