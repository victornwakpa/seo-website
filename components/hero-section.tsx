import { Button } from "./ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-90px)] flex-col items-center pt-[90px] text-center">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-[40px] border border-white/15 px-3.5 py-2">
            <span className="mr-2 rounded-full bg-[#9855FF] px-2.5 py-0.5 text-[10px] font-bold text-black">
              NEW
            </span>
            <span className="text-base text-[#9855FF]">
              Latest integration just arrived
            </span>
          </div>
          <h1 className="text-center text-[82px] font-medium tracking-[-4.149px]">
            <span className="block leading-[82px]">Boost your</span>
            <span className="block bg-gradient-to-b from-white from-[54.17%] to-[#B372CF] bg-clip-text leading-[96px] text-transparent">
              rankings with AI.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white md:text-xl">
            Elevate your site's visibility effortlessly with AI, where <br />{" "}
            smart technology meets user-friendly SEO tools.
          </p>
          <div className="mt-4 w-fit rounded-xl border border-white/[.15] p-[6px]">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-neutral-200"
            >
              Start for free
            </Button>
          </div>
          <Image src="/assets/hero-image.png" alt="Hero" width={1098} height={793.24} className="" />
        </div>
        
      </div>
    </section>
  );
}
