'use client'

import { supabase } from '../lib/supabase'

export default function LoginPage() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/dashboard',
      },
    })
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="border border-gray-800 rounded-2xl p-8">
        <h1>Welcome to CodeStudy AI</h1>

        <button onClick={signInWithGoogle}>
          Continue with Google
        </button>
      </div>
    </main>
  )
}