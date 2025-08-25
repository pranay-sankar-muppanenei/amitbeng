import { useRouter } from "next/router";
import surgeriesData from "@/data/surgeriesData";

export default function SurgeryDetail() {
  const { query } = useRouter();
  const { slug } = query;
  const surgery = surgeriesData[slug];

  if (!surgery) {
    return <h1 className="text-center py-20 text-xl">Procedure not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center md:text-left">
        {surgery.title}
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
        {surgery.description}
      </p>

      {/* Benefits */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
        Benefits
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-2 sm:pl-4">
        {surgery.benefits.map((b, i) => (
          <li key={i} className="text-sm sm:text-base">
            {b}
          </li>
        ))}
      </ul>

      {/* Comparison Section */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Laparoscopic vs Open Surgery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Laparoscopic */}
        <div className="bg-teal-50 p-4 sm:p-6 rounded-lg shadow">
          <h3 className="font-bold text-teal-700 mb-2 sm:mb-3 text-lg sm:text-xl">
            Laparoscopic
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
            {surgery.comparison.laparoscopic.map((item, i) => (
              <li key={i} className="text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Open */}
        <div className="bg-red-50 p-4 sm:p-6 rounded-lg shadow">
          <h3 className="font-bold text-red-700 mb-2 sm:mb-3 text-lg sm:text-xl">
            Open
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
            {surgery.comparison.open.map((item, i) => (
              <li key={i} className="text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
