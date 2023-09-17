/* This example requires Tailwind CSS v2.0+ */
export default function EkycHeader() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 select-none">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-blue-600">Services</h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Lapis Integrated<br></br>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">eKYC</span>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              See how our eKYC service can benefit your institution.
            </p>
          </div>
        </div>
      </div>
    )
  }
  