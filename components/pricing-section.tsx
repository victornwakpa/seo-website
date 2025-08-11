import { PiCheckBold } from "react-icons/pi";
import { GridPattern } from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

const plans = [
  {
    name: "Pricing",
    price: "$29/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
    ],
    isHighlighted: false,
  },
  {
    name: "Pro",
    price: "$79/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
    ],
    isHighlighted: true,
  },
  {
    name: "Business",
    price: "$149/mo",
    features: [
      "Keyword optimization",
      "Automated meta tags",
      "SEO monitoring",
      "Monthly reports",
      "Content suggestions",
      "Link optimization",
      "Multi-user access",
      "API integration",
    ],
    isHighlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div
        className="absolute rounded-full bg-[#602A9A]"
        style={{
          width: "425px",
          height: "425px",
          filter: "blur(267px)",
          top: "70%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-white">
            Choose the right plan to meet your SEO <br /> needs and start optimizing today.
          </p>
        </div>

        {/* Toggle Switch - basic implementation */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode" className="text-base text-white/50">
              dsad
            </Label>
          </div>
        </div>

        <div className="z-10 mt-12 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col divide-y divide-neutral-800 rounded-2xl border p-5 ${plan.isHighlighted ? "relative size-full overflow-hidden border-none bg-[#020103]" : ""}`}
            >
              {plan.isHighlighted && (
                <GridPattern
                  width={72}
                  height={72}
                  x={-1}
                  y={-1}
                  strokeDasharray={"3 1"}
                  className={cn(
                    "[mask-image:linear-gradient(to_top,white,transparent)]",
                  )}
                />
              )}
              <div className="pb-8">
                <h3 className="text-2xl font-medium text-white">{plan.name}</h3>
                <p className="mt-2 text-xl text-white/70">{plan.price}</p>
              </div>
              <div className="z-10 flex flex-1 flex-col justify-between pt-8">
                <ul className="space-y-5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-white"
                    >
                      <PiCheckBold className="h-4 w-4 text-white" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-10 w-full rounded-[10px] border border-white/15 py-3 font-medium shadow-[inset_0_0_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-[7px] ${plan.isHighlighted ? "bg-[#8C45FF]/40" : "bg-[#3D3D3D]/40"}`}
                >
                  Join waitlist
                </button>
              </div>
              {plan.isHighlighted && (
                <div
                  className="absolute right-0 bottom-0 left-0 h-[478px]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 3.8%, rgba(54, 23, 100, 0.6) 86.04%)",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
