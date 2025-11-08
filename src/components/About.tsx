import { CheckCircle } from 'lucide-react'

const About = () => {
  const highlights = [
    'Premium quality meats and fresh produce',
    'Traditional authentic recipes',
    'Made-to-order for maximum freshness',
    'Wide variety of fresh toppings and sides',
    'Family-owned and operated',
    'Commitment to excellence in every bite',
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/Station.jpg"
                alt="Fresh ingredients station at Marko's Schnitzel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-marko-orange">Marko's Schnitzel</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to Marko's Schnitzel, your go-to relaxed counter-serve in Moorabbin! We specialize in 
              delicious wraps and pittas filled with perfectly breaded meat, plus crispy fries and fresh sides.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our secret? Fresh ingredients, time-honored recipes, and a passion for creating the perfect 
              schnitzel every single time. From our kitchen to your plate, we ensure every dish is 
              prepared with care and served with love.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-marko-orange flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </div>
              ))}
            </div>

            <a
              href="#menu"
              className="inline-block bg-gradient-marko text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

