export default function InvestmentBottom() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to learn more?</span>
            <span className="block text-blue-600">Contact our investor relation team</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="mailto:ir@rubilink.io"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-600 ease-in-out duration-300"
              >
                Contact IR
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  