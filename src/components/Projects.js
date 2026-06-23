const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chat Application',
      description: 'Real-time messaging app with AI integration for smart suggestions and automation.',
      tags: ['React', 'Node.js', 'AI/ML', 'WebSocket'],
      link: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration and inventory management.',
      tags: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with real-time updates.',
      tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Mobile App with React Native',
      description: 'Cross-platform mobile application for task management and collaboration.',
      tags: ['React Native', 'Firebase', 'Redux', 'Expo'],
      link: '#',
    },
    {
      title: 'Machine Learning Model API',
      description: 'REST API for deploying and serving machine learning models at scale.',
      tags: ['Python', 'FastAPI', 'TensorFlow', 'Docker'],
      link: '#',
    },
    {
      title: 'Blockchain DApp',
      description: 'Decentralized application built on Ethereum with smart contracts.',
      tags: ['Solidity', 'Web3.js', 'React', 'Hardhat'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-secondary/60 rounded-lg p-6 hover-scale border border-secondary/50"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="inline-block text-accent hover:text-blue-300 font-semibold transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
