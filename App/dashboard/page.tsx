"use client"

import { useAuth } from '../contexts/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  const { user } = useAuth()

  if (!user) {
    return null // or redirect to login
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {user.name}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{user.role.charAt(0).toUpperCase() + user.role.slice(1)} Dashboard</CardTitle>
          <CardDescription>Here's your personalized dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <p>User ID: {user.id}</p>
          <p>Role: {user.role}</p>
          {/* Add more role-specific content here */}
        </CardContent>
      </Card>
    </div>
  )
}