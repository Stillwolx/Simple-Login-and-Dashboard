"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

type User = {
  id: number
  name: string
  role: string
}

type AuthContextType = {
  user: User | null
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const users: User[] = [
    { id: 1, name: 'Admin', role: 'admin' },
    { id: 2, name: 'Manager', role: 'manager' },
    { id: 3, name: 'Employee', role: 'employee' },
    { id: 4, name: 'Guest', role: 'guest' },
  ]

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    const foundUser = users.find(u => u.name.toLowerCase() === username.toLowerCase())
    if (foundUser) {
      setUser(foundUser)
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}