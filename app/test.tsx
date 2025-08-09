import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Zap,
  Globe,
  BarChart,
  BrainCircuit,
  Menu,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  Award,
  Users,
  MessageSquare,
} from "lucide-react";

// You would typically get these logos as SVGs
const partners = [
  { name: "Zapier", icon: <Zap size={24} /> },
  { name: "HubSpot", icon: <Globe size={24} /> },
  { name: "Google", icon: <BarChart size={24} /> },
  { name: "Pulse", icon: <TrendingUp size={24} /> },
  { name: "Webflow", icon: <Briefcase size={24} /> },
];

const features = [
  {
    icon: <BrainCircuit size={24} className="text-brand-primary" />,
    title: "AI-Powered Insights",
    description:
      "Leverage AI to uncover hidden SEO opportunities and get actionable insights.",
  },
  {
    icon: <BarChart size={24} className="text-brand-primary" />,
    title: "Automated Reporting",
    description:
      "Save time with automated, comprehensive SEO reports that are easy to understand.",
  },
  {
    icon: <TrendingUp size={24} className="text-brand-primary" />,
    title: "Rank Tracking",
    description:
      "Monitor your keyword rankings in real-time and stay ahead of the competition.",
  },
  {
    icon: <Users size={24} className="text-brand-primary" />,
    title: "Competitor Analysis",
    description:
      "Analyze competitor strategies to find gaps and opportunities for your own site.",
  },
  {
    icon: <Globe size={24} className="text-brand-primary" />,
    title: "On-Page SEO",
    description:
      "Optimize your pages with our powerful on-page analysis and recommendations.",
  },
  {
    icon: <Award size={24} className="text-brand-primary" />,
    title: "Backlink Analysis",
    description:
      "Discover and track your backlink profile to build a strong online authority.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "For individuals and small teams getting started with SEO.",
    features: ["1 Project", "100 Keywords", "Basic Reporting", "Email Support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For growing businesses that need more power and insights.",
    features: [
      "5 Projects",
      "500 Keywords",
      "Advanced Reporting",
      "Priority Support",
      "Competitor Analysis",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For large organizations with custom needs and dedicated support.",
    features: [
      "Unlimited Projects",
      "Custom Keywords",
      "API Access",
      "Dedicated Support",
      "Custom Onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const footerLinks = {
  product: ["Features", "Pricing", "Integrations", "API"],
  company: ["About Us", "Careers", "Blog", "Contact"],
  resources: ["Help Center", "Terms of Service", "Privacy Policy", "Sitemap"],
};

// Main Page Component
export default function UnseoLandingPage() {
  return (
    <div className="bg-background text-foreground w-full overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <PartnersSection />
        <HarnessAIFeatureSection />
        <ElevateSEOSection />
        <ClientsSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

// Sub-components for clarity
const Header = () => {
  const navItems = ["Features", "Pricing", "Testimonials"];
  return (
    <header className="bg-background/80 fixed top-0 right-0 left-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-brand-primary h-8 w-8" />
          <span className="text-xl font-bold">Unseo</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button>Get started</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-l-brand-secondary"
            >
              <div className="flex flex-col gap-6 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <BrainCircuit className="text-brand-primary h-8 w-8" />
                  <span className="text-xl font-bold">Unseo</span>
                </div>
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-brand-primary text-lg font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <Button className="mt-4">Get started</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="hero-glow relative py-20 text-center md:py-32">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
        Boost your rankings with AI.
      </h1>
      <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg md:text-xl">
        Unseo leverages cutting-edge AI to provide unparalleled SEO insights,
        helping you dominate the search results and drive organic growth.
      </p>
      <div className="mt-8">
        <Button size="lg">Get started for free</Button>
      </div>
      <div className="relative mt-16">
        {/* Placeholder for the dashboard image */}
        <div className="bg-card border-brand-secondary/50 shadow-brand-primary/10 mx-auto flex h-96 max-w-5xl items-center justify-center rounded-lg border shadow-2xl">
          <p className="text-muted-foreground">[Dashboard Preview Image]</p>
        </div>
      </div>
    </div>
  </section>
);

const PartnersSection = () => (
  <section id="features" className="py-12">
    <div className="container mx-auto px-4 text-center">
      <p className="text-muted-foreground mb-8 text-sm font-semibold tracking-wider uppercase">
        Trusted by the world's leading companies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors"
          >
            {partner.icon}
            <span className="text-lg font-semibold">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HarnessAIFeatureSection = () => (
  <section className="py-20 md:py-24">
    <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
      <div className="relative flex items-center justify-center">
        {/* Placeholder for the abstract ring image */}
        <div className="border-brand-primary/30 flex h-64 w-64 items-center justify-center rounded-full border-4 md:h-80 md:w-80">
          <div className="border-brand-primary/50 h-48 w-48 animate-pulse rounded-full border-2 md:h-64 md:w-64"></div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-purple-gradient absolute -inset-4 z-0 rounded-2xl opacity-50"></div>
        <Card className="bg-brand-secondary/50 border-brand-primary/20 relative z-10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Harness the power of AI
            </CardTitle>
            <p className="text-muted-foreground pt-2">
              Unleash automated content generation, keyword clustering, and
              predictive analysis to stay ahead.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              "AI-driven keyword suggestions",
              "Content optimization scores",
              "Predictive performance metrics",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-primary h-5 w-5" />
                <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const ElevateSEOSection = () => (
  <section className="bg-brand-secondary/20 py-20 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Elevate your SEO efforts.
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Go beyond the basics with a full suite of tools designed for serious
          marketers and agencies.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="bg-card rounded-lg p-6">
            <div className="mb-3 flex items-center gap-4">
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ClientsSection = () => (
  <section id="testimonials" className="py-20 md:py-24">
    <div className="container mx-auto px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">
        Our clients love us
      </h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg">
        Don't just take our word for it. Here's what our users have to say about
        Unseo.
      </p>
      <div className="relative mx-auto max-w-2xl">
        <div className="bg-purple-gradient absolute -inset-8 z-0 rounded-full opacity-60"></div>
        <Card className="bg-card/80 border-brand-primary/20 relative z-10 backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Placeholder for avatar image */}
            <div className="bg-brand-secondary ring-brand-primary/50 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full ring-4">
              <p className="text-sm">[Avatar]</p>
            </div>
            <blockquote className="text-lg italic">
              "Unseo has completely transformed our SEO strategy. The AI
              insights are a game-changer and have helped us achieve a 200%
              increase in organic traffic in just six months."
            </blockquote>
            <p className="mt-6 text-lg font-semibold">Sarah Johnson</p>
            <p className="text-muted-foreground">Head of Marketing, TechCorp</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="bg-brand-secondary/20 py-20 md:py-24">
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Pricing</h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Choose the plan that's right for you. All plans come with a 14-day
          free trial.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
        {pricingTiers.map((tier) => (
          <Card
            key={tier.name}
            className={`flex flex-col ${tier.popular ? "border-brand-primary ring-brand-primary bg-card-glow ring-2" : "border-brand-secondary/50"}`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">
                {tier.name}
              </CardTitle>
              <p className="text-muted-foreground">{tier.description}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="mt-auto p-6">
              <Button
                className="w-full"
                variant={tier.popular ? "default" : "secondary"}
              >
                {tier.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="hero-glow relative py-20 text-center md:py-32">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
        AI-driven SEO for everyone.
      </h2>
      <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
        Join thousands of businesses already ranking higher with Unseo.
      </p>
      <div className="mt-8">
        <Button size="lg">Get started for free</Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-brand-secondary/50 border-t py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-4 flex items-center gap-2">
            <BrainCircuit className="text-brand-primary h-8 w-8" />
            <span className="text-xl font-bold">Unseo</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Supercharge your SEO with the power of Artificial Intelligence.
          </p>
        </div>
        <div className="md:col-start-2">
          <h4 className="mb-4 font-semibold">Product</h4>
          <ul className="space-y-2">
            {footerLinks.product.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Resources</h4>
          <ul className="space-y-2">
            {footerLinks.resources.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-brand-secondary/50 text-muted-foreground mt-12 border-t pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Unseo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
