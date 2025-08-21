import Link from "next/link";
import { blogsData } from "@/data/blogsData";
import { FaArrowRight } from "react-icons/fa";

export default function Blogs() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="mb-12">
          <p className="text-teal-600 font-semibold uppercase tracking-wide">
            News & Stories
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            News for you, stuff that matters
          </h1>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover hover:rotate-3 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-center px-3 py-1 rounded-md">
                  <p className="text-sm font-semibold">{blog.date}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>
                <Link
                  href={`/blogDetails/${blog.id}`}
                  className="text-teal-600 flex items-center text-sm font-medium hover:underline"
                >
                  read more <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
