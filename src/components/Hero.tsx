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
          className="w-80 sm:w-[500px] md:w-[700px] lg:w-[800px] mx-auto mb-2 drop-shadow-2xl"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-shadow">
          Authentic Schnitzels Made Fresh Daily
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-6 max-w-3xl mx-auto text-shadow">
          Relaxed counter-serve offering up wraps and pittas filled with breaded meat, plus fries & sides
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="bg-gradient-marko text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View Our Menu
          </a>
          <a
            href="#contact"
            className="bg-white text-marko-orange px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
          >
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={40} />
      </a>
    </section>
  )
}

export default Hero

