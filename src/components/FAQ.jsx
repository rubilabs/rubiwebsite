import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import React, {useEffect} from "react";
import { useAnimation } from "framer-motion";

const faqs = [
    {
      question: 'What is the main service that rubi labs provides?',
      answer:
        'We provide validation authority, data storage and processing, dashboard, and API integration service.',
    },
    {
      question: 'Are banks the only company that can be validator?',
      answer: 
      'No, institutions other than banks can also be part of our ecosystem. Please visit our customer support to see our qualification.'
    },
    {
      question: 'Is rubilink banking wallet service limited to banks?',
      answer: 'No, we provide support to corporates that feel the need to use our product.'
    },
    {
      question: 'Is the rubi labs team open for collaboration?',
      answer: 'Yes, we are open for collaborative research and development. Please visit our customer support for more detail.'
    },
    {
      question: 'What are the charges of using rubi labs product?',
      answer: 'Please contact our sales directly for pricing options, as we do not disclose our price list.'
    }
    // More questions...
  ]
  
  export default function FAQ() {

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
      <div className="bg-gray-50 bg-opacity-40 select-none">
        <div ref={ref} className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <motion.div animate={animate}>
              <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
              <p className="mt-4 text-lg text-gray-500">
                If you cannot find the answer to your question, please visit
                <a href="/customersupport" className="font-medium text-sky-500 hover:text-sky-400 ease-in-out duration-300">
                {''} our customer support
                </a>
                {''} and share your question with us.
              </p>
            </motion.div>
            <motion.div animate={animation} className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }
  