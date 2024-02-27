"use client";
import handleCursor from "@/utils/cursor";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumePage() {
  const [wid, setwid] = useState(globalThis?.window?.innerWidth);

  const handleResize = () => {
    setwid(globalThis?.window?.innerWidth);
  };

  globalThis?.window?.addEventListener("load", handleResize);
  globalThis?.window?.addEventListener("resize", handleResize);

  return (
    <main onMouseMove={handleCursor} className="py-8 w-full flex flex-col ">
      <div className="ResumePage  flex flex-col items-center justify-center p-8 -pl-10 sm:px-0 mx-auto">
        <Document
          file="/assets/Resume.pdf"
          renderMode="canvas"
          className="resumeview mb-20 w-full "
        >
          <Page
            className=""
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1}
          />
        </Document>
        <a
          href="/assets/Resume.pdf"
          target="_blank"
          download="Jasmeet_Software_Developer"
        >
          <Button
            variant="shadow"
            className="flex justify-between w-[150px]"
            type="button"
          >
            <BsDownload />
            &nbsp; Download CV
          </Button>
        </a>
      </div>
    </main>
  );
}
