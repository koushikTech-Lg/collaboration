"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function WantToHirePage() {

     useEffect(() => {
        // Replace this URL with your actual domain
        window.location.href = "https://cfafrmjobs.com/"
      }, [])
    
      return (
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg text-slate-600">Redirecting...</p>
        </div>
      )

}
