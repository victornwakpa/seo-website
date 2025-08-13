import { GridPattern } from "./ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function WaitlistSection() {
  return (
    <section className="container mx-auto max-w-7xl pt-4 pb-16.5 sm:pb-20 lg:pb-18">
      <div className="relative border border-white/10 overflow-hidden rounded-[10px] py-16 sm:py-20 lg:py-28">
        <div className="absolute z-10 inset-0">
          <GridPattern
            width={72}
            height={72}
            x={-1}
            y={-1}
            strokeDasharray={"3 1"}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
              "fill-transparent stroke-white/10",
            )}
          />
        </div>
        <div 
        className="absolute rounded-full bg-[#622A9A]"
        style={{
          width: '569px',
          height: '569px',
          filter: 'blur(172px)',
          bottom: '0%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-driven SEO <br /> for everyone.
          </h2>
          <div className="mt-8 flex justify-center">
            <form className="flex w-full max-w-md items-center gap-2 rounded-lg border border-white/10 p-1 ">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-4 text-white placeholder:text-neutral-400 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-2 font-medium text-black hover:bg-neutral-200"
              >
                Join waitlist
              </button>
            </form>
          </div>
          <p className="mt-4 text-sm text-neutral-400">
            No credit card required - 7-days free trial
          </p>
        </div>
      </div>
    </section>
  );
}
