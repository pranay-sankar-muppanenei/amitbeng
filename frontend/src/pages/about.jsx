
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import DoctorProfile from "@/components/DoctorProfile";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          let start = 0;
          const increment = Math.ceil(target / (duration / 50)); // update every 50ms
          const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
              clearInterval(interval);
              setCount(target);
            } else {
              setCount(start);
            }
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target, duration, started]);

  return <span ref={ref}>{count}</span>;
};

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex justify-between mb-10">
            <div>
          <h4 className="uppercase tracking-widest text-[#3c8AAB] font-semibold text-sm">
            About Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            Protect yourself and the ones you love
          </h2>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Aenean ut mi neque. Vestibulum condimentum ligula id sagittis ultrices.
            Nulla condimentum urna in quam efficitur viverra. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about1.jpg"
              alt="Doctor consultation"
              width={400}
              height={250}
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about2.jpg"
              alt="Medical staff"
              width={400}
              height={250}
              className="w-full h-60 object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about3.jpg"
              alt="Child care"
              width={400}
              height={250}
              className="w-full h-60 object-cover"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              <Counter target={300} duration={2000} />+
            </h3>
            <p className="text-gray-600 mt-2">Unique Patients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              <Counter target={87} duration={2000} />
            </h3>
            <p className="text-gray-600 mt-2">Medical Staff</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              <Counter target={56} duration={2000} />
            </h3>
            <p className="text-gray-600 mt-2">Treatment Room</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-800">
              <Counter target={12} duration={2000} />
            </h3>
            <p className="text-gray-600 mt-2">Emergency Unit</p>
          </div>
        </div>
      </div>
      <DoctorProfile/>
    </section>
  );
}
