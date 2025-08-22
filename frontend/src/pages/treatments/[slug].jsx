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
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{disease.title}</h1>

      {/* Description */}
      <div className="flex justify-between items-center">
        <p className="text-lg text-gray-600 mb-6">{disease.description}</p>
        <img src="/dummyblog.jpg" className="w-[400px] h-[200px]" />
      </div>

      {/* Symptoms */}
      <h2 className="text-2xl font-semibold mb-4">Symptoms</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        {disease.symptoms.map((symptom, i) => (
          <li key={i}>{symptom}</li>
        ))}
      </ul>

      {/* Treatments */}
      <h2 className="text-2xl font-semibold mb-4">Treatments Available</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {disease.treatments.map((treat, i) => (
          <li key={i}>{treat}</li>
        ))}
      </ul>
    </div>
  );
}
