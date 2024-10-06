"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const dummyCourses = [
  { id: 1, name: 'Introduction to Copper Crafting', price: 2500, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531630.jpg' },
  { id: 2, name: 'Advanced Copper Etching Techniques', price: 4000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531631.jpg' },
  { id: 3, name: 'Masterclass: Creating Copper Sculptures', price: 6000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531632.jpg' },
  { id: 4, name: 'Copper Jewelry Making', price: 3500, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531633.jpg' },
  { id: 5, name: 'Business Skills for Copper Artisans', price: 5000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531634.jpg' },
]

export default function Courses() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">MCAN E-Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={course.image}
                alt={course.name}
                width={300}
                height={200}
                className="mb-4 rounded-lg"
              />
              <p>Price: ₦{course.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
</boltArtifact>

For the calendar, we'll use the `react-big-calendar` library. First, let's install it:

<boltArtifact id="install-calendar" title="Install react-big-calendar">
<boltAction type="shell">
<command>npm install react-big-calendar moment</command>