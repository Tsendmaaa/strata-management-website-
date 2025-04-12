import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Building Cover Photo */}
      <div className="relative w-full h-[300px] mb-8">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Our Building" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-6">
            <h1 className="text-4xl font-bold text-white mb-2">Oceanview Strata</h1>
            <p className="text-white/90">123 Beach Road, Seaside</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-purple-800">Strata Dashboard</h2>
          <Link href="/contact">
            <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
              <Users size={16} />
              <span>Contact Committee</span>
            </Button>
          </Link>
        </header>

        {/* Financial Management Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Financial Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-green-500 shadow-md">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-700">Administrative Fund</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-3xl font-bold text-green-600">$45,250</p>
                <p className="text-sm text-gray-500">Last updated: April 10, 2025</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-blue-500 shadow-md">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Capital Works Fund</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-3xl font-bold text-blue-600">$128,750</p>
                <p className="text-sm text-gray-500">Last updated: April 10, 2025</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Future Plans Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Future Plans & Expenses</h2>
          <Card className="border-t-4 border-orange-500 shadow-md">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-700">Upcoming Projects</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex justify-between items-center p-2 bg-orange-50 rounded">
                  <span className="font-medium">Roof Repairs</span>
                  <span className="font-semibold text-orange-600">$15,000</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-orange-50 rounded">
                  <span className="font-medium">Garden Landscaping</span>
                  <span className="font-semibold text-orange-600">$5,500</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-orange-50 rounded">
                  <span className="font-medium">Hallway Painting</span>
                  <span className="font-semibold text-orange-600">$8,200</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-orange-50 rounded">
                  <span className="font-medium">Security System Upgrade</span>
                  <span className="font-semibold text-orange-600">$12,000</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Last Month's Spending */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800">Last Month's Spending</h2>
          <Card className="border-t-4 border-red-500 shadow-md">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-red-700">March 2025 Expenses</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="space-y-3">
                <li className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">Cleaning Services</span>
                  <span className="font-semibold text-red-600">$1,200</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">Electricity (Common Areas)</span>
                  <span className="font-semibold text-red-600">$850</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">Plumbing Repairs</span>
                  <span className="font-semibold text-red-600">$650</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">Insurance Premium</span>
                  <span className="font-semibold text-red-600">$2,300</span>
                </li>
                <li className="flex justify-between items-center p-2 bg-red-50 rounded">
                  <span className="font-medium">Management Fees</span>
                  <span className="font-semibold text-red-600">$1,500</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}
