import Image from "next/image";

const testimonials = [
  {
    quote:
      "This product has completely transformed how I manage my projects and deadlines",
    name: "Talia Taylor",
    title: "Digital Marketing Director @ Quantum",
    image: "/assets/talia-taylor.png", // Placeholder image path
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Our clients
          </h2>
          <p className="mx-auto my-7 max-w-2xl text-xl text-white">
            Hear firsthand how our solutions have <br /> boosted online success
            for users like you.
          </p>
        </div>

        <div className="relative mt-24">
          {/* Background Grid */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[400px] w-px bg-white/10"></div>
            <div className="absolute h-px w-[400px] bg-white/10"></div>
          </div> */}

          {/* Testimonial Card */}
          <div className="relative mx-auto flex max-w-3xl items-center gap-8 rounded-lg bg-black p-4">
            <div className="relative w-fit flex-shrink-0">
              {/* Grid lines */}
              <div className="absolute top-0 right-0">
                {/* Asymmetrical vertical lines */}
                <div className="absolute bottom-0 right-0 h-[100px] w-0.5 bg-gradient-to-t from-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-[380px] w-0.5 bg-gradient-to-b from-white/20 to-transparent"></div>
                {/* Asymmetrical horizontal lines */}
                <div className="absolute top-0 right-0 h-0.5 w-[500px] bg-gradient-to-l from-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-0.5 w-[800px] bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0">
                {/* Asymmetrical vertical lines */}
                <div className="absolute bottom-0 left-0 h-[360px] w-0.5 bg-gradient-to-t from-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-[100px] w-0.5 bg-gradient-to-b from-white/20 to-transparent"></div>
                {/* Asymmetrical horizontal lines */}
                <div className="absolute top-0 right-0 h-0.5 w-[250px] bg-gradient-to-l from-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-0.5 w-[1050px] bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
              <Image
                src="/assets/client-image.png" // Using a generic placeholder name
                alt={testimonials[0].name}
                width={217}
                height={217}
                className="rounded-lg object-cover grayscale-[50%] contrast-[1.2] brightness-[0.9] sepia-[0.2]"
              />
            </div>
            <div className="w-2/3">
              <blockquote className="text-[23px] font-medium text-white">
                <p>“{testimonials[0].quote}”</p>
              </blockquote>
              <figcaption className="mt-5">
                <div className="text-white">{testimonials[0].name}</div>
                <div className="mt-[5px] text-sm text-white/70">
                  {testimonials[0].title}
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
