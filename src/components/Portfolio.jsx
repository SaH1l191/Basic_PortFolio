
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">



        {/* Hero Section */}
        <div className="relative py-12 md:py-24 min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="md:w-1/2 relative order-2 md:order-1">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[400px] h-[450px]"
              >
                <img

                  src="https://imgs.search.brave.com/iT9KGbKpEx0EDpfQR6PKIPpKLnqj_kp5J_K5tevOiTE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Jv/dWZ1dXJpbi9pbWFn/ZXMvNy83ZS9Kb19U/b2dhbWVfY2hhcmFj/dGVyX2ltYWdlLnBu/Zy9yZXZpc2lvbi9s/YXRlc3Qvc2NhbGUt/dG8td2lkdGgtZG93/bi8xNDA_Y2I9MjAy/MjAzMTIxNjIxMDU.jpeg"
                  alt="Profile"
                  className="rounded-full object-cover w-full h-full z-10 absolute select-none"
                />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-0 right-60"
              >
                <img src="./dots.png" className='select-none' alt="Dots" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className="absolute bottom-0 left-0  select-none  "
              >
                <img src="./circle.png" alt="Circle" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-1/2 right-3/4 transform -translate-x-1/2 -translate-y-1/2"
              >
                <img src="./cube.png" className='select-none' alt="Cube" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  transition: { duration: 2, repeat: Infinity }
                }}
                className="absolute bottom-1/4 right-1/4"
              >
                <img src="./zigzags.png" className='select-none' alt="Zigzag" width={50} height={50} />
              </motion.div>
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                  transition: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
                className="absolute top-1/4 left-1/4"
              >
                <img src="/plus.png" alt="Plus" width={50} height={50} />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 mb-8 md:mb-0 order-1 md:order-2"
            >
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Hi! I'm <span className='gradient-text'>{name}</span></h1>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                I am a <span className="text-blue-500">{typeEffect}</span>
                <Cursor cursorStyle='|' />
              </h2>
              <p className="mb-6 text-gray-600">{description}<span className='gradient-text'>{"code."}</span></p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-4 py-3 rounded hover:bg-primary/90 transition duration-300 hover:scale-95 select-none"
              >
                <a href="mailto:sahil@example.com">Hire Me!</a>
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-16 left-0 right-0 text-center text-9xl font-bold text-black-100 overflow-hidden whitespace-nowrap"
          >
            SAHIL HALDANKAR
          </motion.div>
        </div>

        {/* Projects Section */}
        <div id="projects" className="py-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative cursor-pointer group bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover select-none"
                />
                <div className="absolute select-none top-4 right-4 bg-primary text-white text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full">
                  {project.projectNumber}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm select-none"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 items-center">
                    <button className="bg-black text-white px-3 py-1 rounded hover:bg-primary/90 transition select-none duration-300 hover:scale-95">
                      Read More
                    </button>
                 
                    <a href={`${project.link}`} target="_blank" className="text-primary hover:text-primary/80 left-0">
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="coding-profile" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Coding Profile</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="https://i.ibb.co/d0BphkD/image.png"
                  alt="Coding Profile Stats"
                  className="w-full h-auto rounded-lg shadow-lg select-none"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6 items-center flex-col items-center ">
                {profileData.map((profile, index) => (
                  <>
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-2xl font-semibold mb-4">{profile.platform}</h3>
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
                <a href="https://codolio.com/profile/453LOQR9" target="_blank" rel="noopener noreferrer" className='m-2 items-center flex' >
                  <button className="select-none w-full bg-black text-white px-4 py-2 rounded hover:bg-primary/90 transition duration-300 hover:scale-95">
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
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              <span className="text-6xl">M</span>e and MyTech Stack
            </h2>
            <div className="mb-12">
              <p className="mb-4 text-gray-600">
                {`Hi Everyone, I'm  `}<span className='gradient-text font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-200'>{name + " "}</span>
                .Over the past  year, I've gained hands-on experience in building web applications and honing my skills in Data Structures and Algorithms (DSA). My main focus is on mastering web development and improving my problem-solving abilities through DSA to tackle real-world challenges.

                I have a strong passion for developing clean, efficient code and delivering seamless user experiences. I’m constantly learning and adapting to new technologies and challenges to create impactful solutions.
              </p>

              <p>
                With a keen interest in problem-solving and algorithmic thinking, I enjoy tackling complex challenges that push my limits. Whether it's optimizing code performance or designing a user-friendly interface, I strive for excellence in every aspect of development.
              </p>

            </div>
            <div className="relative">
              <div className="absolute inset-0 flex select-none items-center -bottom-full justify-center text-9xl font-bold text-gray-100 z-0  left-3/4">
                Skills
              </div>
              <div className="relative z-10 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-8">
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
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact me</h2>
          <h3 className="text-2xl text-center mb-12 text-gray-700">Questions, Thoughts, Or Just Want To Say Hello?</h3>
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
              className="bg-black text-white px-6 py-3 rounded hover:bg-primary/90 transition duration-300 hover:scale-95 select-none"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="py-8">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <a href="#projects" className="text-gray-600 hover:text-primary">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-primary">Skills</a>
              <a href="#contactme" className="text-gray-600 hover:text-primary">Contact Me</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/SaH1l191" className="text-gray-600 hover:text-primary">
                <Github className="h-6 w-6" />
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