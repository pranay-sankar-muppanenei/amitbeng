export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-white to-green-200">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <p className="text-[#3c8AAB] font-medium uppercase tracking-wide">
            Health Equity, Always
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Healthy does not mean <br /> to be expensive
          </h1>
          <p className="mt-6 text-gray-600">
            Phasellus est urna, rutrum nec leo elementum, hendrerit eleifend nunc.
            Fusce sem odio, auctor at malesuada nec, mattis vulputate magna. Duis
            ornare orci nec elit venenatis pulvinar.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-gradient-to-r from-[#B3E6F1] to-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-md shadow">
              Contact Us
            </button>
            <button className="border border-green-500 text-black hover:bg-green-50 font-medium px-6 py-3 rounded-md">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <img
            src="/hdoc.png"   // place hdoc.png inside the /public folder
            alt="Doctor"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}
