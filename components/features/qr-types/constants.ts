import {
  Contact,
  CreditCard,
  FileText,
  Gift,
  Link,
  Lock,
  LucideIcon,
  Mail,
  MapPin,
  MessageSquare,
  Music,
  Phone,
  Send,
  Share2,
  Star,
  Tag,
  Tv,
  Type,
  Video,
  Wifi,
} from 'lucide-react'

export interface QRType {
  id: string
  label: string
  icon: LucideIcon
}

export const QR_TYPES_VISIBLE: QRType[] = [
  { id: 'url', label: 'URL', icon: Link },
  { id: 'text', label: 'Text', icon: Type },
  { id: 'phone', label: 'Phone', icon: Phone },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'sms', label: 'SMS', icon: MessageSquare },
  { id: 'wifi', label: 'Wifi', icon: Wifi },
  { id: 'audio', label: 'Audio', icon: Music },
  { id: 'vcard', label: 'VCard', icon: Contact },
  { id: 'business-card', label: 'Business Card', icon: CreditCard },
  { id: 'location', label: 'Location', icon: MapPin },
  { id: 'password', label: 'Password', icon: Lock },
  { id: 'whatsapp', label: 'WhatsApp', icon: Phone },
  { id: 'telegram', label: 'Telegram', icon: Send },
  { id: 'pdf', label: 'PDF', icon: FileText },
  { id: 'coupon', label: 'Coupon', icon: Tag },
  { id: 'discord', label: 'Discord', icon: Tv },
  { id: 'social-links', label: 'Social Links', icon: Share2 },
  { id: 'review', label: 'Review', icon: Star },
  { id: 'loyalty', label: 'Loyalty', icon: Gift },
  { id: 'paynow', label: 'PayNow', icon: CreditCard },
  { id: 'video', label: 'Video', icon: Video },
]
