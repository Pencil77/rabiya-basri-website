const reviews = [
  {
    name: 'Priya Lakshmi',
    location: 'Vijayawada',
    avatar: 'PL',
    rating: 5,
    text: 'Dr. Rabiya madam is truly a blessing for us. After 4 years of trying, she guided us through the entire fertility process with so much patience and warmth. We welcomed our baby boy last month. Words cannot express our gratitude!',
    tag: 'Fertility Treatment',
  },
  {
    name: 'Ananya Reddy',
    location: 'Krishna District',
    avatar: 'AR',
    rating: 5,
    text: 'I had a high-risk pregnancy and was very anxious throughout. Dr. Rabiya monitored me at every step and made me feel so safe. Her calm demeanor and expertise gave our entire family confidence. Highly recommend to every expectant mother.',
    tag: 'High-Risk Pregnancy',
  },
  {
    name: 'Fatima Begum',
    location: 'Satyaranayana Puram',
    avatar: 'FB',
    rating: 5,
    text: 'Been consulting Dr. Rabiya madam for my PCOD for 2 years. She explains everything clearly, never makes you feel rushed, and the treatment is very effective. Her clinic is also very clean and well-organised. 5 stars from our family!',
    tag: 'PCOD Management',
  },
]

const stats = [
  { value: '5.0', label: 'Google Rating', icon: '⭐' },
  { value: '200+', label: 'Google Reviews', icon: '📝' },
  { value: '10K+', label: 'Successful Deliveries', icon: '👶' },
  { value: '15+', label: 'Years of Experience', icon: '🏥' },
]

export default function SocialProof() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D4618A] font-semibold text-sm uppercase tracking-widest mb-3">Patient Stories</p>
          <h2 className="text-4xl font-bold text-[#1A3A5C] mb-4">Trusted by Families Across Vijayawada</h2>

          {/* Google Rating badge */}
          <div className="inline-flex items-center gap-3 bg-[#FDF0F5] border border-[#F7D6E5] rounded-2xl px-6 py-3 mt-4">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <div className="flex text-yellow-400 text-lg">★★★★★</div>
            <span className="font-bold text-[#1A3A5C]">5.0</span>
            <span className="text-gray-500 text-sm">on Google Maps</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map(s => (
            <div key={s.label} className="text-center bg-[#FDF0F5] rounded-3xl p-6">
              <div className="text-3xl mb-2">{s.icon}</div>
              <p className="text-3xl font-bold text-[#D4618A]">{s.value}</p>
              <p className="text-gray-500 text-sm mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name}
              className="bg-[#FDFBF7] border border-[#F7D6E5] rounded-3xl p-7 flex flex-col gap-5 hover:shadow-lg transition-shadow">
              {/* Stars */}
              <div className="flex text-yellow-400 text-lg">{'★'.repeat(review.rating)}</div>

              {/* Review text */}
              <p className="text-gray-600 leading-relaxed text-sm flex-1">"{review.text}"</p>

              {/* Tag */}
              <span className="inline-block bg-[#F7D6E5] text-[#D4618A] text-xs font-semibold px-3 py-1 rounded-full w-fit">
                {review.tag}
              </span>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-[#F7D6E5]">
                <div className="w-10 h-10 rounded-full bg-[#1A3A5C] text-white flex items-center justify-center text-sm font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-[#1A3A5C] text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.location}</p>
                </div>
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 ml-auto opacity-60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
