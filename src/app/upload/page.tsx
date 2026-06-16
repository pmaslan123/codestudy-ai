'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState('')

  const uploadFile = async () => {
    if (!file) {
      setMessage('Please choose a PDF first.')
      return
    }

    const filePath = `${Date.now()}-${file.name}`

    const { error } = await supabase.storage
      .from('notes')
      .upload(filePath, file)

    if (error) {
      setMessage(`Upload failed: ${error.message}`)
      return
    }

    setMessage('File uploaded successfully!')
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Upload Notes</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="border border-gray-700 p-4 rounded-xl mb-4"
      />

      <br />

      <button
        onClick={uploadFile}
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold mt-4"
      >
        Upload PDF
      </button>

      {message && <p className="mt-4 text-gray-300">{message}</p>}
    </main>
  )
}