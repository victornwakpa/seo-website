import Image from "next/image";

const features = [
  {
    title: "SEO goal setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
    icon: "/assets/features/seo-goal.png",
    bgColor: "bg-gradient-to-br from-gray-900 to-black",
  },
  {
    title: "User-friendly dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
    icon: "/assets/features/dashboard.png",
    bgColor: "bg-gradient-to-br from-purple-900 to-purple-700",
  },
  {
    title: "Visual reports",
    description: "Visual insights into your site's performance.",
    icon: "/assets/features/visual-reports.png",
    bgColor: "bg-gradient-to-br from-purple-900 to-purple-700",
  },
  {
    title: "Smart Keyword Generator",
    description: "Automatic suggestions and the best keywords to target.",
    icon: "/assets/features/keyword-generator.png",
    bgColor: "bg-gradient-to-br from-gray-900 to-black",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-[2rem] font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Harness the power of AI, making <br className="hidden sm:block" />
            search engine optimization intuitive{" "}
            <br className="hidden sm:block" />
            and effective for all skill levels.
          </h2>
        </div>

        {/* FIRST GRID ROW */}
        <div className="mt-16 grid h-[400px] grid-cols-1 gap-2.5 sm:grid-cols-3">
          {/* LEFT COLUMN */}
          <div className="overflow-hidden rounded-[10px] border border-white/10 px-10 pt-5 pb-10 *:relative">
            <div className="flex h-full flex-col">
              <Image
                src="/assets/donut.png"
                alt="donut"
                width={265}
                height={206}
                className="h-full w-full object-cover"
              />

              <h3 className="mb-2.5 text-base font-medium text-white">
                SEO goal setting
              </h3>

              <p className="leading-relaxed text-white/70">
                Help you set and achieve SEO goals with guided assistance.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative col-span-2 overflow-hidden rounded-[10px] border border-white/10 p-8">
            <Image
              src="/assets/widget-1.png"
              alt="Dashboard background"
              width={693}
              height={354}
              className="absolute top-9 right-0 h-auto w-[753px]"
            />
            <div className="absolute bottom-10 left-10 z-10 flex flex-col">
              <h3 className="mb-2.5 text-base font-medium text-white">
                User-friendly dashboard
              </h3>

              <p className="leading-relaxed text-white/70">
                Perform complex SEO audits and <br /> optimizations with a
                single click.
              </p>
            </div>

            {/* Decorative gradient overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(3, 1, 6, 0.00) 29.33%, #361764 89.04%)",
              }}
            ></div>
          </div>
        </div>

        {/* SECOND GRID ROW */}
        <div className="mt-7.5 grid h-[400px] grid-cols-1 gap-2.5 sm:grid-cols-3">
          {/* LEFT COLUMN */}
          <div className="relative col-span-2 overflow-hidden rounded-[10px] border border-white/10 p-8">
            <Image
              src="/assets/widget-2.png"
              alt="Dashboard background"
              width={633}
              height={354}
              className="absolute top-9 left-1/2 -translate-x-1/2 h-auto w-[663px]"
            />
            <div className="absolute bottom-10 left-10 z-10 flex flex-col">
              <h3 className="mb-2.5 text-base font-medium text-white">
                Visual reports
              </h3>

              <p className="leading-relaxed text-white/70">
                Visual insights into your <br /> site's performance.
              </p>
            </div>

            {/* Decorative gradient overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(3, 1, 6, 0.00) 29.33%, #361764 89.04%)",
              }}
            ></div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="overflow-hidden rounded-[10px] border border-white/10 px-10 pt-5 pb-10 *:relative">
            <div className="flex h-full flex-col justify-between">
              <div className="flex w-full items-center justify-center">
                <Image
                  src="/assets/triangle.png"
                  alt="triangle"
                  width={234}
                  height={234}
                  className="h-[234px] w-[234px] object-contain"
                />
              </div>
              <div>
                <h3 className="mb-2.5 text-base font-medium text-white">
                  Smart Keyword Generator
                </h3>

                <p className="leading-relaxed text-white/70">
                  Automatic suggestions and <br /> the best keywords to target.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
