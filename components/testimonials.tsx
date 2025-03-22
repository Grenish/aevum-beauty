import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sophia",
      quote:
        "Aevum Beauty products have transformed my skincare routine. My skin feels radiant and rejuvenated!",
      designation: "Aevum Beauty Customer",
      src: "/users/user1.jpg",
    },
    {
      id: 2,
      name: "Emily",
      quote:
        "I love the natural ingredients in Aevum Beauty products. They work wonders for sensitive skin like mine.",
      designation: "Aevum Beauty Customer",
      src: "/users/user2.jpg",
    },
    {
      id: 3,
      name: "Olivia",
      quote:
        "The results are amazing! The moisturizer keeps my skin hydrated all day without feeling greasy.",
      designation: "Aevum Beauty Customer",
      src: "/users/user3.jpg",
    },
    {
      id: 4,
      name: "Ava",
      quote:
        "Thanks to Aevum Beauty, my skin feels softer and looks healthier. I can’t recommend it enough!",
      designation: "Aevum Beauty Customer",
      src: "/users/user4.jpg",
    },
    {
      id: 5,
      name: "Isabella",
      quote:
        "The products are lightweight and leave a glow I’ve never seen before. A must-have in every skincare routine!",
      designation: "Aevum Beauty Customer",
      src: "/users/user5.jpg",
    },
    {
      id: 6,
      name: "Mia",
      quote:
        "I finally found products that suit my complexion perfectly. Thank you, Aevum Beauty!",
      designation: "Aevum Beauty Customer",
      src: "/users/user6.jpg",
    },
    {
      id: 7,
      name: "Charlotte",
      quote:
        "Aevum's range of products is luxurious and effective. My friends keep asking about my skincare secret!",
      designation: "Aevum Beauty Customer",
      src: "/users/user7.jpg",
    },
    {
      id: 8,
      name: "Amelia",
      quote:
        "After trying many brands, Aevum Beauty stood out for its quality and results. My confidence is soaring!",
      designation: "Aevum Beauty Customer",
      src: "/users/user8.jpg",
    },
    {
      id: 9,
      name: "Harper",
      quote:
        "The anti-aging cream is incredible! It has visibly reduced fine lines and makes me feel youthful again.",
      designation: "Aevum Beauty Customer",
      src: "/users/user9.jpg",
    },
    {
      id: 10,
      name: "Evelyn",
      quote:
        "I never thought skincare could be this enjoyable. Aevum Beauty has exceeded all my expectations!",
      designation: "Aevum Beauty Customer",
      src: "/users/user10.jpg",
    },
  ];
  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 to-violet-50 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-4 text-rose-900">
          What Our Customers Say about <span className="font-extrabold blackMango">Aveum Beauty</span>
        </h2>
        <AnimatedTestimonials autoplay testimonials={testimonials} />
      </div>
    </section>
  );
}
