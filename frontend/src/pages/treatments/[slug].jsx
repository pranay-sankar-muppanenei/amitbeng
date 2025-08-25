import { useRouter } from "next/router";
import diseasesData from "@/data/diseasesData";

export default function DiseaseDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const disease = diseasesData[slug];

  if (!disease) {
    return <h1 className="text-center py-20 text-xl">Condition not found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
        {disease.title}
      </h1>

      {/* Description + Image */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
        {/* Description */}
        <p className="flex-1 text-base sm:text-lg text-gray-600 leading-relaxed">
          {disease.description}
        </p>

        {/* Image */}
        <img
          src="/dummyblog.jpg"
          alt={disease.title}
          className="w-full md:w-[400px] h-auto rounded-lg shadow"
        />
      </div>

      {/* Symptoms */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Symptoms</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-2 sm:pl-4">
        {disease.symptoms.map((symptom, i) => (
          <li key={i} className="text-sm sm:text-base">
            {symptom}
          </li>
        ))}
      </ul>

      {/* Treatments */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Treatments Available
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2 sm:pl-4">
        {disease.treatments.map((treat, i) => (
          <li key={i} className="text-sm sm:text-base">
            {treat}
          </li>
        ))}
      </ul>
    </div>
  );
}
