// src/app/service/page.js (if using App Router)
// OR pages/service.js (if using Pages Router)

import { FaAmbulance, FaPhoneAlt, FaFirstAid, FaPrescriptionBottle } from "react-icons/fa";
import Testimonials from "@/components/Home/TestimonialCarousel";

export default function ServicePage() {
  return (
    <div className="bg-gray-50">
      {/* Section 1: Professional Healthcare Provider */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-teal-600 font-semibold uppercase tracking-wide">
            Our Service
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            Professional healthcare provider
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Quisque vitae augue vel arcu commodo fermentum. Curabitur id faucibus
            tellus, ut efficitur sapien. Ut dignissim sollicitudin eleifend.
            Fusce sit amet dapibus dolor. Aliquam erat volutpat. Sed vel lobortis
            diam. Cras mauris leo, laoreet vitae feugiat non, lacinia at nisi.
            Donec sollicitudin tortor eget faucibus fringilla.
          </p>
          <button className="mt-6 bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition">
            Learn More
          </button>
        </div>

        {/* Right service boxes */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Emergency Contact */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaPhoneAlt className="text-teal-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Emergency Contact
            </h3>
          </div>

          {/* Stand-by Ambulance */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaAmbulance className="text-teal-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Stand-by Ambulance
            </h3>
          </div>

          {/* First Aid Service */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaFirstAid className="text-teal-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              First Aid Service
            </h3>
          </div>

          {/* Healthcare Prescription */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            <FaPrescriptionBottle className="text-teal-600 text-4xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">
              Healthcare Prescription
            </h3>
          </div>
        </div>
      </section>

      {/* Section 2: Vaccination */}
    <section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/serviceback.jpg')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center text-white">
    {/* Left content */}
    <div>
      <p className="text-teal-600 font-semibold uppercase tracking-wide">
        Get Vaccinated
      </p>
      <h2 className="text-4xl text-black font-bold mt-2">
        An ounce of prevention is worth a pound of cure
      </h2>
      <p className="mt-4 leading-relaxed text-black">
        Quisque nec commodo nulla, non euismod tortor. Praesent ac consectetur
        nunc. Aliquam erat volutpat. Mauris mollis massa volutpat dolor dignissim
        euismod.
      </p>
      <button className="mt-6 bg-gradient-to-r from-teal-500 to-green-500 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition">
        Contact Us
      </button>
    </div>

    {/* Right column (optional, can remove if not needed) */}
    <div></div>
  </div>
</section>
<Testimonials/>

    </div>
  );
}
