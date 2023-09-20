export default function InvestmentPage() {
    return (
      <div className="bg-white select-none">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-blue-600">Are you a rubi privilege?</h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Access your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">private account</span>
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Please login into your investor account to gain access to privileges
            </p>
            <button onClick={() => window.open('')} className="mt-12 bg-blue-500 rounded-lg w-52 h-12 font-medium text-lg text-white hover:bg-blue-600 ease-in-out duration-300">Rubi Privilege</button>
          </div>
        </div>
      </div>
    )
  }
  