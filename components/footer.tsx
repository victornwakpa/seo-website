import Image from "next/image";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Integration", href: "#" },
    { name: "Updates", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Pricing", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Manifesto", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contract", href: "#" },
  ],
  resources: [
    { name: "Examples", href: "#" },
    { name: "Community", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Docs", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 sm:py-20 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          <div className="flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  width={38}
                  height={38}
                />

                <span className="text-lg font-medium text-white">
                  AI Startup Kit
                </span>
              </Link>
            </div>
            <div className="mt-20 flex items-center space-x-4">
              <a href="#" className="text-neutral-500 hover:text-white">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-white">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-white text-[13px]">Product</h3>
              <ul className="mt-5 space-y-5 text-[13px]">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white text-[13px]">Company</h3>
              <ul className="mt-5 space-y-5 text-[13px]">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white text-[13px]">Resources</h3>
              <ul className="mt-5 space-y-5 text-[13px]">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white text-[13px]">Legal</h3>
              <ul className="mt-5 space-y-5 text-[13px]">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
