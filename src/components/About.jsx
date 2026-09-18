export default function About() {
  const credentials = [
    { icon: '🎓', text: 'MBBS (Gold Medalist)' },
    { icon: '🏥', text: 'DGO – Diploma in Gynaecology & Obstetrics' },
    { icon: '🌍', text: 'FART – Germany' },
    { icon: '🎖️', text: 'DMAS · MRCOG-1 (London)' },
    { icon: '⚕️', text: 'Sr. Consultant – Obstetrics, Gynaecology & Fertility' },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#F7D6E5] rounded-full opacity-60 -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1A3A5C]/10 rounded-full -z-10" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/images/dr_rabiya_card.jpg" alt="Dr. Rabiya Basri – Gynaecologist Vijayawada" className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A3A5C] to-transparent p-6">
                <p className="text-white font-bold text-xl">Dr. Rabiya Basri</p>
                <p className="text-[#F7A8C4] text-sm">Gynaecologist · Obstetrician · Fertility Specialist</p>
              </div>
            </div>
            <div className="absolute -right-4 top-10 bg-white rounded-2xl shadow-xl p-4 text-center w-28">
              <p className="text-3xl font-bold text-[#D4618A]">10K+</p>
              <p className="text-xs text-gray-500 font-medium leading-tight mt-1">Successful Deliveries</p>
            </div>
          </div>
          <div>
            <p className="text-[#D4618A] font-semibold text-sm uppercase tracking-widest mb-3">About the Doctor</p>
            <h2 className="text-4xl font-bold text-[#1A3A5C] mb-6 leading-tight">
              A Doctor Who Truly <span className="text-[#D4618A]">Understands Women</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Dr. Rabiya Basri is a highly accomplished and compassionate specialist in women's health, serving the families of Vijayawada and Andhra Pradesh for over 15 years. As a Gold Medalist in MBBS and a trained fertility expert with international credentials, she combines world-class expertise with deep cultural empathy.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From managing high-risk pregnancies to guiding couples through infertility treatments, Dr. Rabiya's approach is always patient-first — thoughtful, respectful, and thorough. She practices at her clinic in Satyaranayana Puram, Vijayawada, making quality gynaecological care accessible to all.
            </p>
            <div className="space-y-3">
              {credentials.map(c => (
                <div key={c.text} className="flex items-center gap-3">
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-gray-700 font-medium text-sm">{c.text}</span>
                </div>
              ))}
            </div>
            <a href="tel:+917207556626" className="mt-10 inline-flex items-center gap-2 bg-[#1A3A5C] hover:bg-[#2C5282] text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg">
              📞 +91 72075 56626
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
