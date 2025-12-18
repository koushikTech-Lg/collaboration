"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { NavMenu, type NavMenuItem } from "./navbar-menu"
import Container from "../shared/container"

// Mobile Navigation Item Component
function MobileNavItem({
  item,
  onClose
}: {
  item: NavMenuItem
  onClose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  if (!item.submenu) {
    return (
      <Link href={item.href || "/"} onClick={onClose}>
        <div className="px-4 py-3 text-slate-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer font-medium">
          {item.label}
        </div>
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-slate-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer font-medium flex items-center justify-between"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="ml-4 mt-2 space-y-2">
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href || "/"} onClick={onClose}>
              <div className="px-4 py-2 text-slate-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer text-sm">
                {subItem.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 550)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

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

  // Handle mouse enter - open dropdown on hover
  const handleMouseEnter = (label: string) => {
    setOpenMenu(label)
  }

  // Handle mouse leave - close dropdown when mouse leaves
  const handleMouseLeave = () => {
    setOpenMenu(null)
  }

  // Handle toggle - for click events
  const handleToggle = (label: string) => {
    setOpenMenu(openMenu === label ? null : label)
  }

  return (
    <>

      <nav className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center px-6">
        <Container>
          <div className={`w-full max-w-7xl backdrop-blur-xl rounded-full shadow-2xl px-8 py-1 transition-all duration-300 ${isScrolled
            ? 'bg-white/90 border border-gray-200'
            : 'bg-white/10 border border-white/20'
            }`}>
            <div className="flex items-center justify-between">
              {/* Logo */}
              {/* <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img 
                  src={isScrolled ? "https://aswinibajajclasses.com/_next/image?url=https%3A%2F%2Fdel1.vultrobjects.com%2Fcrmaswinibajaj%2FCRM%2FPlatform%2Flogo%2520with%2520name.png&w=384&q=75" : "/White_logo.png"}
                  alt="Logo" 
                  className="h-14 w-auto object-contain transition-all duration-300"
                />
              </div>
            </Link> */}
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                  {/* White Logo - visible when not scrolled */}
                  {!isScrolled && (
                    <img
                      src="/White_logo.png"
                      alt="Logo"
                      className="h-14 w-24  object-contain transition-all duration-300"
                    />
                  )}

                  {/* Color Logo - visible when scrolled */}
                  {isScrolled && (
                    <img
                      src="https://aswinibajajclasses.com/_next/image?url=https%3A%2F%2Fdel1.vultrobjects.com%2Fcrmaswinibajaj%2FCRM%2FPlatform%2Flogo%2520with%2520name.png&w=384&q=75"
                      alt="Logo"
                      className="h-14 w-24 object-contain transition-all duration-300"
                    />
                  )}
                </div>
              </Link>


              {/* Desktop Navigation Items - Using both hover and click */}
              <div className="hidden md:flex items-center gap-1 h-full">
                {navItems.map((item) => (
                  <NavMenu
                    key={item.label}
                    item={item}
                    isOpen={openMenu === item.label}
                    onToggle={() => handleToggle(item.label)}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    isScrolled={isScrolled}
                  />
                ))}
              </div>

              {/* Desktop Contact Button */}
              <button className="hidden md:block  py-2  bg-orange-500 text-white rounded-full font-semibold text-sm hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-200 w-32">
                Contact Us
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                  }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div className={`absolute top-0 left-0 h-full w-[50%] bg-white shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-6 border-b">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-slate-900" />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    onClose={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Contact Button */}
            <div className="p-6 border-t">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-[200px] px-8 py-3 bg-orange-500 text-white rounded-full font-semibold text-sm hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}