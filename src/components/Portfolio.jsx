
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import React from 'react'
import { Github } from 'lucide-react'
import { motion } from 'framer-motion';


export default function Portfolio({
  name,
  description,
  projects,
  skills,
  profileData
}) {


  const [typeEffect] = useTypewriter({
    words: ["Web Developer", "DSA Enthusiast", "Backend Developer", "Coder"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,

  })





  return (
    <div className=" bg-gray-50"
      data-scroll-container
    >

      <div className="container px-4 mx-auto sm:px-6 lg:px-8">



        {/* Hero Section */}
        <div className="relative min-h-screen py-12 screen:gap-x-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-between md:flex-row md:px-4 lg:px-0"
          >
            <div className="relative order-2 md:w-1/2 md:order-1 md:pr-4 lg:pr-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[400px] h-[450px] md:w-3/4 md:order-2"
              >
                <img

                  src="https://imgs.search.brave.com/iT9KGbKpEx0EDpfQR6PKIPpKLnqj_kp5J_K5tevOiTE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Jv/dWZ1dXJpbi9pbWFn/ZXMvNy83ZS9Kb19U/b2dhbWVfY2hhcmFj/dGVyX2ltYWdlLnBu/Zy9yZXZpc2lvbi9s/YXRlc3Qvc2NhbGUt/dG8td2lkdGgtZG93/bi8xNDA_Y2I9MjAy/MjAzMTIxNjIxMDU.jpeg"
                  alt="Profile"
                  className="absolute z-10 object-cover w-full h-full rounded-full select-none custom-min:mr-3"
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-0 right-60 sm:hidden xs:block"
              >
                <img src="./dots.png" className='select-none xs:hidden ' alt="Dots" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className="absolute bottom-0 left-0 select-none sm:hidden"
              >
                <img src="./circle.png" alt="Circle" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 right-3/4 sm:hidden"
              >
                <img src="./cube.png" className='select-none ' alt="Cube" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className="absolute bottom-1/4 right-1/4"
              >
                <img src="./zigzags.png" className='select-none sm:hidden' alt="Zigzag" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  transition: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-1/4 left-1/4 sm:hidden"
              >
                <img src="/plus.png" alt="Plus" width={50} height={50} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 mb-8 md:w-1/2 md:mb-0 md:order-2 md:pl-4 lg:pl-8"
            >
              <h1 className="mb-4 text-4xl font-bold text-gray-800 ">Hi! I'm <span className='gradient-text'>{name}</span></h1>
              <h2 className="mb-4 text-2xl font-semibold text-gray-700">
                I am a <span className="text-blue-500">{typeEffect}</span>
                <Cursor cursorStyle='|' />
              </h2>
              <p className="mb-6 text-gray-600">{description}<span className='gradient-text'>{"code."}</span></p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 text-white transition duration-300 bg-black rounded select-none hover:bg-primary/90 hover:scale-95"
              >
                <a href="mailto:sahil@example.com">Hire Me!</a>
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-0 right-0 overflow-hidden font-bold text-center text-9xl text-black-100 whitespace-nowrap bottom-12"
          >
           <span className="hidden md:inline lg:hidden">SAHIL</span>
           <span className="hidden lg:inline">SAHIL HALDANKAR</span>
          </motion.div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="py-12">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg cursor-pointer group hover:scale-105 hover:shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 select-none"
                />
                <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-bold text-pink-800 rounded-full select-none top-4 right-4 bg-primary">
                  {project.projectNumber}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-sm text-gray-700 bg-gray-200 rounded select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="px-3 py-1 text-white transition duration-300 bg-black rounded select-none hover:bg-primary/90 hover:scale-95">
                      Read More
                    </button>
                 
                    <a href={`${project.link}`} target="_blank" className="left-0 text-primary hover:text-primary/80">
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="coding-profile" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Coding Profile</h2>
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="w-full md:w-1/2">
                <img
                  src="https://i.ibb.co/d0BphkD/image.png"
                  alt="Coding Profile Stats"
                  className="w-full h-auto rounded-lg shadow-lg select-none"
                />
              </div>
              <div className="flex-col items-center w-full space-y-6 md:w-1/2 ">
                {profileData.map((profile, index) => (
                  <>
                    <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                      <h3 className="mb-4 text-2xl font-semibold">{profile.platform}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(profile).map(([key, value]) => (
                          key !== 'platform' && (
                            <div key={key} className="flex flex-col">
                              <span className="text-sm text-gray-500 capitalize">{key}</span>
                              <span className="text-lg font-medium">{value}</span>
                            </div>
                          )
                        ))}
                      </div>
                    </div>

                  </>
                ))}
                <a href="https://codolio.com/profile/453LOQR9" target="_blank" rel="noopener noreferrer" className='flex items-center m-2' >
                  <button className="w-full px-4 py-2 text-white transition duration-300 bg-black rounded select-none hover:bg-primary/90 hover:scale-95">
                    View Full Profile
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div id="skills" className="py-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-4xl font-bold text-gray-800">
              <span className="text-6xl">M</span>e and MyTech Stack
            </h2>
            <div className="mb-12">
              <p className="mb-4 text-gray-600">
                {`Hi Everyone, I'm  `}<span className='font-bold text-transparent gradient-text bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-200'>{name + " "}</span>
                .Over the past  year, I've gained hands-on experience in building web applications and honing my skills in Data Structures and Algorithms (DSA). My main focus is on mastering web development and improving my problem-solving abilities through DSA to tackle real-world challenges.

                I have a strong passion for developing clean, efficient code and delivering seamless user experiences. I’m constantly learning and adapting to new technologies and challenges to create impactful solutions.
              </p>

              <p>
                With a keen interest in problem-solving and algorithmic thinking, I enjoy tackling complex challenges that push my limits. Whether it's optimizing code performance or designing a user-friendly interface, I strive for excellence in every aspect of development.
              </p>

            </div>
            <div className="relative">
              <div className="absolute inset-0 z-0 items-center justify-center hidden font-bold text-gray-100 select-none md:flex text-9xl -bottom-full left-3/4">
                Skills
              </div>
              <div className="relative z-10 grid grid-cols-4 gap-8 sm:grid-cols-5 md:grid-cols-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img src={skill.icon} alt={skill.name} width={64} height={64} className="mb-2 select-none " />
                    <span className="text-sm text-gray-600">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contactme" className="py-12">
          <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">Contact me</h2>
          <h3 className="mb-12 text-2xl text-center text-gray-700">Questions, Thoughts, Or Just Want To Say Hello?</h3>
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded select-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded select-none"
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Enter your subject"
                className="w-full px-4 py-2 border rounded select-none"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Enter your message"
                rows={6}
                className="w-full px-4 py-2 border rounded select-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-white transition duration-300 bg-black rounded select-none hover:bg-primary/90 hover:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="py-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <a href="#projects" className="text-gray-600 hover:text-primary">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-primary">Skills</a>
              <a href="#contactme" className="text-gray-600 hover:text-primary">Contact Me</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/SaH1l191" className="text-gray-600 hover:text-primary">
                <Github className="w-6 h-6" />
              </a>

            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2023 {name}. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}