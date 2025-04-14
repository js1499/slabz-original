"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Package, ShoppingCart, RefreshCw } from "lucide-react"

// Mock data for inventory
const INVENTORY_ITEMS = [
  {
    id: "1",
    name: "PSA 10 Umbreon VMAX Alt Art",
    image: "/placeholder.svg?height=300&width=220",
    value: 2500,
    acquiredDate: "2023-04-15",
    status: "in-inventory",
  },
  {
    id: "2",
    name: "PSA 9 Charizard GX Rainbow Rare",
    image: "/placeholder.svg?height=300&width=220",
    value: 1200,
    acquiredDate: "2023-03-22",
    status: "in-inventory",
  },
  {
    id: "3",
    name: "PSA 10 Pikachu VMAX",
    image: "/placeholder.svg?height=300&width=220",
    value: 800,
    acquiredDate: "2023-05-01",
    status: "shipping",
  },
  {
    id: "4",
    name: "PSA 9 Mewtwo GX",
    image: "/placeholder.svg?height=300&width=220",
    value: 450,
    acquiredDate: "2023-04-10",
    status: "for-trade",
  },
]

export default function InventoryPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems =
    activeTab === "all" ? INVENTORY_ITEMS : INVENTORY_ITEMS.filter((item) => item.status === activeTab)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">My Inventory</h1>

        <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all" className="text-sm">
              All Cards
              <Badge className="ml-2 bg-muted text-muted-foreground">{INVENTORY_ITEMS.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="in-inventory" className="text-sm">
              In Inventory
              <Badge className="ml-2 bg-muted text-muted-foreground">
                {INVENTORY_ITEMS.filter((i) => i.status === "in-inventory").length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="shipping" className="text-sm">
              Shipping
              <Badge className="ml-2 bg-muted text-muted-foreground">
                {INVENTORY_ITEMS.filter((i) => i.status === "shipping").length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="for-trade" className="text-sm">
              For Trade
              <Badge className="ml-2 bg-muted text-muted-foreground">
                {INVENTORY_ITEMS.filter((i) => i.status === "for-trade").length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative aspect-[3/4] w-full">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1 line-clamp-1">{item.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <Badge variant="outline" className="font-mono">
                        {item.value.toLocaleString()}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Acquired {new Date(item.acquiredDate).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {item.status === "in-inventory" && (
                        <>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Package className="mr-2 h-4 w-4" />
                            Ship
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Trade
                          </Button>
                        </>
                      )}

                      {item.status === "shipping" && (
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Shipping in Progress
                        </Button>
                      )}

                      {item.status === "for-trade" && (
                        <Button variant="outline" size="sm" className="w-full">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Listed for Trade
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
