export default function InvestmentHead() {
    return (
      <div className="bg-white select-none">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-blue-600">Opportunities</h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              We invite you <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">onboard</span>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Join hands with us in accompanying our journey
            </p>
            <button onClick={() => window.open('mailto:ir@rubilink.io')} className="mt-12 bg-blue-500 rounded-lg w-52 h-12 font-medium text-lg text-white hover:bg-blue-600 ease-in-out duration-300">Contact Us</button>
          </div>
        </div>
      </div>
    )
  }
  