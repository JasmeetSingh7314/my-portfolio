"use client";

import Banner from "@/components/Banner";

import handleCursor from "@/utils/cursor";

export default function Home() {

  return (
    <main onMouseMove={handleCursor}>
      <section className="flex flex-col h-full items-center gap-20 justify-center  md:p-8  sm:p-2 py-24 lg:p-24">
        <Banner />
      </section>
    </main>
  );
}
{
  /* <div className="flex gap-16">
  <Button color="primary" variant="solid" isLoading>
    Solid
  </Button>
  <Button color="primary" variant="faded">
    Faded
  </Button>
  <Button color="success" variant="bordered">
    Bordered
  </Button>
  <Button color="success" variant="light">
    Light
  </Button>
  <Button color="success" variant="flat">
    Flat
  </Button>
  <Button color="success" variant="ghost">
    Ghost
  </Button>
  <Popover placement="right">
    <PopoverTrigger>
      <Button color="success" variant="shadow">
        Shadow
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="px-1 py-2">
        <div className="text-small font-bold">
          Susbcribe to know my daily life!
        </div>
        <div className="text-tiny">
          You wont regret it 😄
          <Button color="warning" variant="shadow" size="sm">
            Subscribe
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>

  <Card className="w-[200px] space-y-5 p-4" radius="lg">
    <Skeleton isLoaded={false} className="rounded-lg">
      <div className="h-24 rounded-lg bg-secondary"></div>
    </Skeleton>
    <div className="space-y-3">
      <Skeleton isLoaded={false} className="w-3/5 rounded-lg">
        <div className="h-3 w-full rounded-lg bg-secondary"></div>
      </Skeleton>
      <Skeleton isLoaded={false} className="w-4/5 rounded-lg">
        <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
      </Skeleton>
      <Skeleton isLoaded={false} className="w-2/5 rounded-lg">
        <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
      </Skeleton>
    </div>
  </Card>
  <Card className="w-[240px] h-[240px] border-none bg-gradient-to-br from-violet-500 to-fuchsia-500">
    <CardBody className="justify-center items-center pb-0">
      <CircularProgress
        classNames={{
          svg: "w-36 h-36 drop-shadow-md",
          indicator: "stroke-white",
          track: "stroke-white/10",
          value: "text-3xl font-semibold text-white",
        }}
        value={70}
        strokeWidth={4}
        showValueLabel={true}
      />
    </CardBody>
    <CardFooter className="justify-center items-center pt-0">
      <Chip
        classNames={{
          base: "border-1 border-white/30",
          content: "text-white/90 text-small font-semibold",
        }}
        variant="bordered"
      >
        2800 Data points
      </Chip>
    </CardFooter>
  </Card>
</div>; */
}
