export default function EkycDocumentation() {
    return (
      <div className="bg-sky-50 select-none">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">Start by reading the</span>
            <span className="block text-blue-600">Lapis eKYC documentation</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                onClick={() => window.open('https://documentation.rubilink.io')}
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 ease-in-out duration-300"
              >
                Go To Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  