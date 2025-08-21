import { FaFacebookF, FaTwitter, FaYoutube, FaWordpress } from "react-icons/fa";

export default function Footer({ showSubscribe = true }) {
  return (
    <footer className="bg-white">
      {/* Subscribe Section */}
      {showSubscribe && (
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <div className="bg-teal-100 rounded-lg shadow-lg p-8 text-center -mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Subscribe Newsletter
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Email input */}
            <div className="mt-6 flex justify-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full max-w-md px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-teal-400 to-green-500 text-white px-6 py-3 rounded-r-md">
                Join
              </button>
            </div>

            {/* Social icons */}
            <div className="mt-6 flex justify-center gap-4 text-teal-600">
              <a href="#"><FaFacebookF size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaYoutube size={20} /></a>
              <a href="#"><FaWordpress size={20} /></a>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-16 flex flex-col items-center   bg-gradient-to-r from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700">
          {/* Logo + About */}
          <div>
            <img src="/logo-demed.png" alt="logo" className="h-[30px] mb-4" />
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis .
            </p>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service</h3>
            <ul className="space-y-2">
              <li>Check Up</li>
              <li>Emergency Call</li>
              <li>Consultation</li>
            </ul>
          </div>

          {/* Further Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Further Links</h3>
            <ul className="space-y-2">
              <li>Term & Condition</li>
              <li>News</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Location</h3>
            <p>1534 Ford Street<br />CA, California</p>
            <div className="mt-4 flex gap-4 text-teal-600">
              <a href="#"><FaFacebookF size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaYoutube size={20} /></a>
              <a href="#"><FaWordpress size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="w-full border-gray-400"/>
        <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-600">
          Copyright © 2025 deMed | Powered by deMed
        </div>
      </div>
    </footer>
  );
}
