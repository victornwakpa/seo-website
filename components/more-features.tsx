import { BiTachometer } from "react-icons/bi";
import { PiChartLineBold } from "react-icons/pi";
import { PiSparkleBold } from "react-icons/pi";
import { PiListChecksBold } from "react-icons/pi";
import { PiTargetBold } from "react-icons/pi";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { PiMagicWandBold } from "react-icons/pi";
import { PiCursorClickBold } from "react-icons/pi";
import { PiFilesBold } from "react-icons/pi";

const features = [
  {
    icon: <BiTachometer size={16} />,
    title: "User-friendly dashboard",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: <PiChartLineBold size={16} />,
    title: "Visual reports",
    description: "Visual insights into your site's performance.",
  },
  {
    icon: <PiSparkleBold size={16} />,
    title: "Smart Keyword Generator",
    description: "Automatic suggestions and the best keywords to target.",
  },
  {
    icon: <PiListChecksBold size={16} />,
    title: "Content evaluation",
    description: "Simple corrections for immediate improvements.",
  },
  {
    icon: <PiTargetBold size={16} />,
    title: "SEO goal setting",
    description: "Helps you set and achieve SEO goals with guided assistance.",
  },
  {
    icon: <PiBellSimpleRingingBold size={16} />,
    title: "Automated alerts",
    description:
      "Automatic notifications about your SEO health, including quick fixes.",
  },
  {
    icon: <PiMagicWandBold size={16} />,
    title: "Link Optimization Wizard",
    description:
      "Guides you through the process of creating and managing links.",
  },
  {
    icon: <PiCursorClickBold size={16} />,
    title: "One-click optimization",
    description:
      "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: <PiFilesBold size={20} />,
    title: "Competitor reports",
    description:
      "Provides insights into competitors' keyword strategies and ranking.",
  },
];

export default function MoreFeaturesSection() {
  return (
    <section className="py-16 lg:py-18.5" style={{ background: 'linear-gradient(to right, #190D2E, #020103)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-xl leading-16 font-medium text-white sm:text-5xl lg:text-[56px]">
            Elevate your <br /> SEO efforts.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-15 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="">
              <div className="flex gap-[6px]">
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base font-medium text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-2.5 text-base text-white/70">
                  {feature.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
