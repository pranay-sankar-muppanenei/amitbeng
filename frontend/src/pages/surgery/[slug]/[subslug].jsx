// pages/surgeries/[slug]/[subslug].jsx
import { useRouter } from "next/router";
import { servicesData } from "@/data/servicesData";

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

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      {/* Heading & Description */}
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{subSurgery.name}</h1>
      <p className="text-lg text-gray-700 mb-8">{subSurgery.description}</p>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-2">When is it needed?</h2>
          <p className="text-gray-600">{subSurgery.details.whenNeeded}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-2">Preparation</h2>
          <p className="text-gray-600">{subSurgery.details.preparation}</p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 border">
          <h2 className="text-xl font-semibold mb-2">Quick Rehabilitation</h2>
          <p className="text-gray-600">{subSurgery.details.rehabilitation}</p>
        </div>
      </div>
    </section>
  );
}
