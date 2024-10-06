"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { dummyTasks } from "@/lib/dummyData"

export default function Tasks() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Tasks</h1>
      <div className="space-y-4">
        {dummyTasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
              <p className="mt-2">Due Date: {task.dueDate}</p>
              <p>Status: {task.status}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Update Status</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}