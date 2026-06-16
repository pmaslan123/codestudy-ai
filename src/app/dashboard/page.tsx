export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-2">Dashboard</h1>

      <p className="text-gray-400 mb-8">
        Welcome to CodeStudy AI. Choose what you want to do.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="/upload"
          className="border border-gray-800 rounded-2xl p-6 hover:border-white transition block"
        >
          <h2 className="text-xl font-semibold mb-2">Upload Notes</h2>
          <p className="text-gray-400">Upload PDFs or lecture notes.</p>
        </a>

        <a
          href="/tutor"
          className="border border-gray-800 rounded-2xl p-6 hover:border-white transition block"
        >
          <h2 className="text-xl font-semibold mb-2">AI Tutor</h2>
          <p className="text-gray-400">Ask questions about your course.</p>
        </a>

        <a
          href="/notes"
          className="border border-gray-800 rounded-2xl p-6 hover:border-white transition block"
        >
          <h2 className="text-xl font-semibold mb-2">My Notes</h2>
          <p className="text-gray-400">View uploaded PDFs.</p>
        </a>

        <a
          href="/flashcards"
          className="border border-gray-800 rounded-2xl p-6 hover:border-white transition block"
        >
          <h2 className="text-xl font-semibold mb-2">Flashcards</h2>
          <p className="text-gray-400">Generate revision cards.</p>
        </a>
      </div>
    </main>
  );
}
