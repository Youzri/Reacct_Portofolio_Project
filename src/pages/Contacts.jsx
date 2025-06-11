import React from 'react'

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 min-h-[70vh] max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-lg text-center mb-8">
            Feel free to reach out at{" "}
            <a href="mailto:ahmed.y.alhussainy@gmail.com" className="text-primary underline">
            ahmed.y.alhussainy@gmail.com
            </a>
        </p>
        <form className="space-y-5 w-full">
            <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
            />
            <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg"
            />
            <textarea
            placeholder="Your Message"
            className="w-full p-4 border rounded-lg"
            rows="5"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
            Send Message
            </button>
        </form>
    </div>
  )
}

export default Contacts
