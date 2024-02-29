"use client";

import Banner from "@/components/Banner";

import handleCursor from "@/utils/cursor";

export default function Home() {
  return (
    <main onMouseMove={handleCursor}>
      <section className="flex flex-col h-full items-center gap-20 justify-center   sm:p-2 md:p-8 xl:p-16 2xl:p-32 medium:p-36  extra:p-36">
        <Banner />
      </section>
    </main>
  );
}
