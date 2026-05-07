import type { LucideIcon } from 'lucide-react'

export interface QRType {
  id: string
  label: string
  icon: LucideIcon
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Industry {
  id: string
  name: string
  description: string
  icon: LucideIcon
}

export interface NavLink {
  label: string
  href: string
}
