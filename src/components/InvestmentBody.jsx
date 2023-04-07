/* This example requires Tailwind CSS v2.0+ */
import { MagnifyingGlassIcon, ForwardIcon } from '@heroicons/react/20/solid'
import {
    ShieldCheckIcon,
    ServerStackIcon,
    ChatBubbleBottomCenterIcon,
    MusicalNoteIcon,
    InformationCircleIcon,
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'System Design',
      description: 'We build the main component by ourselves, meaning we understand best on our system capabilities and limits',
      icon: ServerStackIcon,
    },
    {
      name: 'Solid Communication',
      description: 'We see director meetings and board of directors as one of our most important assets, so we make sure to take regular conversation',
      icon: ChatBubbleBottomCenterIcon,
    },
    {
      name: 'Value Driven',
      description: 'We focus on creating a valuable and meaningful product for the long-run, which is our core in running a business',
      icon: MagnifyingGlassIcon,
    },
    {
      name: 'Borderless',
      description: 'We do not set a strong segmentation, rather focusing on teamwork in achieving a mutual goal',
      icon: ForwardIcon,
    },
    {
      name: 'Diversity',
      description: 'Our team is very multicultural, with team members being at least bilingual, and having exposures to diverse cultures',
      icon: MusicalNoteIcon,
    },
    {
      name: 'Overseas Connection',
      description: 'Founding members of the company have prominent connections overseas, mainly in Southeast Asia',
      icon: InformationCircleIcon,
    },
  ]
  
  export default function InvestmentBody() {
    return (
      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-blue-600">Why Rubi Labs</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We are very focused in delivering our vision
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Take a look at our values and how we are delivering our mission.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  