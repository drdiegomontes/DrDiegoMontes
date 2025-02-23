import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Regular Chiropractic Care",
    excerpt: "Discover how regular chiropractic adjustments can improve your overall health and well-being.",
    date: "2025-02-15",
    author: "Dr. Diego Montes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly%20The%20Benefits%20of%20Regular%20Chiropractic%20Care%2030775.jpg-7OiN1Mwy2AId1xTHJua3ICgKawQK2n.jpeg",
    category: "Wellness",
  },
  {
    id: 2,
    title: "5 Exercises to Improve Your Posture",
    excerpt: "Learn simple exercises you can do at home to correct your posture and reduce back pain.",
    date: "2025-02-10",
    author: "Dr. Diego Montes",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop",
    category: "Exercise",
  },
  {
    id: 3,
    title: "Understanding and Managing Sciatica",
    excerpt: "Get insights into the causes of sciatica and effective treatment options for long-term relief.",
    date: "2025-02-05",
    author: "Dr. Diego Montes",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Firefly%20Understanding%20and%20Managing%20Sciatica%2030775.jpg-7IdYOvQJOYaor42lwOmpl8MYeBWiwj.jpeg",
    category: "Pain Management",
  },
  {
    id: 4,
    title: "Nutrition Tips for a Healthy Spine",
    excerpt: "Explore the best foods and nutrients to support your spinal health and overall well-being.",
    date: "2025-01-30",
    author: "Dr. Diego Montes",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1920&auto=format&fit=crop",
    category: "Nutrition",
  },
  {
    id: 5,
    title: "The Connection Between Chiropractic Care and Stress Relief",
    excerpt: "Explore how regular chiropractic treatments can help reduce stress and improve overall well-being.",
    date: "2025-01-25",
    author: "Dr. Diego Montes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1774-3cacLNcvFZXaRXN2ZVJcDAyhn85YaJ.jpeg",
    category: "Wellness",
  },
  {
    id: 6,
    title: "Chiropractic Care for Athletes: Enhancing Performance and Recovery",
    excerpt:
      "Learn how athletes can benefit from chiropractic treatments to improve performance and speed up recovery.",
    date: "2025-01-20",
    author: "Dr. Diego Montes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1807-y1KigXf3s5xnXdJsOrgwe4XRWGlix0.jpeg",
    category: "Sports",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5009.jpg-mZYTEkFgmYLQU2Xjv0DxYEYnrEEjzk.jpeg"
          alt="Chiropractor performing spinal adjustment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">Our Blog</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
              Discover insights, tips, and the latest in chiropractic care to support your journey to optimal health and
              wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className={`object-cover ${post.id === 6 ? "object-[center_70%]" : "object-center"}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">
                    {post.category} • {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h2 className="text-2xl font-light mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Button asChild size="sm" className="bg-black text-white hover:bg-gray-800 transition-colors">
                      <Link href={`/blog/${post.id}`} className="inline-flex items-center">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 text-white" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up - Updated styling */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Stay Updated with Our Newsletter</h2>
            <p className="text-lg text-gray-300 mb-12">
              Get the latest health tips, wellness advice, and exclusive offers delivered straight to your inbox.
            </p>
            <form className="flex flex-col gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 text-base"
              />
              <Button
                type="submit"
                className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 text-base font-normal"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
      <div className="h-px bg-white"></div>
    </main>
  )
}

