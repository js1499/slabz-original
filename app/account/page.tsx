"use client"

import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, DollarSign, History, Package, Share2, User, Copy, CheckCircle } from "lucide-react"
import { useState } from "react"

// Mock user data
const USER = {
  name: "John Doe",
  email: "john.doe@example.com",
  balance: 2500,
  referralCode: "JOHN500",
  transactions: [
    { id: "1", type: "purchase", amount: -850, description: "2024 SIR Charizard Pack", date: "2023-04-15" },
    { id: "2", type: "sale", amount: 1200, description: "Sold PSA 9 Charizard", date: "2023-04-10" },
    { id: "3", type: "purchase", amount: -1500, description: "Umbreon VMAX Pack", date: "2023-04-05" },
    { id: "4", type: "deposit", amount: 5000, description: "Account Deposit", date: "2023-04-01" },
  ],
  shippingAddress: {
    name: "John Doe",
    street: "123 Main St",
    city: "Pokémon City",
    state: "CA",
    zip: "12345",
    country: "USA",
  },
}

export default function AccountPage() {
  const [copied, setCopied] = useState(false)

  const copyReferralCode = () => {
    navigator.clipboard.writeText(USER.referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="text-sm">
              <User className="mr-2 h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="transactions" className="text-sm">
              <History className="mr-2 h-4 w-4" />
              Transactions
            </TabsTrigger>
            <TabsTrigger value="shipping" className="text-sm">
              <Package className="mr-2 h-4 w-4" />
              Shipping
            </TabsTrigger>
            <TabsTrigger value="referrals" className="text-sm">
              <Share2 className="mr-2 h-4 w-4" />
              Referrals
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Manage your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={USER.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={USER.email} />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Balance</CardTitle>
                  <CardDescription>Your current balance and payment methods</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-2 text-primary" />
                      <span className="font-medium">Current Balance</span>
                    </div>
                    <span className="text-xl font-bold">${USER.balance.toLocaleString()}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Add Funds
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Payment Methods
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Your recent transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {USER.transactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex justify-between items-center p-4 border-b border-border last:border-0"
                    >
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(transaction.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`font-bold ${transaction.amount > 0 ? "text-green-500" : ""}`}>
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
                <CardDescription>Manage where your cards get shipped</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="shipping-name">Full Name</Label>
                  <Input id="shipping-name" defaultValue={USER.shippingAddress.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="shipping-street">Street Address</Label>
                  <Input id="shipping-street" defaultValue={USER.shippingAddress.street} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shipping-city">City</Label>
                    <Input id="shipping-city" defaultValue={USER.shippingAddress.city} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shipping-state">State</Label>
                    <Input id="shipping-state" defaultValue={USER.shippingAddress.state} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="shipping-zip">ZIP Code</Label>
                    <Input id="shipping-zip" defaultValue={USER.shippingAddress.zip} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="shipping-country">Country</Label>
                    <Input id="shipping-country" defaultValue={USER.shippingAddress.country} />
                  </div>
                </div>
                <Button>Save Address</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referrals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Referral Program</CardTitle>
                <CardDescription>Earn rewards by referring friends</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="mb-2">
                    Share your referral code with friends and earn $10 when they make their first purchase!
                  </p>
                  <div className="flex items-center">
                    <div className="flex-1 bg-background rounded-l-md p-3 border border-r-0 border-border font-mono">
                      {USER.referralCode}
                    </div>
                    <Button variant="default" className="rounded-l-none" onClick={copyReferralCode}>
                      {copied ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Referral Stats</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold">0</p>
                      <p className="text-sm text-muted-foreground">Total Referrals</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold">$0</p>
                      <p className="text-sm text-muted-foreground">Earned</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold">$0</p>
                      <p className="text-sm text-muted-foreground">Pending</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
