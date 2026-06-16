'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function NotesPage() {
  const [files, setFiles] = useState<any[]>([])

  useEffect(() => {
    loadFiles()
  }, [])

  async function loadFiles() {
    const { data, error } = await supabase.storage
      .from('notes')
      .list()

    if (!error && data) {
      setFiles(data)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">My Notes</h1>

      {files.length === 0 ? (
        <p>No notes uploaded yet.</p>
      ) : (
        <div className="space-y-4">
          {files.map((file) => (
            <div
              key={file.name}
              className="border border-gray-800 rounded-xl p-4"
            >
              📄 {file.name}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}