"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "for-you", label: "For you" },
  { id: "featured", label: "Featured" },
]

export function NavigationTabs() {
  const [activeTab, setActiveTab] = useState("for-you")

  return (
    <div className="border-b border-border/70">
      <nav className="flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "py-4 px-1 border-b-2 font-medium text-sm transition-colors",
              activeTab === tab.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground",
            )}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}
