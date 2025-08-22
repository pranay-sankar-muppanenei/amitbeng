import { FaFacebookF, FaTwitter, FaYoutube, FaWordpress } from "react-icons/fa";

export default function Footer({ showSubscribe = true }) {
  return (
    <footer className="bg-white">
      {/* Subscribe Section */}
      {showSubscribe && (
        <div className="max-w-5xl mx-auto px-6 mt-5">
          <div className="bg-gradient-to-r from-[#E6F3FF] to-white rounded-2xl shadow-xl p-10 text-center -mt-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Stay Updated with <span className="text-[#0089FF]">Our Newsletter</span>
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Get the latest updates, health tips, and news straight to your inbox.
            </p>

            {/* Email input */}
            <div className="mt-6 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-md px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
              />
              <button className="bg-[#0089FF] hover:bg-[#0073d6] text-white px-6 py-3 rounded-r-lg font-semibold transition-all">
                Join
              </button>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex justify-center gap-5">
              {[
                { icon: FaFacebookF, link: "#", color: "hover:bg-blue-600" },
                { icon: FaTwitter, link: "#", color: "hover:bg-sky-500" },
                { icon: FaYoutube, link: "#", color: "hover:bg-red-600" },
                { icon: FaWordpress, link: "#", color: "hover:bg-gray-700" },
              ].map(({ icon: Icon, link, color }, idx) => (
                <a
                  key={idx}
                  href={link}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-white transition ${color}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-20 bg-gradient-to-r from-[#F9FAFB] to-[#E6F3FF]">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
          {/* Logo + About */}
          <div>
            <img src="/logo.png" alt="logo" className="h-[70px] mb-4" />
            <p className="text-sm leading-relaxed">
              Providing trusted surgical expertise and compassionate care with the latest technology.
            </p>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#0089FF]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#0089FF] cursor-pointer">Check Up</li>
              <li className="hover:text-[#0089FF] cursor-pointer">Emergency Call</li>
              <li className="hover:text-[#0089FF] cursor-pointer">Consultation</li>
            </ul>
          </div>

          {/* Further Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#0089FF]">Further Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#0089FF] cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-[#0089FF] cursor-pointer">News</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#0089FF]">Our Location</h3>
            <p className="text-sm leading-relaxed">
              1534 Ford Street <br /> CA, California
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { icon: FaFacebookF, link: "#", color: "hover:bg-blue-600" },
                { icon: FaTwitter, link: "#", color: "hover:bg-sky-500" },
                { icon: FaYoutube, link: "#", color: "hover:bg-red-600" },
                { icon: FaWordpress, link: "#", color: "hover:bg-gray-700" },
              ].map(({ icon: Icon, link, color }, idx) => (
                <a
                  key={idx}
                  href={link}
                  className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:text-white transition ${color}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="w-full border-gray-300" />
        <div className="text-center py-5 text-sm text-gray-600">
          © {new Date().getFullYear()} <span className="text-[#0089FF] font-semibold">deMed</span> | Powered by deMed
        </div>
      </div>
    </footer>
  );
}
