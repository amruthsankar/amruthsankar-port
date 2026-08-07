import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/paper')({
  component: PaperPage,
});

const papers = [
  {
    title: 'Project 1',
    description: 'coming soon.',
    tags: ['VLSI', 'Electronics', 'IEEE'],
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'coming soon.',
    tags: ['Embedded Systems', 'C++'],
    link: '#',
  },
];

function PaperPage() {
  return (
    <section className="min-h-screen bg-[#0a0d14] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Papers & <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            A showcase of my research publications, technical reports, and academic projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-[#111622] border border-gray-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300 shadow-lg"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {paper.description}
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
                >
                  Read Paper &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
