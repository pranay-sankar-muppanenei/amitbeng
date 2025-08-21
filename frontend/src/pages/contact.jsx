import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    membership: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/.test(formData.email))
      tempErrors.email = "Email is not valid";
    if (!formData.membership) tempErrors.membership = "Please select an option";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        membership: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Top Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <img src='/address.png' className='mx-auto'/>
          <h3 className="font-semibold text-lg">Our Address</h3>
          <p className="text-gray-600 mt-1">
            1534 Ford Street, Santa Clara, CA, California
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <img src='/phone.png' className='mx-auto'/>
          <h3 className="font-semibold text-lg">Phone Number</h3>
          <p className="text-gray-600 mt-1">408-438-4220</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <img src='/files.png' className='mx-auto'/>
          <h3 className="font-semibold text-lg">Email Address</h3>
          <p className="text-gray-600 mt-1">demo@domain.com</p>
        </div>
      </section>

      {/* Contact Form + Text */}
      <section className="max-w-full bg-green-100 mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          {/* Name */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Company */}
          <div className="mb-4">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Membership */}
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">
              Do you have membership?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="membership"
                  value="yes"
                  checked={formData.membership === "yes"}
                  onChange={handleChange}
                  className="text-teal-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="membership"
                  value="no"
                  checked={formData.membership === "no"}
                  onChange={handleChange}
                  className="text-teal-600"
                />
                No
              </label>
            </div>
            {errors.membership && (
              <p className="text-red-500 text-sm mt-1">{errors.membership}</p>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <textarea
              rows="4"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Right Side Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in touch</h2>
          <p className="text-gray-600 mb-6">
            Praesent et eros laoreet metus feugiat vulputate. Duis in risus arcu.
            Praesent id nibh mauris. Phasellus malesuada dui nunc, vitae blandit
            nisl placerat id.
          </p>

          {/* Staff Testimonials */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <img
                src="/test2.jpg"
                alt="Jonna Wang"
                className="w-26 h-26 rounded-full mx-auto mb-3"
              />
              <h4 className="font-semibold">Jonna Wang</h4>
              <p className="text-sm text-teal-600">CS Staff</p>
              <p className="text-gray-600 text-sm mt-2 italic">
                “Lorem ipsum dolor sit amet, adipiscing elit.”
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md text-center">
              <img
                src="/test1.jpg"
                alt="John Devon"
                className="w-26 h-26 rounded-full mx-auto mb-3"
              />
              <h4 className="font-semibold">John Devon</h4>
              <p className="text-sm text-teal-600">CS Staff</p>
              <p className="text-gray-600 text-sm mt-2 italic">
                “Lorem ipsum dolor sit amet, adipiscing elit.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
