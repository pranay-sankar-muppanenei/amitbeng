// pages/surgeries/[slug]/[subslug].jsx
import { useRouter } from "next/router";
import { servicesData } from "@/data/servicesData";
import { FaQuestionCircle, FaClipboardList, FaHeartbeat } from "react-icons/fa";

export default function SubSurgeryDetail() {
  const router = useRouter();
  const { slug, subslug } = router.query;

  if (!slug || !subslug) {
    return <p className="text-center py-20">Loading...</p>;
  }

  // Find the surgery category
  const categoryData = servicesData.find((c) => c.category === slug);

  if (!categoryData) {
    return <h1 className="text-center py-20 text-xl">Surgery not found</h1>;
  }

  // Find the subsurgery
  const subSurgery = categoryData.subSurgeries.find(
    (s) => s.slug === subslug
  );

  if (!subSurgery) {
    return <h1 className="text-center py-20 text-xl">Sub-surgery not found</h1>;
  }

  // Cards config
  const cards = [
    {
      title: "When is it needed?",
      content: subSurgery.details.whenNeeded,
      icon: <FaQuestionCircle className="text-blue-600 text-3xl" />,
    },
    {
      title: "Preparation",
      content: subSurgery.details.preparation,
      icon: <FaClipboardList className="text-blue-600 text-3xl" />,
    },
    {
      title: "Quick Rehabilitation",
      content: subSurgery.details.rehabilitation,
      icon: <FaHeartbeat className="text-blue-600 text-3xl" />,
    },
  ];

  return (
   <section className="max-w-5xl mx-auto px-6 py-12">
  {/* Heading & Description */}
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
      {subSurgery.name}
    </h1>
    <div className="mt-3 w-20 h-1 bg-blue-600 mx-auto rounded-full" />
    <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      {subSurgery.description}
    </p>
  </div>

  {/* Info Cards */}
  <div className="grid md:grid-cols-3 gap-6">
    {cards.map((card, idx) => (
      <div
        key={idx}
        className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200
                   hover:border-blue-500 hover:shadow-xl hover:shadow-blue-100
                   transform hover:-translate-y-1 transition-all duration-300"
      >
        <div className="flex items-center gap-3 mb-4">
          {card.icon}
          <h2 className="text-xl font-semibold">{card.title}</h2>
        </div>
        <p className="text-gray-600">{card.content}</p>
      </div>
    ))}
  </div>
</section>

  );
}
