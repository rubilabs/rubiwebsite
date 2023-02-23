import Validate from '../../public/assets/validate.png'
import { UsersIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React, {useEffect} from "react";
import { useAnimation } from "framer-motion";

export default function ValidationHead() {

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
          className="h-[500px] w-[520px] object-cover pl-20"
          src={Validate}
          alt="Validator"
        />
      </motion.div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Peer to peer data validation 
          </h2>
          <p className="mt-6 text-lg text-gray-500">
            Access the network through our API and see incoming data. Validate your own exchanges, and use our database for your business conduct.
            Make a fetch and post request easily through any of your frontend platform.
          </p>
          <motion.div animate={animation} className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Delivery</dt>
                <dd className="order-1 text-2xl font-bold text-blue-600 sm:text-3xl sm:tracking-tight">3 sec</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Accuracy</dt>
                <dd className="order-1 text-2xl font-bold text-blue-600 sm:text-3xl sm:tracking-tight">99.5%</dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">Traffic</dt>
                <dd className="order-1 text-2xl font-bold text-blue-600 sm:text-3xl sm:tracking-tight">100k+</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
