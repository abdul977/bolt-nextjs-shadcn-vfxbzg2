"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { dummyLodges } from "@/lib/dummyData"

export default function Bookings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Lodge Bookings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyLodges.map((lodge) => (
          <Card key={lodge.id}>
            <CardHeader>
              <CardTitle>{lodge.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={lodge.image}
                alt={lodge.name}
                width={300}
                height={200}
                className="mb-4 rounded-lg"
              />
              <p>Location: {lodge.location}</p>
              <p>Available Rooms: {lodge.availableRooms}</p>
              <p>Price: ₦{lodge.price} per night</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}