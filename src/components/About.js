const About = () => {
  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'Python',
    'Machine Learning',
    'Web Design',
    'UI/UX',
    'Database Design',
  ]

  return (
    <section id="about" className="section">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate developer and researcher with a keen interest in building
              scalable applications and exploring innovative technologies. With expertise
              in full-stack development, I've worked on diverse projects ranging from web
              applications to research-based solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to create
              meaningful impact. I believe in continuous learning and sharing knowledge
              with the community.
            </p>
          </div>
          <div className="fade-in">
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-secondary/50 hover:bg-secondary/80 p-4 rounded-lg hover-scale"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
