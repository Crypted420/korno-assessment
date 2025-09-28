import { Header } from "@/components/header"
import { NavigationTabs } from "@/components/navigation-tabs"
import { ArticleCard, type Article } from "@/components/article-card"
import { Sidebar } from "@/components/sidebar"

const articles: Article[] = [
  {
    id: 1,
    publication: "Neo4j Developer Blog",
    authorUrl: "https://miro.medium.com/v2/resize:fill:20:20/1*dbXVrszMTRob9qYMUY2lqg.png",
    author: "Amber Lennox",
    title: "HHow to Bolster Your Cybersecurity by Visualizing Attack Graphs With Neo4j and G.V()",
    excerpt: "Think like a cyberattacker to quickly and easily identify vulnerabilities in your system with minimal query writing",
    timeAgo: "5d ago",
    claps: 1200,
    comments: 45,
    image: "https://miro.medium.com/v2/resize:fill:80:53/1*57K9JQyd_jehsNzzDdSTLQ.png",
  },
  {
    id: 2,
    publication: "Data Science Collective",
    author: "James Wilkins",
    authorUrl: "https://miro.medium.com/v2/resize:fill:20:20/1*0nV0Q-FBHj94Kggq00pG2Q.jpeg",
    title: "You’re using ChatGPT wrong. Here’s how to prompt like a pro",
    excerpt:
      "Smarter prompts lead to smarter responses",
    timeAgo: "4d ago",
    claps: 700,
    comments: 16,
    image: "https://miro.medium.com/v2/da:true/resize:fill:160:107/0*631gQouqF6GkryMx",
  },
  {
    id: 3,
    publication: "The Medium Blog",
    author: "Medium Staff",
    authorUrl: "https://miro.medium.com/v2/resize:fill:20:20/1*7eq6Xl7nRYU77U7IPYvoDg.jpeg",
    title: "It happened on Medium: August 2025 roundup",
    excerpt:
      "New stats, insights and reflections on AI, and other stories beloved by Medium readers",
    timeAgo: "Jul 30",
    claps: 3700,
    comments: 165,
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*hsmahUi9PJbceGPVKqLqBQ.jpeg",
  },
  {
    id: 4,
    publication: "Clean Compiler",
    author: "Clean Compiler",
    authorUrl: "https://miro.medium.com/v2/resize:fill:32:32/1*3i0nWs2IvT-hY6dVehWKFg.png",
    title: "I Trusted My Male Friends Until I Learned The Truth",
    excerpt:
      "Why familiar men can be the most dangerous gamble",
    timeAgo: "3d ago",
    claps: 52,
    comments: 5,
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*yvXEch7J3pPzwgEv",
  },
  {
    id: 5,
    publication: "The Generator",
    author: "Jim the AI Whisperer",
    authorUrl: "https://miro.medium.com/v2/da:true/resize:fill:32:32/0*xJDrRKBJH9CPpNrg",
    title: "Game theory is the cheat code to life",
    excerpt: "Game theory can explain humanity’s biggest problem",
    timeAgo: "3d ago",
    claps: 2000,
    comments: 36,
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*1ez4no8pI0PLpyhQ",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-4 md:px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 mt-8">
          {/* Main Content */}
          <main className="flex-1 max-w-none lg:max-w-2xl space-y-10 px-0! md:px-10">
            <NavigationTabs />
            <div className="space-y-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block w-80 flex-shrink-0 border-l border-border/70 pl-5">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  )
}
