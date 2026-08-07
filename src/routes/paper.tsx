import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/paper')({
  component: PaperPage,
})

function PaperPage() {
  return (
    <div className="p-2">
      <h3>Papers & Works</h3>
      <p>Welcome to the Papers & Works page!</p>
    </div>
  )
}
