const services = [
  {
    icon: '🤰',
    title: 'Obstetrics & Maternity Care',
    description: 'Complete care throughout your pregnancy journey — from pre-natal consultations and high-risk pregnancy management to safe labour and post-natal care.',
    image: '/images/clinic_1.jpg',
    highlights: ['Antenatal Checkups', 'High-Risk Pregnancy', 'Normal & C-Section Delivery', 'Post-Natal Care'],
  },
  {
    icon: '🌸',
    title: 'Gynaecology',
    description: "Compassionate diagnosis and treatment for all women's reproductive health concerns, from adolescence through menopause.",
    image: '/images/clinic_2.jpg',
    highlights: ['PCOD / PCOS Management', 'Fibroids & Cysts', 'Menstrual Disorders', 'Menopause Care'],
  },
  {
    icon: '👶',
    title: 'Fertility Treatments',
    description: 'Advanced, evidence-based fertility evaluations and treatments to help couples realise their dream of parenthood.',
    image: '/images/clinic_3.jpg',
    highlights: ['Fertility Workup', 'Ovulation Induction', 'IUI Treatment', 'Fertility Counselling'],
  },
  {
    icon: '🔬',
    title: 'Laparoscopic Surgery',
    description: 'Minimally invasive laparoscopic procedures ensuring faster recovery, less pain, and minimal scarring.',
    image: '/images/clinic_4.jpg',
    highlights: ['Diagnostic Laparoscopy', 'Endometriosis Surgery', 'Ovarian Cystectomy', 'Myomectomy'],
  },
  {
    icon: '💉',
    title: 'Infertility Management',
    description: 'Personalised infertility treatments with a sensitive, step-by-step approach tailored to your individual needs and budget.',
    image: '/images/clinic_5.jpg',
    highlights: ['Hormonal Assessment', 'Tubal Factor Infertility', 'Male Factor Evaluation', 'Lifestyle Guidance'],
  },
  {
    icon: '🩺',
    title: 'Preventive Women\'s Health',
    description: 'Routine screenings and preventive health check-ups to keep women healthy at every stage of life.',
    image: '/images/clinic_1.jpg',
    highlights: ['Pap Smear & Colposcopy', 'HPV Vaccination', 'Breast Examination', 'Annual Wellness Check'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#FDF0F5]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4618A] font-semibold text-sm uppercase tracking-widest mb-3">What We Treat</p>
          <h2 className="text-4xl font-bold text-[#1A3A5C] mb-4">Comprehensive Women's Healthcare</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From your first consultation through every milestone of womanhood — delivered with skill, warmth, and respect.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A5C]/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1A3A5C] mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {service.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-4 h-4 rounded-full bg-[#F7D6E5] flex items-center justify-center text-[#D4618A] text-xs">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="tel:+917207556626"
            className="inline-flex items-center gap-2 bg-[#D4618A] hover:bg-[#b84e73] text-white font-bold px-10 py-4 rounded-full text-lg shadow-xl transition-all hover:scale-105">
            Book Your Consultation Today →
          </a>
        </div>
      </div>
    </section>
  )
}
