"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Users, Calendar, BookOpen, Settings, LogOut, CheckSquare, ShoppingBag, BookOpen as Course } from 'lucide-react'

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'Community', href: '/dashboard/community', icon: Users },
  { name: 'Marketplace', href: '/dashboard/marketplace', icon: ShoppingBag },
  { name: 'E-Courses', href: '/dashboard/courses', icon: Course },
  { name: 'Calendar', href: '/dashboard/calendar', icon: Calendar },
  { name: 'Lodge Bookings', href: '/dashboard/bookings', icon: BookOpen },
  { name: 'Tasks', href: '/dashboard/tasks', icon: CheckSquare },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full w-64 bg-primary text-primary-foreground">
      <div className="p-4">
        <h1 className="text-2xl font-bold">MCAN</h1>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          return (
            <Link key={link.name} href={link.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-primary-foreground hover:text-primary hover:bg-primary-foreground",
                  pathname === link.href && "bg-primary-foreground text-primary"
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                {link.name}
              </Button>
            </Link>
          )
        })}
      </nav>
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}