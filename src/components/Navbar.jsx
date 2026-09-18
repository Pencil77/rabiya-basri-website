import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#D4618A] flex items-center justify-center text-white font-bold text-sm">RB</div>
          <div>
            <p className={`font-bold text-sm leading-tight ${scrolled ? 'text-[#1A3A5C]' : 'text-white'}`}>Dr. Rabiya Basri</p>
            <p className={`text-xs leading-tight ${scrolled ? 'text-[#D4618A]' : 'text-pink-200'}`}>Gynaecologist & Fertility Specialist</p>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className={`text-sm font-medium transition-colors hover:text-[#D4618A] ${scrolled ? 'text-[#1A3A5C]' : 'text-white'}`}>{l.label}</a>
          ))}
          <a href="tel:+917207556626" className="bg-[#D4618A] hover:bg-[#b84e73] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow">Book Consultation</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Menu">
          <div className="space-y-1.5">
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-[#1A3A5C]' : 'bg-white'}`} />
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-[#1A3A5C]' : 'bg-white'}`} />
            <div className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-[#1A3A5C]' : 'bg-white'}`} />
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-[#1A3A5C] font-medium hover:text-[#D4618A]">{l.label}</a>
          ))}
          <a href="tel:+917207556626" className="bg-[#D4618A] text-white text-center font-semibold px-5 py-3 rounded-full">Book Consultation</a>
        </div>
      )}
    </nav>
  )
}
