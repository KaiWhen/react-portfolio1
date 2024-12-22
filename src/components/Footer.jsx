import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-4">
    <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">Built with React and Tailwind CSS. Deployed with Vercel</p>
        <p className="text-sm">Made with ❤️ by Kevin Wang | {new Date().getFullYear()}</p>
    </div>
  </footer>
  )
}

export default Footer