"use client"

import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

const events = [
  {
    title: 'MCAN Annual Conference',
    start: new Date(2023, 8, 15),
    end: new Date(2023, 8, 17),
  },
  {
    title: 'Copper Crafting Workshop',
    start: new Date(2023, 8, 25),
    end: new Date(2023, 8, 25),
  },
]

export default function CalendarPage() {
  const [myEvents, setEvents] = useState(events)

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      setEvents([
        ...myEvents,
        {
          start,
          end,
          title,
        },
      ])
  }

  return (
    <div className="h-screen p-4">
      <h1 className="text-3xl font-bold text-primary mb-4">MCAN Calendar</h1>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 100px)' }}
        selectable
        onSelectSlot={handleSelect}
      />
    </div>
  )
}
</boltArtifact>

Finally, let's create separate login pages for users and admins:

<boltArtifact id="create-user-login" title="Create User Login Page">
<boltAction type="file" filePath="app/login/page.tsx">
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual login logic
    console.log('Login attempt:', { email, password })
    router.push('/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login to MCAN</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push('/')}>Cancel</Button>
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
</boltArtifact>

<boltArtifact id="create-admin-login" title="Create Admin Login Page">
<boltAction type="file" filePath="app/admin/login/page.tsx">
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement actual admin login logic
    console.log('Admin Login attempt:', { email, password })
    router.push('/admin/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => router.push('/')}>Cancel</Button>
            <Button type="submit">Login</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
</boltArtifact>

These updates should address the issues you mentioned. The marketplace now has more products, the e-courses page includes a range of courses with prices from 2,500 to 6,000 naira, we've added a functional calendar component, and created separate login pages for users and admins.

Let's restart the development server one more time to ensure all changes are applied:

<boltArtifact id="final-restart" title="Final Restart of Development Server">
<boltAction type="shell">
<command>npm run dev</command>