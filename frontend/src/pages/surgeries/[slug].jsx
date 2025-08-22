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
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{surgery.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{surgery.description}</p>

      <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
        {surgery.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Laparoscopic vs Open Surgery</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-teal-50 p-4 rounded-lg shadow">
          <h3 className="font-bold text-teal-700 mb-2">Laparoscopic</h3>
          <ul className="list-disc list-inside text-gray-700">
            {surgery.comparison.laparoscopic.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow">
          <h3 className="font-bold text-red-700 mb-2">Open</h3>
          <ul className="list-disc list-inside text-gray-700">
            {surgery.comparison.open.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
