/* This example requires Tailwind CSS v2.0+ */
import { BoltIcon, EnvelopeIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Big Data Bank',
    description: 'Data fetch is done by considering millions of interconnected data, increasing the accuracy and credibility of an information',
    icon: GlobeAltIcon,
  },
  {
    name: 'All-Round Contribution',
    description:
      'Users also have the right to filter their data. This will be done through data filtering, allowing users to pick up only relevant data',
    icon: ScaleIcon,
  },
  {
    name: 'Instant Response',
    description:
      'Both fetch and post request are responded in an instant automatically by the rubilink system, enabling users to use the data first-hand',
    icon: BoltIcon,
  },
  {
    name: 'Full Support',
    description:
      'The rubi labs team will assist users in troubleshooting when problem occurs',
    icon: EnvelopeIcon,
  },
]

export default function DataSection() {
  return (
    <div className="overflow-hidden bg-white select-none">
      <div className="relative mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Linear database where everything connects</h2>
          </div>
          <dl className="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
