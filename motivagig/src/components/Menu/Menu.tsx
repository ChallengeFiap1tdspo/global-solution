import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Menu({ links = [] }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white text-purple-600 px-4 py-3 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="font-bold text-lg text-pink-500">
          App
        </div>

        <div className="hidden md:flex gap-4">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-purple-600 hover:text-pink-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden p-2 rounded-md"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 flex flex-col gap-2 px-2 pb-2">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-purple-600 hover:text-pink-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
