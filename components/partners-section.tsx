const partners = ["Zapier", "HubSpot", "Google", "Pulse", "Webflow"];

export default function PartnersSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-400">
            Trusted by 5,000+ companies worldwide
          </h2>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16">
            {partners.map((partner) => (
              <div key={partner} className="flex items-center justify-center">
                <span className="text-2xl font-semibold text-white">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
