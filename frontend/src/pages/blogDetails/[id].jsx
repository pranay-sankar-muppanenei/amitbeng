import { useRouter } from "next/router";
import { blogDetailData } from "@/data/blogDetailData";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog by id
  const blog = blogDetailData.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{blog.date}</p>
      <div className="">
        <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />
         <div className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
      
     
      </div>
    </div>
  );
}
