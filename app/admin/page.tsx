"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BarChart3, DollarSign, Package, Plus, Settings, Trash, Upload, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for admin dashboard
const RECENT_DROPS = [
  { id: "1", name: "Umbreon VMAX", price: 1500, totalQuantity: 100, remainingQuantity: 37, revenue: 94500 },
  { id: "2", name: "2024 SIR Charizard", price: 850, totalQuantity: 200, remainingQuantity: 125, revenue: 63750 },
  { id: "3", name: "1999 Charizard", price: 1750, totalQuantity: 50, remainingQuantity: 12, revenue: 66500 },
]

const TOP_USERS = [
  { id: "1", name: "pokemon_master", totalSpent: 12500, totalPulls: 15 },
  { id: "2", name: "cardcollector99", totalSpent: 8750, totalPulls: 10 },
  { id: "3", name: "umbreon_lover", totalSpent: 7500, totalPulls: 8 },
]

export default function AdminPage() {
  const [newDropName, setNewDropName] = useState("")
  const [newDropPrice, setNewDropPrice] = useState("")
  const [newDropQuantity, setNewDropQuantity] = useState("")
  const [newDropDescription, setNewDropDescription] = useState("")
  const [newDropColor, setNewDropColor] = useState("yellow")

  const handleCreateDrop = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementation would go here
    alert("Drop created successfully!")

    // Reset form
    setNewDropName("")
    setNewDropPrice("")
    setNewDropQuantity("")
    setNewDropDescription("")
    setNewDropColor("yellow")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="text-sm">
              <BarChart3 className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="drops" className="text-sm">
              <Package className="mr-2 h-4 w-4" />
              Manage Drops
            </TabsTrigger>
            <TabsTrigger value="users" className="text-sm">
              <Users className="mr-2 h-4 w-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$224,750</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 since last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Packs Opened</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,324</div>
                  <p className="text-xs text-muted-foreground">+346 since last week</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Drops</CardTitle>
                  <CardDescription>Overview of your most recent drops</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Remaining</TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {RECENT_DROPS.map((drop) => (
                        <TableRow key={drop.id}>
                          <TableCell className="font-medium">{drop.name}</TableCell>
                          <TableCell>${drop.price}</TableCell>
                          <TableCell>
                            {drop.remainingQuantity}/{drop.totalQuantity}
                          </TableCell>
                          <TableCell className="text-right">${drop.revenue.toLocaleString()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Users</CardTitle>
                  <CardDescription>Users with the most activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Username</TableHead>
                        <TableHead>Total Spent</TableHead>
                        <TableHead className="text-right">Pulls</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {TOP_USERS.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>${user.totalSpent.toLocaleString()}</TableCell>
                          <TableCell className="text-right">{user.totalPulls}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="drops" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create New Drop</CardTitle>
                <CardDescription>Add a new card pack to the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateDrop} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="drop-name">Drop Name</Label>
                      <Input
                        id="drop-name"
                        placeholder="e.g., Umbreon VMAX"
                        value={newDropName}
                        onChange={(e) => setNewDropName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="drop-price">Price</Label>
                      <Input
                        id="drop-price"
                        placeholder="e.g., 1500"
                        type="number"
                        value={newDropPrice}
                        onChange={(e) => setNewDropPrice(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="drop-quantity">Quantity</Label>
                      <Input
                        id="drop-quantity"
                        placeholder="e.g., 100"
                        type="number"
                        value={newDropQuantity}
                        onChange={(e) => setNewDropQuantity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="drop-color">Pack Color</Label>
                      <Select value={newDropColor} onValueChange={setNewDropColor}>
                        <SelectTrigger id="drop-color">
                          <SelectValue placeholder="Select a color" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yellow">Yellow</SelectItem>
                          <SelectItem value="blue">Blue</SelectItem>
                          <SelectItem value="red">Red</SelectItem>
                          <SelectItem value="green">Green</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="drop-description">Description</Label>
                    <Textarea
                      id="drop-description"
                      placeholder="Describe the drop and potential cards"
                      value={newDropDescription}
                      onChange={(e) => setNewDropDescription(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="drop-image">Pack Image</Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="drop-image"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">PNG, JPG or GIF (MAX. 2MB)</p>
                        </div>
                        <input id="drop-image" type="file" className="hidden" />
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline">
                      Cancel
                    </Button>
                    <Button type="submit">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Drop
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manage Existing Drops</CardTitle>
                <CardDescription>Edit or remove existing drops</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Remaining</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {RECENT_DROPS.map((drop) => (
                      <TableRow key={drop.id}>
                        <TableCell className="font-medium">{drop.name}</TableCell>
                        <TableCell>${drop.price}</TableCell>
                        <TableCell>
                          {drop.remainingQuantity}/{drop.totalQuantity}
                        </TableCell>
                        <TableCell>
                          {drop.remainingQuantity > 0 ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                              Sold Out
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>View and manage user accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="relative w-64">
                    <Input placeholder="Search users..." className="pl-8" />
                    <svg
                      className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Username</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {TOP_USERS.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.name}@example.com</TableCell>
                        <TableCell>April 12, 2023</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                            Active
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Suspend
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
                <CardDescription>Configure global platform settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Platform Name</Label>
                  <Input id="platform-name" defaultValue="SLABZ" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform-fee">Platform Fee (%)</Label>
                  <Input id="platform-fee" type="number" defaultValue="5" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="referral-amount">Referral Reward Amount ($)</Label>
                  <Input id="referral-amount" type="number" defaultValue="10" />
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Integration</CardTitle>
                <CardDescription>Configure payment provider settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="stripe-key">Stripe API Key</Label>
                  <Input id="stripe-key" type="password" defaultValue="sk_test_•••••••••••••••••••••••••" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stripe-webhook">Stripe Webhook Secret</Label>
                  <Input id="stripe-webhook" type="password" defaultValue="whsec_•••••••••••••••••••••••••" />
                </div>
                <Button>Update Payment Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
