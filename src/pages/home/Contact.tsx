import React from 'react'

export default function Contact() {
  return (
    <section className="bg-soft-gray h-full">
      <div className="flex flex-col items-center py-10 space-y-4">
        <h1 className="text-4xl">Are you a landlord?</h1>
        <p className="text-black/50 text-base">
          Discover ways to increase your home's value and get listed. No Spam.
        </p>
        <div className="bg-white py-2 px-2 rounded-lg flex items-center gap-x-2">
          <input
            type="text"
            placeholder="Enter your email address"
            className="outline-none bg-transparent"
          />
          <button className="bg-green-primary-500 text-white py-1 px-4 rounded-lg">Submit</button>
        </div>
        <p className="text-base text-black/50">
          Join 10,000+ other landlords in our estatery community.
        </p>
      </div>
    </section>
  )
}
