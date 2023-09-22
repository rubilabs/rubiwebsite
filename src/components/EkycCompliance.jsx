import Fsa from "../assets/fsa.svg";

export default function EkycCompliance() {
    return (
      <div className="bg-sky-200 bg-opacity-25 select-none">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 className="max-w-md mx-auto text-3xl font-extrabold text-black text-center lg:max-w-xl lg:text-left">
              We follow the regulations and compliance set by these institutions
            </h2>
            <div className="flow-root self-center mt-8 lg:mt-0">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                 {/* <img
                    className="h-12 grayscale hover:grayscale-0 cursor-pointer ease-in-out duration-300"
                    src="src/assets/bni.png"
                    alt="BankNegaraIndonesia"
                    onClick={() => window.open('http://www.ptbni.co.jp/?lang=ja')}
                  /> */}
                </div>
                {/* <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4 grayscale hover:grayscale-0 cursor-pointer ease-in-out duration-300">
                  <img 
                  className="h-12" 
                  src={Gcp}
                  alt="GCP"
                  onClick={() => window.open('https://console.cloud.google.com/?hl=ja')}
                  />
                </div> */}
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4 grayscale hover:grayscale-0 cursor-pointer ease-in-out duration-300">
                  <img 
                  className="h-12" 
                  src={Fsa}
                  alt="FSA"
                  onClick={() => window.open('https://www.fsa.go.jp/')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  