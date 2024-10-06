"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageCircle } from "lucide-react"
import Image from 'next/image'
import { dummyPosts } from "@/lib/dummyData"

export default function Community() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Community Feed</h1>
      <div className="space-y-4">
        {dummyPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.author}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
              {post.image && (
                <Image
                  src={post.image}
                  alt="Post image"
                  width={300}
                  height={200}
                  className="mt-4 rounded-lg"
                />
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes} Likes
              </Button>
              <Button variant="ghost">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.comments} Comments
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}