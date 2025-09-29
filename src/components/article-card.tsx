import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookmarkIcon, ClapIcon, CommentIcon, MinusCircleIcon, StarIcon } from "./icons"
import { type ArticleInterface } from "@/lib/interfaces"

interface ArticleCardProps {
  article: ArticleInterface
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group border-b border-border/70 pb-8 last:border-b-0">
      <div className="flex gap-4">
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Author info */}
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="h-5 w-5" >
              <AvatarImage src={article.authorUrl} alt={article.author} />
              <AvatarFallback className="text-xs bg-muted">{article.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
              <span>in</span>
              <span className="font-medium text-foreground hover:underline cursor-pointer text-nowrap truncate">
                {article.publication}
              </span>
              <span>by</span>
              <span className="font-medium text-foreground hover:underline cursor-pointer truncate text-nowrap">{article.author}</span>
            </div>
          </div>
          {/* Title and image */}
          <div className="grid grid-cols-3 justify-between">
            {/* Title */}
            <div className="col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-muted-foreground transition-colors cursor-pointer leading-tight">
                {article.title}
              </h2>

              {/* Excerpt */}
              <p className="text-muted-foreground text-base mb-6 line-clamp-2 leading-relaxed hidden sm:block">
                {article.excerpt}
              </p>
            </div>
            {/* Image */}
            <div className="w-full flex justify-end">
              <div className="md:w-[160px] h-[107px]">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt=""
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Meta info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground">
              <StarIcon />
              <span className="text-nowrap">{article.timeAgo}</span>
              <div className="flex items-center gap-1 hover:text-foreground cursor-pointer transition-colors">
                <ClapIcon className="h-4 w-4" />
                {article.claps >= 1000 ? `${(article.claps / 1000).toFixed(1).replace(/\.0$/, "")}K` : article.claps}
              </div>
              <div className="flex items-center gap-1 hover:text-foreground cursor-pointer transition-colors">
                <CommentIcon className="h-4 w-4" />
                <span>{article.comments}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <MinusCircleIcon />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <BookmarkIcon />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-muted">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article >
  )
}
