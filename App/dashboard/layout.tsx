"use client"

import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout } = useAuth()
  const router = useRouter()

  if (!user) {
    router.push('/login')
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Multi-User App</h1>
          <div className="flex items-center space-x-4">
            <span>{user.name} ({user.role})</span>
            <Button variant="outline" onClick={() => {
              logout()
              router.push('/login')
            }}>Logout</Button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-6">
        {children}
      </main>
    </div>
  )
}