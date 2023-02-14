import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React, {useEffect} from "react";
import { useAnimation } from "framer-motion";

const stats = [
    { label: 'Founded', value: '2022' },
    { label: 'Team Members', value: '4' },
  ]
  
  export default function Mission() {

    const {ref, inView} = useInView();
    const animation = useAnimation();
    const animate = useAnimation();

    useEffect(() => {
      if(inView){
        animation.start({
          x: 0,
          transition: {
            type: 'spring', duration: 2, bounce: 0.2
          }
        });
      }
      if(!inView){
        animation.start({x: '-100vw'})
      }
    }, [inView])

    useEffect(() => {
      if(inView){
        animate.start({
          opacity: 1,
          transition: {
            type: 'keyframes', duration: 2,
          }
        });
      }
      if(!inView){
        animate.start({opacity: 0})
      }
    }, [inView])

    return (
      <div ref={ref} className="relative bg-gray-50 bg-opacity-40 backdrop-blur-lg py-16 sm:py-24 select-none">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <motion.div animate={animate} className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="src/assets/pledge.jpg"
                  alt=""
                />
                <div className="absolute inset-0 bg-sky-200 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500 via-sky-500 opacity-0" />
                <div className="relative px-8">
                  <div>
                   
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-sky-500"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                      As the world is aiming towards borderless economy, we strongly believe that the blockchain technology will play a big role in what we will call open economy. We will maximize our resources to support open data exchanges for cross-border financial institutions.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-base font-semibold text-sky-200">James William, Director of Rubi Labs Inc</p>
                    </footer>
                  </blockquote>
                </div>
              </motion.div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                The <span className="text-transparent bg-gradient-to-r bg-clip-text from-sky-500 via-sky-400 to-sky-600">rubilink 2030</span> pledge
              </h2>
              <motion.div animate={animation} className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Societies all around the world are raising awareness, and will gather more information that was previously unknown.
                  An example to this fact is how we came to realize on carbon level, energy consumption, safety of private information, and
                  even inflation that is inevitable.
                </p>
                <p className="text-base leading-7">
                  The Rubi Labs team strongly believes how spending trend and behavior will change in the upcoming open economy.
                  Taking this fact to an advantage, we are providing an alternative method where data storage is no longer centralized, and where 
                  cross-border data exchanges will be open to all institutions within the network. We believe that only in this way, energy consumption and 
                  time consumption can be reduced. 
                </p>
                <p className="text-base leading-7">
                  An ecosystem where process is fast, energy consumption is low, transparent, secure, and zero carbon emission is our goal by 2030.
                  The Rubi Labs team will maximize our research and development and any resources to funnel our goal in order to fulfill our statement even before 2030.
                </p>
              </motion.div>
            </div>
  
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="#" className="text-base font-medium text-sky-500 hover:text-sky-400 ease-in-out duration-300">
                  {' '}
                  Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  