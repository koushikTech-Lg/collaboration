"use client"
import Link from "next/link"

export interface NavMenuItem {
  label: string
  href?: string
  submenu?: {
    label: string
    href?: string
  }[]
}

interface NavMenuProps {
  item: NavMenuItem
  isOpen: boolean
  onToggle: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  isScrolled: boolean
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  )
}

export function NavMenu({ 
  item, 
  isOpen, 
  onToggle, 
  onMouseEnter, 
  onMouseLeave, 
  isScrolled 
}: NavMenuProps) {
  // For items without submenu
  if (!item.submenu) {
    return (
      <Link href={item.href || "/"}>
        <div className={`px-5 py-2 hover:text-orange-400 transition-colors cursor-pointer font-medium ${
          isScrolled ? 'text-slate-900' : 'text-white'
        }`}>
          {item.label}
        </div>
      </Link>
    )
  }

  // For items with submenu - use both hover and click events
  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.href ? (
        <Link href={item.href}>
          <div 
            onClick={onToggle}
            className={`px-5 py-2 hover:text-orange-400 transition-colors cursor-pointer font-medium flex items-center gap-1 h-full ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            {item.label}
            <ChevronIcon isOpen={isOpen} />
          </div>
        </Link>
      ) : (
        <button
          onClick={onToggle}
          className={`px-5 py-2 hover:text-orange-400 transition-colors cursor-pointer font-medium flex items-center gap-1 h-full ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}
        >
          {item.label}
          <ChevronIcon isOpen={isOpen} />
        </button>
      )}
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div 
        className="absolute top-full left-0 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-50 border border-gray-200"
        >
          {item.submenu.map((subItem, index) => (
            <Link key={index} href={subItem.href || "/"}>
              <div className="px-5 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-lg">
                {subItem.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}