"use client"

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const dummyProducts = [
  { id: 1, name: 'Copper Vase', price: 15000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531627.jpg' },
  { id: 2, name: 'Copper Bowl Set', price: 25000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531628.jpg' },
  { id: 3, name: 'Decorative Copper Plate', price: 10000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531629.jpg' },
  { id: 4, name: 'Copper Jewelry Box', price: 18000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531630.jpg' },
  { id: 5, name: 'Copper Wall Art', price: 30000, image: 'https://img.freepik.com/free-photo/medium-shot-contemplative-man-seaside_23-2150531631.jpg' },
]

export default function Marketplace() {
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([])

  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId)
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productId ? {...item, quantity: item.quantity + 1} : item
        )
      } else {
        return [...prevCart, { id: productId, quantity: 1 }]
      }
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">MCAN Marketplace</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="mb-4 rounded-lg"
              />
              <p>Price: ₦{product.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => addToCart(product.id)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cart.map(item => {
          const product = dummyProducts.find(p => p.id === item.id)
          return (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{product?.name} x {item.quantity}</span>
              <span>₦{(product?.price || 0) * item.quantity}</span>
            </div>
          )
        })}
        <Button className="w-full mt-4">Checkout</Button>
      </div>
    </div>
  )
}