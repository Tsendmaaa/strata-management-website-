
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Home } from "lucide-react"

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-purple-800">Committee Contacts</h1>
          <Link href="/" legacyBehavior>
            <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
              <Home size={16} />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-t-4 border-cyan-500 shadow-lg overflow-hidden">
            <CardHeader className="bg-cyan-50">
              <CardTitle className="text-cyan-700">Chairperson</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center pt-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-cyan-200">
                <Image
                  src="/images/photo1.png"  // Changed from /image/ to /images/
                  alt="John Smith"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-xl font-semibold text-cyan-700">John Smith</p>
              <div className="flex items-center mt-3 text-gray-700">
                <Phone className="h-4 w-4 mr-2 text-cyan-600" />
                <span>0412 345 678</span>
              </div>
              <div className="flex items-center mt-2 text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-cyan-600" />
                <span>chair@strataexample.com</span>
              </div>
              <p className="mt-4 text-sm text-center text-gray-600 bg-cyan-50 p-3 rounded-lg">
                Responsible for chairing meetings and overall strata management.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-amber-500 shadow-lg overflow-hidden">
            <CardHeader className="bg-amber-50">
              <CardTitle className="text-amber-700">Treasurer</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center pt-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-amber-200">
                <Image
                  src="/images/photo2.png"  // Changed from /image/ to /images/
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-xl font-semibold text-amber-700">Sarah Johnson</p>
              <div className="flex items-center mt-3 text-gray-700">
                <Phone className="h-4 w-4 mr-2 text-amber-600" />
                <span>0423 456 789</span>
              </div>
              <div className="flex items-center mt-2 text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-amber-600" />
                <span>treasurer@strataexample.com</span>
              </div>
              <p className="mt-4 text-sm text-center text-gray-600 bg-amber-50 p-3 rounded-lg">
                Manages financial matters including budgets and expense tracking.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-emerald-500 shadow-lg overflow-hidden">
            <CardHeader className="bg-emerald-50">
              <CardTitle className="text-emerald-700">Secretary</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center pt-6">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-emerald-200">
                <Image
                  src="/images/photo3.png"  // Changed from /image/ to /images/
                  alt="Michael Lee"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-xl font-semibold text-emerald-700">Michael Lee</p>
              <div className="flex items-center mt-3 text-gray-700">
                <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                <span>0434 567 890</span>
              </div>
              <div className="flex items-center mt-2 text-gray-700">
                <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                <span>secretary@strataexample.com</span>
              </div>
              <p className="mt-4 text-sm text-center text-gray-600 bg-emerald-50 p-3 rounded-lg">
                Handles correspondence, meeting minutes, and record keeping.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}