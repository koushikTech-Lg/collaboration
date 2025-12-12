"use client"

import { useState } from "react"
import Link from "next/link"
import { NavMenu, type NavMenuItem } from "./navbar-menu"
import Container from "../shared/container"

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const navItems: NavMenuItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Institutes",
      submenu: [
        { label: "Career Seminar", href: "/institutes/career-seminar" },
        { label: "Guest Lecturer", href: "/institutes/guest-lecture" },
        { label: "Knowledge Partnership", href: "/institutes/knowledge-partnership" },
      ],
    },
    {
      label: "Students",
      submenu: [
        { label: "Contribute a Blog", href: "/students/contribute-blog" },
        { label: "Looking to Intern", href: "/students/looking-to-intern" },
        { label: "Want to Get Hired", href: "/students/want-to-get-hired" },
      ],
    },
    {
      label: "Working",
      submenu: [
        { label: "Want to Hire", href: "/working/want-to-hire" },
        { label: "Work Profile", href: "/working/work-profile" },
        { label: "Consulting", href: "/working/consulting" },
      ],
    },
  ]

  return (
    <nav className="fixed w-full z-50 h-20 flex items-center px-6 bg-white/50 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <Container className="top-0 left-0 right-0 flex justify-center items-center">
        <div className=" w-full mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex-shrink-0 cursor-pointer">
              <h1 className="text-2xl font-bold text-slate-900 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Collab
              </h1>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavMenu
                key={item.label}
                item={item}
                isOpen={openMenu === item.label}
                onToggle={() => setOpenMenu(openMenu === item.label ? null : item.label)}
              />
            ))}
          </div>

          {/* Contact Button */}
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200">
            Contact Form
          </button>
        </div>
      </Container>
    </nav>
  )
}
