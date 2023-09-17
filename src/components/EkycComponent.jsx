import Ekyc from '../assets/ekyc.png'
import { CheckBadgeIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React, {useEffect} from "react";
import { useAnimation } from "framer-motion";

export default function EkycComponent() {

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
    <div ref={ref} className="relative bg-white select-none">
      <motion.div animate={animate} className="h-56 bg-white sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="h-[400px] w-[600px] ml-20"
          src={Ekyc}
        />
      </motion.div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <motion.div animate={animation} className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
              <CheckBadgeIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Real-time verification and validation procedures
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Lapis eKYC is empowered with AI to validate and conduct real-time face match to identify the match percentage
            of the user. Validation procedures will also be given to the institution for a double check to prevent misconduct
            and user mismatch.
          </p>
         
        </motion.div>
      </div>
    </div>
  )
}
