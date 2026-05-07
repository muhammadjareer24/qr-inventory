'use client'

import Image from 'next/image'
import Container from '@/components/common/Container'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IconMenu2Filled, IconX } from '@tabler/icons-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const navLinks = [
  { title: 'Solutions', href: '#' },
  { title: 'Product', href: '#' },
  { title: 'Resources', href: '#' },
  { title: 'Pricing', href: '#' },
  { title: 'About', href: '#' },
]

const Navbar = () => {
  return (
    <Container className="w-full">
      <div className="bg-t9-secondary rounded-2xl mt-6 mb-12 px-8 py-2">
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </Container>
  )
}

export default Navbar

export const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex items-center justify-between">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={200}
        height={200}
      />

      <ul className="items-center gap-6 hidden lg:flex">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="text-white hover:text-t5-primary font-medium transition-colors duration-200"
          >
            {link.title}
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="text-white hover:text-t5-primary font-medium transition-colors duration-200"
        >
          Sign In
        </Link>
        <Button className="bg-t5-primary border-2 border-transparent hover:bg-transparent hover:border-white transition-all duration-200 font-medium">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex md:hidden items-center justify-between py-1">
      <Image
        src="/images/logo.svg"
        alt="logo"
        width={140}
        height={140}
      />

      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer"
      >
        <IconMenu2Filled className="size-5 text-white" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: 'blur(15px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-t9-secondary/95 px-6 py-4"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={180}
                height={180}
              />
              <button
                onClick={() => setOpen(false)}
                className="cursor-pointer"
              >
                <IconX className="size-5 text-white" />
              </button>
            </div>

            {/* Mobile links */}
            <div className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.title}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-medium text-white hover:text-t5-primary transition-colors duration-200"
                  >
                    {link.title}
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="absolute bottom-8 right-6 flex items-center justify-between gap-4">
              <Link
                href="#"
                className="text-white hover:text-t5-primary font-medium transition-colors duration-200"
              >
                Sign In
              </Link>
              <Button className="bg-t5-primary border-2 border-transparent hover:bg-transparent hover:border-white transition-all duration-200 font-medium">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
