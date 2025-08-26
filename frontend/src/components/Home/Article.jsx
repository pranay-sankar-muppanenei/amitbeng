import Image from "next/image";

const SurgeryActivities = () => {
  // Add your image filenames from public folder
  const images = [
    "/news4.jpg",
    "/news5.jpg",
    "/news3.jpg",
    "/new1.jpg",
    "/news2.jpg",
    "/news6.jpg",
    "/news7.jpg",
    "/news8.jpg",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <p className="text-sm uppercase tracking-widest text-[#0089FF] font-semibold">
          Have a Look At
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8">
          Our Surgeries and OT <br /> Latest Activities
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative w-auto h-64  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Image
                src={src}
                alt={`Activity ${i + 1}`}
                layout="fill"
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SurgeryActivities;
