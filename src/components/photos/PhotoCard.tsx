import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function PhotoCard({
  index,
  alt,
  link,
}: {
  index: number;
  alt: string;
  link: string;
}) {
  return (
    <Card
      key={index}
      isFooterBlurred
      radius="lg"
      className={` photo-card ${
        (index % 5 == 0 && index >= 5) || index == 10
          ? "col-span-1 sm:col-span-2 sm:row-span-2"
          : " "
      } shadow-sm `}
    >
      <Image
        alt={alt}
        className="object-cover  aspect-auto rounded shadow-sm "
        src={link}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{alt}</p>
        <Link href="https://www.instagram.com/jasmeet_1712_/">
          <Button
            className="text-tiny text-white hidden sm:flex bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            <FaInstagram />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
