import { PhotoIcon, IdentificationIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Basic Profiling',
    description:
      'Basic details including Name, DOB, Gender, Address, and any other basic information are automatically grabbed.',
    icon: UserIcon,
  },
  {
    name: 'Clear Pictures',
    description:
      'Lapis eKYC AI does a lighting check on the pictures, and does a liveliness test to check whether lights or any objects are obstructing.',
    icon: PhotoIcon,
  },
  {
    name: 'Valid ID Cards',
    description:
      'Lapis eKYC AI automatically checks whether the provided ID card is authentic, whether the applicant is the same individual, and whether provided ID is still valid.',
    icon: IdentificationIcon,
  },
  {
    name: 'Double Validation',
    description:
      'Unique to Lapis eKYC system model where ecosystem supports institutional and cross-institutional validation for data authenticity and higher reliability.',
    icon: LockClosedIcon,
  },
]

export default function EkycInformation() {
  return (
    <div className="bg-white py-24 sm:py-32 select-none">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Lapis eKYC</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            An eKYC system introduced and powered by the Rubilink Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lapis eKYC introduces AI and makes sure that the guidelines and foundations established by the government 
            are followed. Here are several things to note.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
