import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import coinsImage from "../../assets/coinsImage.svg";
import moneyImage from "../../assets/moneyImage.svg";
import savingImage from "../../assets/savingImage.svg";
import motivationImage from "../../assets/motivationImage.svg";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function CarouselSignin() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <div className="bg-primary-foreground w-full h-full flex items-center justify-center p-16">
      <Carousel plugins={[plugin.current]} className="w-full max-w-xl">
        <CarouselContent>
          <CarouselItem>
            <div className="flex aspect-square bg-background rounded p-8">
              <img src={coinsImage} alt="moedas" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex aspect-square bg-background rounded p-8">
              <img src={moneyImage} alt="moedas" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex aspect-square bg-background rounded p-8">
              <img src={savingImage} alt="moedas" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex aspect-square bg-background rounded p-8">
              <img src={motivationImage} alt="moedas" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
