import { Utensils, Award, Heart } from 'lucide-react'

const Menu = () => {
  const featuredImages = [
    { image: '/images/meal1.jpg', alt: 'Chicken Schnitzel with sides' },
    { image: '/images/meal2.jpg', alt: 'Traditional Schnitzel plate' },
    { image: '/images/meal3.jpg', alt: 'Crispy golden schnitzel' },
  ]

  const bases = [
    { name: '6" Sub', price: '$15.50' },
    { name: '12" Sub', price: '$18.00' },
    { name: 'Pita', price: '$18.00' },
    { name: 'Plate', price: '$24.00', popular: true },
  ]

  const schnitzels = [
    'Plain Schnitzel',
    'Garlic & Paprika Schnitzel',
    'Herb Schnitzel',
    'Onion Schnitzel',
  ]

  const grillItems = [
    { name: 'Chicken Thigh', note: 'With special sauce' },
    { name: 'Chicken Breast', note: 'With special sauce' },
    { name: 'Jerusalem Mix', note: 'Chicken liver, chicken hearts, thigh fillet, fried onion (subject to availability)' },
  ]

  const extras = [
    { name: 'Schnitzel', price: '$8.00' },
    { name: 'Falafel', price: '$1.00' },
    { name: 'Pita', price: '$1.50' },
    { name: 'Chips (Small/Large)', price: '$6.00' },
  ]

  const breakfast = [
    { name: 'Egg & Bacon Sandwich', price: '$8.00', note: 'With special sauce' },
    { name: 'Egg & Bacon Roll or Pita', price: '$10.00', note: 'With special sauce' },
    { name: 'Egg & Bacon Roll or Pita with The Lot', price: '$15.00' },
    { name: 'Ham, Cheese & Tomato Toasted Sandwich', price: '$7.00' },
  ]

  const vegetarian = [
    { name: 'Falafel Pita', price: '$17.00' },
    { name: 'Falafel Plate', price: '$24.00' },
    { name: 'Plate of 5 Salads', price: '$17.00', note: 'Of your choice' },
    { name: '6" Salad Sub', price: '$14.00' },
    { name: '12" Salad Sub or Pita', price: '$16.50' },
  ]

  const drinks = [
    { name: 'Coffee (Regular/Large)', price: '$4.50' },
    { name: 'Hot Chocolate (Regular/Large)', price: '$4.50' },
  ]

  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Fresh Ingredients',
      description: 'Only the finest, freshest ingredients in every dish',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Authentic Recipe',
      description: 'Traditional methods passed down through generations',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Every schnitzel is crafted with passion and care',
    },
  ]

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-marko-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-marko-orange">Menu</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our mouth-watering selection of schnitzels, each prepared fresh to order
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredImages.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg h-64 group"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Choose Your Base */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-marko-orange pb-2">
              Choose Your Base
            </h3>
            <div className="space-y-3">
              {bases.map((base, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-marko-light rounded-lg transition-colors">
                  <span className="text-base font-semibold text-gray-800 flex items-center gap-2">
                    {base.name}
                    {base.popular && (
                      <span className="bg-gradient-marko text-white text-xs px-2 py-1 rounded-full">Popular</span>
                    )}
                  </span>
                  <span className="text-xl font-bold text-marko-orange">{base.price}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">*Plate comes with mixed lettuce and chips or rice</p>
          </div>

          {/* Choose Your Schnitzel */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-marko-orange pb-2">
              Choose Your Schnitzel
            </h3>
            <div className="space-y-2">
              {schnitzels.map((schnitzel, idx) => (
                <div key={idx} className="flex items-center p-2 hover:bg-marko-light rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-gradient-marko rounded-full mr-3"></div>
                  <span className="text-base text-gray-800">{schnitzel}</span>
                </div>
              ))}
            </div>
          </div>

          {/* From The Grill */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-marko-orange pb-2">
              From The Grill
            </h3>
            <div className="space-y-3">
              {grillItems.map((item, idx) => (
                <div key={idx} className="p-2 hover:bg-marko-light rounded-lg transition-colors">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-marko rounded-full mr-3 mt-1"></div>
                    <div>
                      <span className="text-base font-semibold text-gray-800 block">{item.name}</span>
                      <span className="text-xs text-gray-600 italic">{item.note}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-marko-orange pb-2">
              Extras
            </h3>
            <div className="space-y-3">
              {extras.map((extra, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-marko-light rounded-lg transition-colors">
                  <span className="text-base text-gray-800">{extra.name}</span>
                  <span className="text-lg font-bold text-marko-orange">{extra.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Breakfast */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-marko-orange pb-2">
              Breakfast
            </h3>
            <div className="space-y-3">
              {breakfast.map((item, idx) => (
                <div key={idx} className="p-2 hover:bg-marko-light rounded-lg transition-colors">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-base font-semibold text-gray-800 flex-1">{item.name}</span>
                    <span className="text-lg font-bold text-marko-orange ml-4">{item.price}</span>
                  </div>
                  {item.note && <span className="text-xs text-gray-600 italic">{item.note}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Vegetarian Options */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-marko-orange pb-2">
              Vegetarian Options
            </h3>
            <div className="space-y-3">
              {vegetarian.map((item, idx) => (
                <div key={idx} className="p-2 hover:bg-marko-light rounded-lg transition-colors">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-base font-semibold text-gray-800 flex-1">{item.name}</span>
                    <span className="text-lg font-bold text-marko-orange ml-4">{item.price}</span>
                  </div>
                  {item.note && <span className="text-xs text-gray-600 italic">{item.note}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-4 border-marko-orange pb-2">
              Hot Drinks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {drinks.map((drink, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 hover:bg-marko-light rounded-lg transition-colors">
                  <span className="text-base text-gray-800">{drink.name}</span>
                  <span className="text-lg font-bold text-marko-orange">{drink.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-marko text-white rounded-full mb-3">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu

