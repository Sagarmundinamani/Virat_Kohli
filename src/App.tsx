import React, { useState, useEffect } from 'react';
import { Trophy, Ticket as Cricket, Star, Instagram, Twitter, Heart, ChevronRight, Camera } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: 'Test Runs', value: '9000+', icon: <Cricket className="w-6 h-6" /> },
    { label: 'ODI Runs', value: '13963', icon: <Trophy className="w-6 h-6" /> },
    { label: 'Total Centuries', value: '81', icon: <Star className="w-6 h-6" /> },
  ];

  const achievements = [
    'First player to score 50 ODI centuries',
    'Most runs in a single World Cup (700+ in 2023)',
    'ICC Cricketer of the Year (2017, 2018)',
    'Padma Shri (2017)',
  ];

  const photos = [
    {
      url: "/images/kohli1.jpg",
      caption: "World Cup Glory",
      description: "Leading from the front in the 2023 World Cup"
    },
    {
      url: "/images/kohli2.jpg",
      caption: "Record Breaking 81st Century",
      description: "A milestone that defines greatness"
    },
    {
      url: "/images/kohli3.jpg",
      caption: "Team Spirit",
      description: "Celebrating victories with the team"
    },
    {
      url: "/images/kohli4.jpg",
      caption: "Test Cricket Excellence",
      description: "Mastering the longest format"
    },
    {
      url: "/images/kohli5.jpg",
      caption: "ODI Dominance",
      description: "Setting records in limited overs cricket"
    },
    {
      url: "/images/kohli6.jpg",
      caption: "Captain's Legacy",
      description: "Leading by example"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className={`h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
          src="/images/kohli-hero.jpg"
          alt="Virat Kohli in Indian Jersey"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl font-bold mb-4 animate-fade-in">Virat Kohli</h1>
          <p className="text-xl mb-8 animate-slide-up">The King of Modern Cricket</p>
          <div className="flex justify-center space-x-4">
            <a href="#gallery" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 flex items-center">
              View Gallery <Camera className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <section id="gallery" className="py-16 px-4 bg-gradient-to-b from-black/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Career Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden transform hover:scale-105 transition-duration-300"
              >
                <img 
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{photo.caption}</h3>
                  <p className="text-gray-300">{photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Career Statistics</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Achievements</h2>
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 flex items-center transform hover:translate-x-2 transition-all duration-300"
              >
                <Trophy className="w-6 h-6 mr-4 text-yellow-400" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <footer className="py-10 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a href="https://instagram.com/virat.kohli" className="hover:text-pink-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/imVkohli" className="hover:text-blue-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          Made with <Heart className="w-4 h-4 inline-block text-red-500" /> for cricket fans
        </div>
      </footer>
    </div>
  );
}

export default App;