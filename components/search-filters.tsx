"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleClearFilters = () => {
    setSearchQuery("")
    setMinPrice("")
    setMaxPrice("")
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full max-w-4xl mx-auto my-8">
      <div className="relative w-full sm:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by pack or card name"
          className="w-full pl-10 bg-muted/50"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill="currentColor" />
          </svg>
          min
        </Button>

        <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" fill="currentColor" />
          </svg>
          max
        </Button>

        <Button variant="ghost" size="sm" onClick={handleClearFilters} className="flex-1 sm:flex-none">
          clear filters
        </Button>
      </div>
    </div>
  )
}
