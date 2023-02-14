import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React, {useEffect} from "react";
import { useAnimation } from "framer-motion";

export default function Features() {

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
    <div className="relative bg-white bg-opacity-0 pt-16 pb-32 overflow-hidden select-none">
      <div ref={ref} className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <motion.div animate={animation}>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                </svg>
                </span>
              </motion.div>
              <motion.div animate={animation} className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Join the ecosystem and monitor what's happening
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Oversee incoming data and validate them to obtain rewards. Obtain the resources that you need through the lapislazuli dashboard.
                </p>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-400 ease-in-out duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;It is very important to explore newer technologies to advance banking experiences&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="src/assets/partner.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Vice Deputy General at Partner Bank B</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <motion.div animate={animate} className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="src/assets/maincomponent.png"
                alt="Inbox user interface"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-24">
        <div ref={ref} className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-sky-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
                    <path d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                    <path fillRule="evenodd" d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
                </span>
              </div>
              <motion.div className="mt-6" animate={animation}>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Make use of an interactive platform to interact
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Regardless our users being corporate clients, we are emphasizing on their experience in using our system, ensuring interactivity with users.
                </p>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-sky-500 hover:bg-sky-400 ease-in-out duration-300"
                  >
                    Get Quote
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <motion.div animate={animate} className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="src/assets/maincomponent2.png"
                alt="Customer profile user interface"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
