export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/dr_rabiya_hero.jpg" alt="Dr. Rabiya Basri" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A3A5C]/90 via-[#1A3A5C]/60 to-transparent" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-10 items-center w-full">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-yellow-300 text-sm">★★★★★</span>
            <span className="text-white/90 text-xs font-medium">5.0 Google Rating · 10,000+ Deliveries</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Expert Maternity &{' '}<span className="text-[#F7A8C4]">Fertility Care</span>{' '}in Vijayawada
          </h1>
          <p className="text-white/85 text-lg mb-8 max-w-md leading-relaxed">
            Board-certified Gynaecologist, Obstetrician & Fertility Specialist with 15+ years of compassionate care for women across Andhra Pradesh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+917207556626" className="inline-flex items-center justify-center gap-2 bg-[#D4618A] hover:bg-[#b84e73] text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl transition-all hover:scale-105">
              📞 Book Consultation
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all">
              Our Services →
            </a>
          </div>
          <div className="mt-12 flex gap-8">
            {[{ value: '15+', label: 'Years Experience' }, { value: '10K+', label: 'Deliveries' }, { value: '5.0★', label: 'Google Rating' }].map(s => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[#F7A8C4]">{s.value}</p>
                <p className="text-white/70 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
