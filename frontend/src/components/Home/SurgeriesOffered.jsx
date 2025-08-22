import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { GiScalpel, GiMedicalDrip, GiKidneys } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export default function SurgeriesOffered() {
  const surgeries = [
    { name: "Gallbladder Removal", slug: "/surgeries/laparoscopic-cholecystectomy", icon: GiKidneys },
    { name: "Appendectomy", slug: "/surgeries/laparoscopic-appendectomy", icon: GiScalpel },
    { name: "Hernia Repair", slug: "/surgeries/laparoscopic-hernia-repair", icon: FaStethoscope },
    { name: "Laser Piles Surgery", slug: "/surgeries/laser-piles-surgery", icon: FaHeartbeat },
    { name: "Fissure Surgery", slug: "/surgeries/fissure-surgery", icon: FaStethoscope },
    { name: "Fistula Surgery", slug: "/surgeries/fistula-surgery", icon: FaHeartbeat },
    { name: "Pilonidal Sinus Surgery", slug: "/surgeries/pilonidal-sinus-surgery", icon: GiMedicalDrip },
    { name: "Bariatric Surgery", slug: "/surgeries/bariatric-surgery", icon: MdHealthAndSafety },
    { name: "Breast Surgery", slug: "/surgeries/breast-surgery", icon: FaUserMd },
    { name: "Thyroid Surgery", slug: "/surgeries/thyroidectomy", icon: FaUserMd },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          <span className="text-[#0089FF] text-4xl">Surgeries</span> Offered (General + Laparoscopic)
        </h2>
        <div className="w-20 h-1 bg-[#0089FF] mx-auto mb-10 rounded-full"></div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {surgeries.map((surgery, idx) => {
            const Icon = surgery.icon;
            return (
              <a
                key={idx}
                href={surgery.slug}
                className="cursor-pointer p-6 bg-white border border-gray-200 rounded-xl text-center font-medium text-gray-800 shadow-md transition-transform duration-300 hover:scale-101 hover:shadow-lg hover:border-[#0089FF] hover:text-white hover:bg-[#0089FF] hover:shadow-[#0089FF]/30"
              >
                <Icon className="text-4xl mx-auto" />
                <p className="mt-3">{surgery.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
