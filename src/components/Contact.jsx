const hours = [
  { day: 'Monday – Saturday', morning: '9:30 AM – 2:00 PM', evening: '6:00 PM – 9:00 PM' },
  { day: 'Sunday', morning: 'Closed', evening: '—' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1A3A5C]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#F7A8C4] font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl font-bold text-white mb-4">Visit Us in Vijayawada</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            We are conveniently located near Library Street in Satyaranayana Puram. Walk-ins welcome during clinic hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-7 flex gap-5 items-start hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-[#D4618A] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📍</div>
              <div>
                <p className="text-white font-bold text-lg mb-1">Clinic Address</p>
                <p className="text-white/75 leading-relaxed">
                  Purushotham Street, BRTS Road,<br />
                  Near Library Street,<br />
                  Satyaranayana Puram,<br />
                  Vijayawada, Andhra Pradesh – 520011
                </p>
                <a href="https://share.google/Sm0p2rTKVsjDkgcuC"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#F7A8C4] text-sm font-semibold mt-3 hover:underline">
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-7 flex gap-5 items-start hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-[#D4618A] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📞</div>
              <div>
                <p className="text-white font-bold text-lg mb-1">Phone / WhatsApp</p>
                <a href="tel:+917207556626" className="text-[#F7A8C4] text-2xl font-bold hover:underline">
                  +91 72075 56626
                </a>
                <p className="text-white/60 text-sm mt-1">Call or WhatsApp for appointments</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-7 flex gap-5 items-start hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-[#D4618A] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">🕐</div>
              <div className="w-full">
                <p className="text-white font-bold text-lg mb-4">Clinic Hours</p>
                <div className="space-y-3">
                  {hours.map(h => (
                    <div key={h.day}>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{h.day}</p>
                      {h.morning !== 'Closed' ? (
                        <div className="flex gap-4">
                          <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">{h.morning}</span>
                          <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">{h.evening}</span>
                        </div>
                      ) : (
                        <span className="text-white/40 text-sm">Closed</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-white/10 backdrop-blur rounded-3xl p-7 flex gap-5 items-center hover:bg-white/15 transition-colors">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">📸</div>
              <div>
                <p className="text-white font-bold text-lg mb-1">Follow on Instagram</p>
                <a href="https://www.instagram.com/rabiyabasri526" target="_blank" rel="noopener noreferrer"
                  className="text-[#F7A8C4] font-semibold hover:underline">@rabiyabasri526</a>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <iframe
              title="Dr. Rabiya Basri Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.123!2d80.643!3d16.505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDr.+Rabiya+Basri+Vijayawada!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Big CTA */}
        <div className="mt-14 text-center">
          <a href="tel:+917207556626"
            className="inline-flex items-center gap-3 bg-[#D4618A] hover:bg-[#b84e73] text-white font-bold px-12 py-5 rounded-full text-xl shadow-2xl transition-all hover:scale-105">
            📞 Call Now: +91 72075 56626
          </a>
          <p className="text-white/50 text-sm mt-4">Available Mon–Sat · 9:30 AM–2:00 PM & 6:00 PM–9:00 PM</p>
        </div>
      </div>
    </section>
  )
}
