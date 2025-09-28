import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AvatarImage } from "@radix-ui/react-avatar"
import { BookmarkIcon, StarIcon } from "./icons"

const staffPicks = [
  {
    id: 1,
    author: "Joshua Samuel Brown",
    authorUrl: "https://miro.medium.com/v2/resize:fill:20:20/1*GUbrsCT8rhWifCUj4ahVSg.png",
    publication: "Rooted",
    title: "The Four Stages of Life as Experienced Through Taiwanese Cuisine",
    timeAgo: "2d ago",
  },
  {
    id: 2,
    author: "Zulie @ Medium",
    authorUrl: "https://miro.medium.com/v2/resize:fill:20:20/1*6eNjGkj9kQ74w9KCgIKtPQ.jpeg",
    publication: "The Medium Handbook",
    title: 'How this brand strategist uses Medium to explore ideas, repurpose content, and land clients',
    timeAgo: "5d ago",
  },
  {
    id: 3,
    author: "Jud Brewer MD PhD",
    authorUrl: "https://miro.medium.com/v2/resize:fill:20:20/2*PlzCXNbNRrVFuQow4oIXTA.png",
    title: "From “I Have To” to “I Get To”: How One Word Change Rewires Your Brain",
    timeAgo: "Sep 3",
  },
]

const recommendedTopics = ["Data Science", "React", "Coding", "Mental Health", "UX", "Python", "Productivity"]

const whoToFollow = [
  {
    id: 1,
    name: "Emily J. Smith",
    profileUrl: "https://miro.medium.com/v2/resize:fill:88:88/1*N-9MfC5BB-lPPU197Yye8g.jpeg",
    description: "Writer and tech professional. My debut novel, NOTHING SERIOUS, is out Feb '25 from William",
    verified: true,
  },
  {
    id: 2,
    name: "Full Frame",
    profileUrl: "https://miro.medium.com/v2/resize:fill:32:32/1*_5Klurwb4d2gu0zXtjte-w.png",
    verified: true,
    description: "The home of enthusiastic supporters of Fine Art Photography. We respect its history, admire its present form, and look forward to its future.",
    isPublication: true,
  },
  {
    id: 3,
    name: "Avi Loeb",
    profileUrl: "https://miro.medium.com/v2/resize:fill:32:32/1*upiboNSChj1BIvycXiID7w.png",
    description: 'Avi Loeb is the Baird Professor of Science and Institute director at Harvard University and the bestselling author of “Extraterrestrial” and "Interstellar".',
  },
]

export function Sidebar() {
  return (
    <div className="space-y-8 sticky top-20">
      {/* Staff Picks */}
      <Card className="border-0 shadow-none">
        <CardHeader className=" px-0">
          <CardTitle className="text-base font-semibold">Staff Picks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-0">
          {staffPicks.map((pick) => (
            <div key={pick.id} className="space-y-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-4 w-4">
                  <AvatarImage src={pick.authorUrl} alt={pick.author} />
                  <AvatarFallback className="text-xs bg-muted">{pick.author.charAt(0)}</AvatarFallback>
                </Avatar>
                {pick.publication && (
                  <>
                    <span className="text-sm text-muted-foreground">in</span>
                    <span className="text-sm font-medium text-muted-foreground text-nowrap">{pick.publication}</span>
                    <span className="text-sm text-muted-foreground">by</span>
                  </>
                )}
                <span className="text-sm font-medium hover:underline cursor-pointer text-nowrap">{pick.author}</span>
              </div>
              <h3 className="text-sm font-bold leading-tight line-clamp-2 cursor-pointer hover:text-muted-foreground transition-colors mb-3">
                {pick.title}
              </h3>
              <div className="flex items-center gap-3">
                <StarIcon />
                <p className="text-xs text-muted-foreground">{pick.timeAgo}</p>
              </div>
            </div>
          ))}
          <Button variant="link" className="p-0 h-auto text-sm text-gray-400 hover:underline font-normal">
            See the full list
          </Button>
        </CardContent>
      </Card>

      {/* Recommended Topics */}
      <Card className="border-0 shadow-none p-0!">
        <CardHeader className="px-0">
          <CardTitle className="text-base font-semibold">Recommended topics</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <div className="flex flex-wrap gap-3 mb-4">
            {recommendedTopics.map((topic) => (
              <Badge
                key={topic}
                variant="secondary"
                className="cursor-pointer hover:bg-muted transition-colors rounded-full p-4 bg-gray-100"
              >
                {topic}
              </Badge>
            ))}
          </div>
          <Button variant="link" className="p-0 h-auto text-sm text-gray-400 hover:underline font-normal">
            See more topics
          </Button>
        </CardContent>
      </Card>

      {/* Who to Follow */}
      <Card className="border-0 shadow-none">
        <CardHeader className="pb-4 px-0">
          <CardTitle className="text-base font-semibold">Who to follow</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-0">
          {whoToFollow.map((user) => (
            <div key={user.id} className="flex items-start justify-between">
              <div className="flex gap-3 flex-1 min-w-0">
                <Avatar className="h-8 w-8 flex-shrink-0 cursor-pointer">
                  <AvatarImage src={user.profileUrl} alt={user.name} />
                  <AvatarFallback className="text-sm bg-muted">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-medium truncate hover:underline cursor-pointer">{user.name}</h4>

                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{user.description}</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="ml-2 flex-shrink-0 bg-transparent hover:bg-foreground hover:text-background border-[#242424] text-[#242424] rounded-full px-4"
              >
                Follow
              </Button>
            </div>
          ))}
          <Button variant="link" className="p-0 h-auto text-sm text-gray-400 hover:underline font-normal">
            See more suggestions
          </Button>
        </CardContent>
      </Card>

      {/* Reading List */}
      <Card className="border-0 shadow-none p-0!">
        <CardHeader className="px-0">
          <CardTitle className="text-base font-semibold">Reading list</CardTitle>
        </CardHeader>
        <CardContent className="px-0!">
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Click the <BookmarkIcon className="inline h-4 w-4 mx-1" /> on any story to easily add it to your reading list or
            a custom list that you can share.
          </p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
            {["Help", "Status", "About", "Careers", "Press", "Blog", "Privacy", "Rules", "Terms", "Text to speech"].map(
              (link) => (
                <span key={link} className="hover:text-foreground cursor-pointer transition-colors">
                  {link}
                </span>
              ),
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
