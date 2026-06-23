const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 section"
    >
      <div className="container max-w-6xl mx-auto px-4 text-center fade-in">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Niloy Sarkar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Full-Stack Developer | Researcher | Innovation Enthusiast
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          I build cutting-edge web applications and conduct research in emerging technologies.
          Passionate about solving complex problems and creating impactful solutions.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent hover:bg-blue-600 rounded-lg font-semibold transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-primary rounded-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
