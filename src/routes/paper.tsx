import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/paper')({
  component: PaperPage,
})

// Replace or expand this array with your actual papers and research works
const papers = [
  {
    title: 'Research Paper Title 1',
    description: 'Abstract or brief summary of the research paper and key methodology.',
    tags: ['Machine Learning', 'Python', 'IEEE'],
    link: '#',
  },
  {
    title: 'Research Paper Title 2',
    description: 'Abstract or brief summary of the research paper and key findings.',
    tags: ['Data Analysis', 'React'],
    link: '#',
  },
]

function PaperPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="space-y-8">
        <div className="border-b border-gray-800 pb-4">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Papers & Works
          </h1>
          <p className="text-gray-400 mt-2">
            A collection of my publications, research papers, and technical reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-gray-700 transition duration-200 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  View Paper &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
