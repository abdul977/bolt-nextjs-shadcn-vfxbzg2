import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-6 text-primary">Welcome to MCAN</h1>
      <p className="text-xl mb-8 text-muted-foreground">Uniting Muslim copper artisans across Nigeria</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/register">Register</Link>
        </Button>
      </div>
      <div className="mt-8">
        <Button asChild variant="link">
          <Link href="/admin/login">Admin Login</Link>
        </Button>
      </div>
    </div>
  )
}