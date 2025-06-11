import React from 'react'

const Projects = () => {

    const projects = [
    {
      name: "Portfolio Website",
      description: "A personal site to showcase my projects and skills.",
      tech: "React, TailwindCSS, React Router",
    },
    {
      name: "Task Manager",
      description: "A full-stack to-do app with user auth and CRUD features.",
      tech: "MongoDB, Express, React, Node.js",
    },
    {
      name: "Design Studio",
      description: "Landing page for a creative agency.",
      tech: "HTML, CSS, JavaScript",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-6 min-h-[70vh] max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
            <p className="mb-3 text-base text-gray-600">{project.description}</p>
            <p className="text-sm text-primary font-medium">Tech: {project.tech}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
