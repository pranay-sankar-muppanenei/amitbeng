// pages/404.jsx
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 text-center px-4">
      <h1 className="text-[100px] font-extrabold text-black mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Pages not found!
      </h2>
      <p className="text-gray-600 max-w-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus
        luctus nec ullamcorper mattis, pulvinar dapibus leo. Curabitur pretium
        justo eget mauris porta sodales vitae.
      </p>
      <button
        onClick={() => router.back()}
        className="px-6 py-2 bg-green-200 hover:bg-green-300 text-black rounded-lg shadow-md transition"
      >
        Go Back
      </button>
    </div>
  );
}
