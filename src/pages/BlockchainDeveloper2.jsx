import React, {useMemo, useState} from "react"
import 'react-intersection-observer'

export default function BlockchainDeveloper2() {

    // const lastTermsElement = document.querySelector('.terms-and-conditions');
    // const acceptBtn = document.querySelector('.btn-accept');

    // const termsObserverCallback = (lastP, termsObserver) => {
    //     if(lastP[0].isIntersecting){
    //         acceptBtn.classList.add('enabled');
    //         acceptBtn.focus();
    //         termsObserver.unobserve(lastTermsElement);
    //     };
    // }

    // const termsObserverOptions = {
    //     threshold: 1
    // }

    // const termsObserver = new IntersectionObserver(termsObserverCallback, termsObserverOptions);

    // termsObserver.observe(lastTermsElement);

    // acceptBtn.addEventListener('click', function(e){
    //     if(!e.target.classList.contains('enabled')){
    //         const btnMessage = document.querySelector('.btn-message');
    //         btnMessage.classList.add('visible');
    //         setTimeout(function(){
    //             btnMessage.classList.remove('visible')
    //         }, '2000');
    //     };
    // })

  return (
    <div>
    <div className="w-full justify-center bg-white p-10">
        <div className="md:flex items-center align-middle border-b pb-6 border-gray-200">
            <div className="flex items-center md:mt-0 mt-4">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-base font-medium leading-none text-gray-800">01</p>
                </div>
                <p className="text-base ml-3 font-medium leading-4 text-gray-800">Sign Up</p>
            </div>
            <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <p className="text-base font-medium leading-none text-white">02</p>
                </div>
                <p className="text-base ml-3 font-medium leading-4 text-gray-800">Terms and Conditions</p>
            </div>
            <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-base font-medium leading-none text-gray-800">03</p>
                </div>
                <p className="text-base ml-3 font-medium leading-4 text-gray-800">Applicant Information</p>
            </div>
            <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-base font-medium leading-none text-gray-800">04</p>
                </div>
                <p className="text-base ml-3 font-medium leading-4 text-gray-800">Confirmation</p>
            </div>
        </div>
        <h1 tabIndex={0} role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12">
            Terms and Conditions
        </h1>
        <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
            Please read through the terms and conditions before proceeding. <br />
        </p>
        <div aria-label="terms-and-conditions" role="terms" className="grid align-middle justify-center text-left m-4 overflow-y-scroll scroll-smooth w-1/2 h-[50vh]">
            <span className="text-md font-semibold text-center m-2">
              Welcome to the Rubi Labs recruitment page  
            </span>
            <p>
              The Rubi Labs Inc, herein Rubi Labs株式会社 is a blockchain database company based in Tokyo, Japan. We collect your personal information for our recruitment reference purposes.
              We do not distribute or disclose your personal information to any parties that are not related in this recruitment process.
              We also advice every applicant to fill in a legitimate personal information for our judgement purposes, as illegal and deceits are subjected to lawsuit and penalty.
              Fellow applicants are also advised that personal information used for this recruitment processes will be stored within the company for three months, and will then be removed.
              Please refrain from sending in the same application within three months period if your application has not been answered. Please be adviced that Rubi Labs Inc do not open job
              recruitment elsewhere, unless stated so or marked so by our trading mark. Below are the clauses that supervises the hiring process.
            </p>
            <span className="text-md font-medium">
               I. Falsifying data may be subjected to fine or act of legal sanction 
            </span>
            <p>
               This clause is a prerequisite that has been established as a global standard, and has been part of a moral standard. Failing to provide employer with legitimate information 
               will lead to legal sanctions. As Rubi Labs Inc is under the Japanese jurisdiction, any legal actions taken will be under the Japanese Act. In addition to legal actions being taken, 
               we will also mark your personal information as a blacklisted person and our system will automatically defer your application once you are blacklisted.
            </p>
            <span className="text-md font-medium">
               II. Personal information usage and storage duration
            </span>
            <p>
                The information collected will be stored internally for a three months period, and will then be discarded. In the case of a failure of response upon a certain application, please refrain
                from sending the same application twice, and instead, please send a reminder email to our HR for confirmation as application may sometimes get overlooked depending on the traffic we receive.
                We typically respond to your application within a week, and if the duration has not pass our timeline, please wait and confirm with our HR team.
            </p>
            <span className="text-md font-medium">
                III. The purpose of collecting personal information
            </span>
            <p>
                This section is solely created for the purpose of recruitment, and personal data collection will be used accordingly. We will not distribute your personal information to any third-party unless we                    
                see the necessity to conduct so. We prevent your personal information from leaking by adding a double layer of security, and we separate the storage for recruitment processes. This is done to prevent
                any data loss or data leakage from malware ransom. We as a database company treat any personal information as a delicate matter, and we do not use your personal information as a marketing purpose.
            </p>
            <span className="text-md font-medium">
                IV. Segregation on recruitment data storage
            </span>
            <p>
                In the unlikely events of malware ransom, we deliberately segregate the storage that holds applicants private information in the effort to avoid leakage.
            </p>
            <span className="mt-2">
                Please read the terms and conditions stated on the above before proceeding. If you have any questions regarding the recruitment process or this terms and conditions, please contact us at <span onClick={() => window.open('mailto:hr@rubilink.io')} className="text-blue-500 hover:text-blue-600 cursor-pointer">hr@rubilink.io</span>.
            </span>
            <span className="text-center">
                I have read and agree to the terms and conditions.
            </span>
        </div>
        <div aria-label="btn-container">
        <button disabled role="button" aria-label="btn-accept" className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
        <a href='/blockchaindeveloper-3'><span className="text-sm font-medium text-center text-gray-800 capitalize">Next Step</span></a>
            <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
            </svg>
        </button>
        <div aria-label="btn-message" className="absolute px-6 py-1 -mt-40 ml-40 bg-black w-80 h-10 pointer-events-none transition-all ease-in-out duration-200 opacity-1">
            <span className=" text-white text-center align-middle justify-center">Please read the terms and conditions</span>
        </div>
        </div>
    </div>
    <style dangerouslySetInnerHTML={{ __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      " }} />
    </div>
  )
}