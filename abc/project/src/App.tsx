import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Mail, Settings, Bell, User, Menu as MenuIcon } from 'lucide-react';

function useWindowSize() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function updateScale() {
      const width = window.innerWidth;
      if (width >= 992 && width <= 1600) {
        setScale(0.9);
      } else if (width >= 700 && width <= 767) {
        setScale(0.8);
      } else if (width >= 600 && width < 700) {
        setScale(0.75);
      } else if (width <= 600) {
        setScale(0.5);
      } else {
        setScale(1);
      }
    }

    window.addEventListener('resize', updateScale);
    updateScale();
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return scale;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const scale = useWindowSize();

  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <span className="ml-4 text-xl font-semibold">Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
              <User className="w-6 h-6 text-gray-600 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 min-h-screen flex">
        {/* Left Menu */}
        <aside
          className={`${
            isMenuOpen ? 'w-64' : 'w-0'
          } bg-gray-800 text-white transition-all duration-300 overflow-hidden fixed h-full`}
        >
          <nav className="mt-5 px-2">
            <a href="#" className="group flex items-center px-2 py-2 text-base rounded-md hover:bg-gray-700">
              <Home className="mr-4 h-6 w-6" />
              Home
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base rounded-md hover:bg-gray-700">
              <Mail className="mr-4 h-6 w-6" />
              Messages
            </a>
            <a href="#" className="mt-1 group flex items-center px-2 py-2 text-base rounded-md hover:bg-gray-700">
              <Settings className="mr-4 h-6 w-6" />
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className={`flex-1 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-2xl font-bold mb-4">Main Content</h2>
                  <p className="text-gray-600">
                    This is the main content area. It will adapt based on the screen size and menu state.
                    The entire page will scale according to the viewport width using the specified scaling rules.
                  </p>
                </div>
              </div>

              {/* Right Panel */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold mb-4">Right Panel</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="text-sm text-gray-600">Notification Panel</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded">
                      <p className="text-sm text-gray-600">Quick Actions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className={`bg-gray-800 text-white py-6 transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Dashboard. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Terms</a>
              <a href="#" className="hover:text-gray-300">Privacy</a>
              <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;