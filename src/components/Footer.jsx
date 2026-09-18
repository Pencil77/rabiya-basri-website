export default function Footer() {
  return (
    <footer className="bg-[#11263D] py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#D4618A] flex items-center justify-center text-white font-bold text-sm">RB</div>
          <div>
            <p className="font-bold text-white leading-tight">Dr. Rabiya Basri</p>
            <p className="text-white/60 text-xs">Gynaecologist & Fertility Specialist</p>
          </div>
        </div>
        <p className="text-white/40 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Dr. Rabiya Basri. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#about" className="text-white/60 hover:text-white text-sm transition-colors">About</a>
          <a href="#services" className="text-white/60 hover:text-white text-sm transition-colors">Services</a>
          <a href="#contact" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
