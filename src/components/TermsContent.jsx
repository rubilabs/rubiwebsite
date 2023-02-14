import React from 'react';

const TermsContent = () => {
  return (
    <div className='w-screen flex flex-col select-none'>
       <h1 tabIndex={0} role="heading" aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-12 text-center">
            Terms and Conditions
        </h1>
        <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4 text-center">
            The terms and conditions that governs our website <br />
        </p>
        <div aria-label="terms" role="terms" className="grid align-middle justify-center text-left m-4 overflow-y-scroll scroll-smooth w-[1/2] h-[50vh]">
            <span className="text-md font-semibold text-center m-2">
              Welcome to the Rubi Labs homepage  
            </span>
            <br></br>
            <span className='font-semibold'>Regarding cookies in our website</span>
            <p>
              The Rubi Labs Inc, herein Rubi Labs株式会社 is a blockchain database company based in Tokyo, Japan. Our website uses cookies to adjust the visibility of the content that fits best with your preference.
              As part of the cookies consent, all cookies will be removed once you clear your browser history. Cookies will also be automatically removed from your personal system in a 90 days period.
              We also advice every visitor of our website to set their preference by opening the cookie preferences before allowing your consent. We do not impose cookie consent to our visitors, and please do raise
              questions if you are unsure of what cookies do.<br></br>
              <br></br>
              <span className='font-semibold'>Regarding our contents</span>
              <br></br>
              <p>
              The contents in this website, excluding study cases and material references such as paper and other documentation are shared as a part of sales material. Our documentation, whitepaper, study cases, are 
              part of our research and development, and is conducted internally by our research and development team. We also do some collaboration on study cases and reference materials, and it is part of our and our partner's
              prioprietary rights. Thus, when citing contents from our documentation and study cases, we incline that users give the right citation to their respective owners of the content. In case of failure to conduct, it will
              be treated as a plagiarism and further actions may be taken to stop or prevent so.
              </p>
              <br></br> 
              <span></span>
            </p>
            <span className='font-semibold'>Our trademark</span>
            <p>
            Our CI is a three curved blue line, creating an atomic shape. We use this logo to identify ourselves in our documentation, social media, events, and any other properties. We also share our CI with our products, thus a brand 
            identity representing our company and our services. We changed our CI from dark blue infinite, with a change in purpose and motivation of conducting business. Our CI here represents a three-foundation members, building the company
            ground up, offering connected data services, as represented in our CI, where the three lines are intersecting with each other.
            </p>
            <br></br>
            <span className='font-semibold'>Our terms governing this website</span>
            <p>
            To maintain order in this website, our team has created a governing rules that will be applied in this website, specifically to govern content distribution.
            Listed below are our terms and conditions for users who are applying through our website.
            </p>
            <br></br>
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
        </div>
    </div>
  )
}

export default TermsContent