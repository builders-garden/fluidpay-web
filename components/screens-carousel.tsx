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
  width,
  height,
}: {
  width: number
  height: number
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
                className={`h-[50%] w-[50%] lg:h-[30%] lg:w-[30%]`}
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
