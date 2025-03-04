import React, { useEffect, useState } from 'react';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import OsowaLogo from './assets/OsowaLogo';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      adjustHeroElements();
    };

    const adjustHeroElements = () => {
      const logo = document.querySelector('.hero-logo') as HTMLElement;
      const heroText = document.querySelector('.hero-heading') as HTMLElement;
      const viewportWidth = window.innerWidth;

      if (logo && heroText) {
        if (viewportWidth > 900) {
          // Adjust size for larger screens
          const newLogoSize = viewportWidth * 0.06; // 6% of the viewport width
          logo.style.width = `${newLogoSize}px`;

          const newFontSize = viewportWidth * 0.05; // 5% of the viewport width
          heroText.style.fontSize = `${newFontSize}px`;
        } else {
          // Adjust size for smaller screens
          const newLogoSize = viewportWidth * 0.09; // 9% of the viewport width
          logo.style.width = `${newLogoSize}px`;

          const newFontSize = viewportWidth * 0.08; // 8% of the viewport width
          heroText.style.fontSize = `${newFontSize}px`;
        }
      }
    };

    // Run on page load and window resize
    adjustHeroElements();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <OsowaLogo className="h-10 w-auto" />
            <span className={`ml-2 font-semibold text-lg ${scrolled ? 'text-gray-800' : 'text-white'}`}>OSOWA</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {['About Us', 'Menu', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`transition-colors duration-300 hover:text-green-500 ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="https://www.instagram.com/osowa.restaurant/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`hidden md:flex items-center space-x-2 ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-300`}
          >
            <Instagram size={20} />
            <span>Follow Us</span>
          </a>
          
          {/* Mobile menu button */}
          <button className="md:hidden">
            <div className={`w-6 h-0.5 mb-1.5 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 mb-1.5 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
            <div className={`w-6 h-0.5 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Video Background */}
        <video 
          className="absolute w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="OSOWA_vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
          <img src="Osowalogo.webp" alt="Osowa Logo" className="hero-logo w-24 mb-8 animate-fadeIn" />
          <h2 className="hero-heading text-4xl md:text-5xl font-bold text-center mb-8 animate-slideUp">
            The taste of Korea brought to Morocco
          </h2>
          <div className="flex justify-center w-full">
            <a 
              href="https://www.instagram.com/osowa.restaurant/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 animate-fadeIn"
            >
              <Instagram size={20} />
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            About Us
            <div className="absolute w-20 h-1 bg-green-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed text-center animate-fadeIn">
              At Osowa, every dish is crafted with care, staying true to the essence of Korean cuisine. 
              From crispy, golden-brown Korean fried chicken coated in a signature sweet and spicy glaze
              to bibimbap - a colorful medley of rice, vegetables, and a perfectly fried egg - each bite sends you straight to the streets of Seoul.
              Come to Osowa, where every dish tells a story of tradition, passion, and the true flavors of Korea.
              Experience the warmth of Korean hospitality and indulge in the authentic tastes that make Korean cuisine so unforgettable. 🇰🇷✨
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            Our Menu
            <div className="absolute w-20 h-1 bg-green-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Bibimbap',
                image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'A delightful mix of rice, vegetables, and your choice of protein.'
              },
              {
                name: 'Korean BBQ',
                image: 'https://images.unsplash.com/photo-1583187855471-2cd2a1463279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Grill your favorites right at the table.'
              },
              {
                name: 'Kimchi Stew',
                image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Spicy and tangy stew with kimchi and tofu.'
              },
              {
                name: 'Tteokbokki',
                image: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Chewy rice cakes in a sweet and spicy sauce.'
              },
              {
                name: 'Korean Fried Chicken',
                image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Crispy chicken with a sweet and spicy glaze.'
              },
              {
                name: 'Bulgogi',
                image: 'https://images.unsplash.com/photo-1583187855471-2cd2a1463279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                description: 'Marinated beef, thinly sliced and grilled to perfection.'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors duration-300">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            What Our Customers Say
            <div className="absolute w-20 h-1 bg-green-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                quote: 'The bibimbap was absolutely delicious! Authentic Korean flavors that transported me back to my trip to Seoul.',
                rating: 5
              },
              {
                name: 'Mohammed A.',
                quote: 'First time trying Korean food and I\'m hooked! The staff was very helpful in explaining the menu and making recommendations.',
                rating: 5
              },
              {
                name: 'Leila K.',
                quote: 'The Korean BBQ experience was fantastic. Fresh ingredients and the perfect marinade. Will definitely be back!',
                rating: 4
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            Contact Us
            <div className="absolute w-20 h-1 bg-green-500 bottom-0 left-1/2 transform -translate-x-1/2 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fadeIn">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-green-500 mr-4 flex-shrink-0" />
                    <p>34 Rue Ahmed Al Akkad, Casablanca, Morocco</p>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-green-500 mr-4 flex-shrink-0" />
                    <p>+212-555-1234</p>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-green-500 mr-4 flex-shrink-0" />
                    <p>info@osowa.com</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-green-500 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Opening Hours:</p>
                      <p>Tuesday - Sunday: 12:00 PM - 10:00 PM</p>
                      <p>Monday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <OsowaLogo className="h-10 w-auto text-white" />
                <span className="ml-2 font-semibold text-xl">OSOWA</span>
              </div>
              <p className="text-gray-400">
                Authentic Korean cuisine in the heart of Casablanca, bringing the vibrant flavors of Korea to Morocco.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Menu', 'Testimonials', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/osowa.restaurant/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Osowa Korean Restaurant. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;