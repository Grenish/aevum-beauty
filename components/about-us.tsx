import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-neutral-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.01]">
            <Image
              src={"/founder.jpg"}
              alt="About Us"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-light mb-4 text-rose-900">
              What Makes{" "}
              <span className="blackMango font-extrabold">Aevum Beauty</span>{" "}
              Special?
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              At Aevum Beauty, we believe beauty transcends time. Our
              formulations blend ancient wisdom with cutting-edge science,
              creating products that don't just enhance—they transform.
            </p>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Every ingredient is ethically sourced and every formula is crafted
              with intention. Beauty should never compromise your values or our
              planet.
            </p>

            <div className="mt-8 border-l-4 border-rose-200 pl-6 py-2">
              <span className="block italic text-xl font-light">
                "True beauty isn't measured in moments, but in timeless
                confidence that radiates from within."
              </span>
              <span className="block mt-2 font-medium text-rose-800">
                — Elena Aevum, Founder
              </span>
            </div>

            <div className="mt-8">
              <Link
                href="/story"
                className="inline-block px-6 py-3 bg-rose-100 hover:bg-rose-200 text-rose-900 font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow border border-rose-200 hover:border-rose-300"
              >
                Read Our Full Story
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
