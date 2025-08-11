import Image from "next/image";

const partners = [
  { name: "Acme Corp", logo: "/assets/partners/client-1.png" },
  { name: "Echo Valley", logo: "/assets/partners/client-2.png" },
  { name: "Quantum", logo: "/assets/partners/client-3.png" },
  { name: "Pulse", logo: "/assets/partners/client-4.png", special: true },
  { name: "Outside", logo: "/assets/partners/client-5.png" },
  { name: "Apex", logo: "/assets/partners/client-6.png" },
  { name: "Celestial", logo: "/assets/partners/client-7.png" },
  { name: "2Twice", logo: "/assets/partners/client-8.png" },
];

export default function PartnersSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base tracking-widest text-white/70">
            Trusted by the world's most innovative teams
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center rounded-[10px] border border-white/10 px-8 py-10 ${partner.special ? 'border-purple-500' : ''}`}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={155}
                height={34}
                className="w-full h-8.5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
