import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { signOut } from '../store/slices/authSlice';
import { LogOut, PenSquare, Home, BookOpen, User, Briefcase, Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { logClick } from '../lib/firebase';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    logClick('sign_out_button');
    await dispatch(signOut());
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (linkName: string) => {
    logClick('navigation_link', { link_name: linkName });
    setIsMobileMenuOpen(false);
  };

  const handleSocialClick = (platform: string) => {
    logClick('social_link_click', { platform });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                onClick={() => handleNavClick('logo')}
                className="flex items-center space-x-2"
              >
                <Code2 className="h-8 w-8 text-indigo-600" />
                <span className="text-xl font-bold text-gray-700"><strong>Javi</strong>Vilchis</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                to="/"
                onClick={() => handleNavClick('home')}
                className={`flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 ${
                  isActive('/') ? 'text-indigo-600' : ''
                }`}
              >
                <Home className="h-5 w-5 mr-1" />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                onClick={() => handleNavClick('about')}
                className={`flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 ${
                  isActive('/about') ? 'text-indigo-600' : ''
                }`}
              >
                <User className="h-5 w-5 mr-1" />
                <span>About</span>
              </Link>
              <Link
                to="/work"
                onClick={() => handleNavClick('work')}
                className={`flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 ${
                  isActive('/work') ? 'text-indigo-600' : ''
                }`}
              >
                <Briefcase className="h-5 w-5 mr-1" />
                <span>Work</span>
              </Link>
              <Link
                to="/blog"
                onClick={() => handleNavClick('blog')}
                className={`flex items-center px-2 py-2 text-gray-700 hover:text-gray-900 ${
                  isActive('/blog') ? 'text-indigo-600' : ''
                }`}
              >
                <BookOpen className="h-5 w-5 mr-1" />
                <span>Blog</span>
              </Link>
              {user && (
                <>
                  <Link
                    to="/admin"
                    onClick={() => handleNavClick('admin')}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <PenSquare className="h-5 w-5 mr-1" />
                    <span>Write</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    <span>Sign Out</span>
                  </button>
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => handleNavClick('home')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Home
              </div>
            </Link>
            <Link
              to="/about"
              onClick={() => handleNavClick('about')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                About
              </div>
            </Link>
            <Link
              to="/work"
              onClick={() => handleNavClick('work')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/work') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                Work
              </div>
            </Link>
            <Link
              to="/blog"
              onClick={() => handleNavClick('blog')}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/blog') ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Blog
              </div>
            </Link>
            {user && (
              <>
                <Link
                  to="/admin"
                  onClick={() => handleNavClick('admin')}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <PenSquare className="h-5 w-5 mr-2" />
                    Write
                  </div>
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                >
                  <div className="flex items-center">
                    <LogOut className="h-5 w-5 mr-2" />
                    Sign Out
                  </div>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="h-8 w-8 text-indigo-400" />
                <span className="text-xl font-bold"><strong>Javi</strong>Vilchis</span>
              </div>
              <p className="text-gray-400">
                Creating beautiful, functional, and user-friendly digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-gray-400 hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:javivilchis@gmail.com?subject=from jv website"
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    send me an email here.
                  </a>
                </li>
              </ul>
            </div>

            {/* Sign In / Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              {!user && (
                <Link
                  to="/login"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors mb-4"
                >
                  Sign In
                </Link>
              )}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/javivilchis"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('github')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/javier-vilchis-8843226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleSocialClick('linkedin')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} JaviVilchis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;