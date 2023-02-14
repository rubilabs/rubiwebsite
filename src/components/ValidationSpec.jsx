/* This example requires Tailwind CSS v2.0+ */
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Full control',
    description:
      'You will have the full right to the data exchanges that you make, starting from request, to validation, to data post.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Transparent',
    description:
      'Users are able to make decision on data selection, and are held responsible for through individual validation.',
    icon: ScaleIcon,
  },
  {
    name: 'Data exchange are instant',
    description:
      'Receive data validation request within 3 seconds. ',
    icon: BoltIcon,
  },
  {
    name: 'Traceable Actions',
    description:
      'Trace back action is enabled for each exchanges that you have conducted for use in case when trouble arises.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]

export default function ValidationSpec() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-blue-600">Validation</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to spend
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Understand why peer to peer validation increases your safety and privacy. See what we can do to offer.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
