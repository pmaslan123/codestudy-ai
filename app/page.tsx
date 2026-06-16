export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="flex flex-col items-center justify-center text-center h-screen px-6">

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          CodeStudy AI
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          Upload lecture notes, generate flashcards, create quizzes and chat
          with an AI tutor trained on your course materials.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          Get Started
        </button>

      </section>

    </main>
  );
}