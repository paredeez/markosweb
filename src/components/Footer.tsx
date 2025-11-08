import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-marko-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <img
              src="/images/transplogo.png"
              alt="Marko's Schnitzel"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Serving authentic, delicious schnitzels made with love and the finest ingredients since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-marko-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-marko-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-marko-orange transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-marko-orange transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-marko-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-marko-orange">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>2/159 Chesterville Rd</li>
              <li>Moorabbin VIC 3189</li>
              <li className="mt-4">(03) 9555 3228</li>
              <li>Mon-Fri: 7:00 AM - 2:30 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Marko's Schnitzel. Made with <Heart className="w-4 h-4 text-marko-red" /> for schnitzel lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

