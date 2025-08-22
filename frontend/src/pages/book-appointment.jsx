"use client";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { FaMapMarkerAlt, FaPhoneAlt, FaAmbulance } from "react-icons/fa";

export default function BookAppointment() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Appointment booked successfully!");
  };

  const diseaseOptions = [
    { value: "piles", label: "Piles" },
    { value: "fissure", label: "Fissure" },
    { value: "fistula", label: "Fistula" },
    { value: "hernia", label: "Hernia" },
    { value: "appendicitis", label: "Appendicitis" },
    { value: "gallstones", label: "Gallstones" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            Book an Appointment
          </h1>
          <p className="mt-2 text-gray-600">
            Fill out the form below to schedule your consultation.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="mt-1 block w-full h-[50px] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="mt-1 block w-full h-[50px] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Select Disease */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Disease/Condition
              </label>
              <Controller
                name="disease"
                control={control}
                rules={{ required: "Please select a disease" }}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={diseaseOptions}
                    placeholder="Choose a disease"
                    className="mt-1"
                    classNamePrefix="react-select"
                    menuPosition="fixed"
                    menuPlacement="auto"
                    styles={{
                      control: (base) => ({
                        ...base,
                        minHeight: "50px",
                        borderRadius: "0.5rem",
                        borderColor: "#d1d5db",
                        boxShadow: "none",
                        "&:hover": { borderColor: "#3b82f6" },
                      }),
                    }}
                  />
                )}
              />
              {errors.disease && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.disease.message}
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <Controller
                name="date"
                control={control}
                rules={{ required: "Please select a date" }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Select a date"
                    onChange={(date) => field.onChange(date)}
                    selected={field.value}
                    className="mt-1 block w-full h-[50px] rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3"
                    dateFormat="dd/MM/yyyy"
                  />
                )}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Additional Message (Optional)
              </label>
              <textarea
                {...register("message")}
                rows="3"
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="block mx-auto bg-blue-600 text-white py-3 px-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Appointment Request
            </button>
          </form>
        </div>

        {/* Contact Details + Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact */}
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Contact Details
            </h2>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>
                <strong>Address:</strong> 123 Health Street, Jaipur, Rajasthan
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>
                <strong>Helpline:</strong> +91-9876543210
              </span>
            </p>
            <p className="flex items-center gap-2">
              <FaAmbulance className="text-red-600" />
              <span>
                <strong>Emergency:</strong> 24/7 Available
              </span>
            </p>
          </div>

          {/* Google Maps */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.776684028717!2d75.78727077507313!3d26.853677676695736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e0c77b7e23%3A0xaed2c44a93f7ef3a!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1692000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
