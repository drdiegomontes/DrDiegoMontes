import { Star, ArrowRight } from "lucide-react"

const articles = [
  "Porsche Newsroom - Driven By Dream",
  "Wallpaper - Driven by Dreams",
  "Opera North - The Turn of the Screw",
]

const awards = [
  { name: "Site of the Year", count: 1 },
  { name: "Developer Site of the Year", count: 1 },
  { name: "Site of the Month", count: 1 },
  { name: "Site of the Day", count: 10 },
  { name: "Honorable Mention", count: 16 },
]

export default function AwardsAndArticles() {
  return (
    <section className="bg-gradient-to-b from-[#f5f2ff] to-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-6xl font-light mb-8 relative">
              ARTICLES
              <span className="absolute -top-4 -right-4 text-[#7FFFD4]">
                <ArrowRight size={24} />
              </span>
            </h2>
            <ul className="space-y-4">
              {articles.map((article, index) => (
                <li key={index} className="text-lg border-b border-gray-300 pb-4">
                  {article}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-6xl font-light mb-8 relative">
              AWARDS
              <span className="absolute -top-4 -right-4 text-[#7FFFD4]">
                <Star size={24} />
              </span>
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-light mb-4">Awwwards</h3>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li key={index} className="flex justify-between text-lg">
                    <span>{award.name}</span>
                    <span className="text-gray-500">{award.count.toString().padStart(3, "0")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

