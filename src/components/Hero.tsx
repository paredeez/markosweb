import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/meal3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src="/images/transplogo.png"
          alt="Marko's Schnitzel"
          className="w-64 sm:w-96 md:w-[560px] lg:w-[640px] mx-auto mb-3 drop-shadow-2xl"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-shadow">
          Authentic Schnitzels Made Fresh Daily
        </h1>
        <p className="text-lg sm:text-xl text-white mb-6 max-w-2xl mx-auto text-shadow">
          Relaxed counter-serve offering up wraps and pittas filled with breaded meat, plus fries & sides
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-gradient-marko text-white px-6 py-3 rounded-full text-base font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="bg-white text-marko-orange px-6 py-3 rounded-full text-base font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#menu"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  )
}

export default Hero

