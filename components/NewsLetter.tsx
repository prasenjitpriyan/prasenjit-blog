import React from 'react'

const NewsLetter = () => {
  return (
    <div className="min-h-[50svh] px-5 md:px-10 flex flex-col md:flex-row items-center justify-center py-10">
      <div className="w-full md:w-1/2 p-8 rounded-lg border border-color4 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-color4">
          Newsletter Options
        </h2>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="bg-color3 text-color1 rounded-full px-3 py-1 text-sm font-semibold mr-3">
              Weekly
            </span>
            <div>
              <h3 className="text-color4 text-lg font-semibold">
                Weekly Highlights
              </h3>
              <p className="text-color2 text-sm">
                Stay updated with a curated roundup of the week&apos;s most
                talked-about content.
              </p>
            </div>
          </div>
          <form className="flex items-center justify-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="subscribeWeekly"
                value="yes"
                className="mr-2 accent-color2"
              />
              <span className="text-sm text-color4">Subscribe to Weekly</span>
            </label>
          </form>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <span className="bg-green-200 text-green-800 rounded-full px-3 py-1 text-sm font-semibold mr-3">
              Monthly
            </span>
            <div>
              <h3 className="text-color4 text-lg font-semibold">
                Monthly Digest
              </h3>
              <p className="text-color2 text-sm">
                Take a step back and savor a well-rounded recap of the
                month&apos;s highlights.
              </p>
            </div>
          </div>
          <form className="flex items-center justify-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="subscribeMonthly"
                value="yes"
                className="mr-2 accent-color2"
              />
              <span className="text-color4 text-sm">Subscribe to Monthly</span>
            </label>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-color4">
          Sign up for our Newsletter
        </h1>
        <form className="flex flex-col items-center">
          <label className="w-full mb-4">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full px-4 py-2 border border-color4 rounded-md focus:outline-none focus:ring focus:border-color4"
            />
          </label>
          <button
            type="submit"
            className="bg-color4 hover:bg-color3 text-color1 font-semibold py-2 px-6 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
