/* This example requires Tailwind CSS v2.0+ */
import Background2 from '../assets/background2.jpg'

const metrics = [
    { id: 1, stat: 'Registered Capital', emphasis: '10 million', rest: 'Japanese Yen.' },
    { id: 2, stat: 'Address', emphasis: 'JSQUARE 2F', rest: '18-10 Koamicho, Chuo-ku, Tokyo.' },
    { id: 3, stat: 'Officers', emphasis: '4', rest: 'executives and 3 advisors.' },
    { id: 4, stat: 'Established', emphasis: 'October 18', rest: '2022.' },
  ]
  
  export default function Information() {
    return (
      <div className="relative bg-gray-600">
        <div className="absolute bottom-0 h-80 w-full xl:inset-0 xl:h-full">
          <div className="h-full w-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                src={Background2}
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-400 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-base font-semibold text-indigo-300">Valuable Metrics</h2>
            <p className="mt-3 text-3xl font-bold tracking-tight text-white">
              Get a hold of our brief company introduction
            </p>
            <p className="mt-5 text-lg text-gray-300">
              We are a young and robust company established in 2022, made up of 75% Science background team. Our corporate culture resembles those of Science laboratorium, being serious in what we do while having fun at the same time.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-white">{item.stat}</span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  