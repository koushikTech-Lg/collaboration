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

export function NavMenu({ item, isOpen, onToggle }: NavMenuProps) {
  const mainButton = (
    <button
      onClick={onToggle}
      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-all"
    >
      {item.label}
      {item.submenu && <ChevronIcon isOpen={isOpen} />}
    </button>
  )

  const mainContent = item.href ? (
    <Link
      href={item.href}
      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-all"
    >
      {item.label}
      {item.submenu && <ChevronIcon isOpen={isOpen} />}
    </Link>
  ) : (
    mainButton
  )

  return (
    <div className="relative group">
      {mainContent}

      {item.submenu && isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg py-2 z-50">
          {item.submenu.map((submenuItem, index) =>
            submenuItem.href ? (
              <Link
                key={index}
                href={submenuItem.href}
                className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {submenuItem.label}
              </Link>
            ) : (
              <button
                key={index}
                className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {submenuItem.label}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  )
}
