import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Welcome to Your MCAN Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Community Feed</CardTitle>
            <CardDescription>See the latest updates from the MCAN community</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531619.jpg"
              alt="Community"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <Button className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Post
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lodge Bookings</CardTitle>
            <CardDescription>Manage your lodge reservations</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531620.jpg"
              alt="Lodge"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <Button className="w-full">View Bookings</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Track your assigned tasks and projects</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531621.jpg"
              alt="Tasks"
              width={300}
              height={200}
              className="mb-4 rounded-lg"
            />
            <Button className="w-full">View Tasks</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}