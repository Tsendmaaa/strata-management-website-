import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Home } from "lucide-react";

const committeeMembers = [
  {
    role: "Chairperson",
    name: "John Smith",
    phone: "0412 345 678",
    email: "chair@strataexample.com",
    description: "Responsible for chairing meetings and overall strata management.",
    color: "cyan",
    image: "/images/photo1.png"
  },
  {
    role: "Treasurer",
    name: "Sarah Johnson",
    phone: "0423 456 789",
    email: "treasurer@strataexample.com",
    description: "Manages financial matters including budgets and expense tracking.",
    color: "amber",
    image: "/images/photo2.png"
  },
  {
    role: "Secretary",
    name: "Michael Lee",
    phone: "0434 567 890",
    email: "secretary@strataexample.com",
    description: "Handles correspondence, meeting minutes, and record keeping.",
    color: "emerald",
    image: "/images/photo3.png"
  }
];

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-purple-800">Committee Contacts</h1>
          <Link href="/" legacyBehavior passHref>
            <Button className="bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
              <Home size={16} />
              <span>Back to Dashboard</span>
            </Button>
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <Card 
              key={member.role}
              className={`border-t-4 border-${member.color}-500 shadow-lg overflow-hidden hover:shadow-xl transition-shadow`}
            >
              <CardHeader className={`bg-${member.color}-50`}>
                <CardTitle className={`text-${member.color}-700`}>{member.role}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center pt-6">
                <div className={`relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-${member.color}-200`}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className={`text-xl font-semibold text-${member.color}-700`}>{member.name}</p>
                <div className="flex items-center mt-3 text-gray-700">
                  <Phone className={`h-4 w-4 mr-2 text-${member.color}-600`} />
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="hover:underline">
                    {member.phone}
                  </a>
                </div>
                <div className="flex items-center mt-2 text-gray-700">
                  <Mail className={`h-4 w-4 mr-2 text-${member.color}-600`} />
                  <a href={`mailto:${member.email}`} className="hover:underline">
                    {member.email}
                  </a>
                </div>
                <p className={`mt-4 text-sm text-center text-gray-600 bg-${member.color}-50 p-3 rounded-lg`}>
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}