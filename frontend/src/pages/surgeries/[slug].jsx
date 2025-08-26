import { useRouter } from "next/router";
import { servicesData } from "@/data/servicesData";
import Link from "next/link";

export default function SurgeryDetail() {
  const { query } = useRouter();
  const { slug } = query;

  const surgeryCategory = servicesData.find(
    (s) => s.category === slug
  );

  if (!surgeryCategory) {
    return (
      <h1 className="text-center py-20 text-xl font-semibold text-gray-700">
        Procedure not found
      </h1>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center md:text-left mb-6">
        <span className="bg-gradient-to-r from-[#0089FF] to-blue-400 bg-clip-text text-transparent">
          {surgeryCategory.name}
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
        {surgeryCategory.description}
      </p>

      {/* Sub-surgeries */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Procedures Offered
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {surgeryCategory.subSurgeries.map((item, i) => (
          <Link
            key={i}
            href={`/surgery/${surgeryCategory.category}/${item.slug}`}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm text-center font-medium text-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-[#0089FF] hover:bg-[#0089FF] hover:text-white"
          >
            <p className="text-lg font-semibold">{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
