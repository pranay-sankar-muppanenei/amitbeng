import { FaStethoscope, FaHeartbeat, FaUserMd } from "react-icons/fa";
import { GiScalpel, GiMedicalDrip, GiKidneys } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";

export default function SurgeriesOffered() {
  const surgeries = [
    { name: "Appendectomy", icon: GiScalpel, size: "text-4xl" },
    { name: "Gallbladder Removal", icon: GiKidneys, size: "text-4xl" },
    { name: "Hernia Repair", icon: FaStethoscope, size: "text-4xl" },
    { name: "Bariatric Surgery", icon: FaHeartbeat, size: "text-4xl" },
    { name: "Laparoscopic Surgery", icon: GiMedicalDrip, size: "text-4xl" },
    { name: "Colorectal Surgery", icon: MdHealthAndSafety, size: "text-4xl" },
    { name: "Thyroid Surgery", icon: FaUserMd, size: "text-4xl" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
          <span className="text-teal-600 text-4xl">Surgeries</span> Offered (General + Laparoscopic)
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-10 rounded-full"></div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {surgeries.map((surgery, idx) => {
            const Icon = surgery.icon;
            return (
              <a
                key={idx}
                href="#"
                className="cursor-pointer p-6 bg-white shadow-lg rounded-xl text-center font-medium text-black hover:bg-teal-600 hover:text-white transition"
              >
                <Icon className={`${surgery.size} mx-auto`} />
                <p className="mt-3">{surgery.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
