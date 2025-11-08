import { MapPin, Phone, Clock } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: ['2/159 Chesterville Rd', 'Moorabbin VIC 3189'],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['(03) 9555 3228', 'Call us for takeaway orders'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Hours',
      details: [
        'Monday: 7:00 AM - 2:30 PM',
        'Tuesday: 7:00 AM - 2:30 PM',
        'Wednesday: 7:00 AM - 2:30 PM',
        'Thursday: 7:00 AM - 2:30 PM',
        'Friday: 7:00 AM - 2:30 PM',
        'Saturday: Closed',
        'Sunday: Closed'
      ],
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-marko-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Visit <span className="text-marko-orange">Us Today</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Come experience the best schnitzels in town. We can't wait to serve you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-marko text-white rounded-full mb-3">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-sm text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.0891234567!2d145.0426789!3d-37.9387654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66eb5f1234567%3A0x1234567890abcdef!2s159%20Chesterville%20Rd%2C%20Moorabbin%20VIC%203189!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Marko's Schnitzel Location"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact

