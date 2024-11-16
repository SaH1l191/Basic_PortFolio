import { useEffect, useRef, useState } from "react";
import Portfolio from "./components/Portfolio";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import './App.css';
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react'
import { portfolioData } from './components/data';

export default function App() {
  const scrollRef = useRef(null);
  const [cursorStyle, setCursorStyle] = useState({ top: 0, left: 0 });

  const { name, description, projects, skills, profileData } = portfolioData;

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact Me', href: '#contactme' },
  ]


  useEffect(() => {

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      resetNativeScroll: false,
    });


    return () => {
      scroll.destroy();
    };
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle({ top: e.clientY, left: e.clientX });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Custom cursor */}
      <div
        className="fixed w-10 h-10 rounded-full pointer-events-none bg-blue-200 opacity-50 mix-blend-multiply z-50"
        style={{
          top: `${cursorStyle.top - 20}px`,
          left: `${cursorStyle.left - 20}px`,
        }}
      ></div>

      <div ref={scrollRef} data-scroll-container>

        <nav className="bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  {/* <img className="h-8 w-auto" src="/NavLogo.jpg" alt="Logo" /> */}
                  <div className="relative  w-48 h-12 select-none">
                    <img
                     
                      src="./s.svg"  // This will look for s.svg in the public folder
                      alt="Profile"
                      width="128"  // Setting the size directly
                      height="128"  // Setting the size directly
                      className="rounded-full w-full h-full z-10 object-cover  absolute select-none"
                    />
                  </div>
                  {/* <span className="ml-2 text-xl font-semibold text-gray-800">ahil</span> */}
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-100 transition duration-150 ease-in-out"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        <Portfolio
          name={name}
          description={description}
          projects={projects}
          skills={skills}
          profileData={profileData}

        />

      </div>
    </div>
  );
}
