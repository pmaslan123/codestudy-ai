'use client'

import { useState } from 'react'

export default function TutorPage() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function askTutor() {
    setAnswer(`You asked: ${question}`)
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">AI Tutor</h1>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about your course..."
        className="w-full max-w-2xl h-40 p-4 rounded-xl text-black mb-4"
      />

      <br />

      <button
        onClick={askTutor}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
      >
        Ask Tutor
      </button>

      {answer && (
        <div className="mt-6 border border-gray-800 rounded-xl p-4 max-w-2xl">
          {answer}
        </div>
      )}
    </main>
  )
}