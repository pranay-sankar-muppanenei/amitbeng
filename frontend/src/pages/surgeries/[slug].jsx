import { useRouter } from "next/router";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";

export default function SurgeryDetail() {
  const { query } = useRouter();
  const { slug } = query;

  // find the matching category by slug (use category field instead of name to avoid mismatch)
  const surgeryCategory = servicesData.find(
    (s) => s.category === slug
  );

  if (!surgeryCategory) {
    return <h1 className="text-center py-20 text-xl">Procedure not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center md:text-left">
        {surgeryCategory.name}
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
        {surgeryCategory.description}
      </p>

      {/* Sub-surgeries Cards */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Procedures Offered</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {surgeryCategory.subSurgeries.map((item, i) => (
          <Link
  key={i}
  href={`/surgery/${surgeryCategory.category}/${item.slug}`}
  className="cursor-pointer p-6 bg-white border border-gray-200 rounded-xl text-center font-medium text-gray-800 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-[#0089FF] hover:text-white hover:bg-[#0089FF] hover:shadow-[#0089FF]/30"
>
  <p className="mt-1">{item.name}</p>
</Link>

        ))}
      </div>
    </div>
  );
}
