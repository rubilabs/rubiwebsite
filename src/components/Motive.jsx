import { MdOutlineCached, MdOutlineBuild } from 'react-icons/md'
import { AiOutlineRadarChart } from 'react-icons/ai'
import Background from '../assets/background.jpg'

const supportLinks = [
  {
    name: 'Development',
    href: '#',
    description:
      'We identify from the logic and reasoning behind a technological advancement, conduct a study and do testing before we launch a product.',
    icon: MdOutlineCached,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'We are eager to learn more about new technologies and we are open for collaborations. We will also support clients with a step-by-step guide to understand how a product works.',
    icon: MdOutlineBuild
  },
  {
    name: 'Adaptive and Flexibility',
    href: '#',
    description:
      'We study the meaning of a specific technology before we adapt, minimizing time and resource loss. Despite, we are a fast to adapt company, flexible in changing our direction towards what the market needs.',
    icon: AiOutlineRadarChart
  },
]

export default function Motive() {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl z-10">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={Background}
            alt=""
          />
          <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">About Rubi Labs</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            A company composed of Science graduates that emphasizes research and technological development
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-blue-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
               
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
