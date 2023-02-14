import React, {useMemo, useState} from "react"
import Select from 'react-select'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function BlockchainDeveloper3() {

    const [value, setValue] = useState("")

    const position = [
        { value: 'blockchain-developer', label: 'Blockchain Developer'}
    ]

    const level = [
        { value: 'beginner', label: 'Beginner'},
        { value: 'junior', label: 'Junior'},
        { value: 'senior', label: 'Senior'},
    ]

    const timeline = [
        { value: 'one-week', label: 'In one week'},
        { value: 'two-weeks', label: 'In two weeks'},
        { value: 'one-month', label: 'Within a month'},
        { value: 'more', label: 'More than a month'},
    ]

    const work = [
        { value: 'no', label: 'No'},
        { value: 'yes', label: 'Yes'},
    ]

    const experience = [
        { value: 'none', label: 'None'},
        { value: 'one-year', label: '1 year'},
        { value: 'two-years', label: '2 years'},
        { value: 'three-years', label: '3 years'},
        { value: 'five-years', label: '5 years'},
        { value: 'more', label: 'More than 5 years'},
    ]

    const media = [
        { value: 'google', label: 'Google'},
        { value: 'linkedin', label: 'LinkedIn'},
        { value: 'github', label: 'Github'},
        { value: 'medium', label: 'Medium'},
        { value: 'Social event', label: 'Social Event'},
        { value: 'news', label: 'News'},
        { value: 'none', label: 'None of the above'},
    ]

    const changeHandler = value => {
        setValue(value)
    }
    const [language, setLanguage] = useState("");
    const [workexp, setWorkExp] = useState("");
    const [motivation, setMotivation] = useState("");
    const [contribute, setContribute] = useState("");
    const [obstacles, setObstacles] = useState("");
    const [dob, setDob] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        navigate('/blockchaindeveloper-4')

    const docRef = await addDoc(collection(db, "applicant-information"), {
        language: language,
        workexp: workexp,
        motivation: motivation,
        contribute: contribute,
        obstacles: obstacles,
        dob: dob,
    })
    setLanguage('')
    setWorkExp('')
    setMotivation('')
    setContribute('')
    setObstacles('')
    setDob('')
  };

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
                <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-base font-medium leading-none text-gray-800">02</p>
                </div>
                <p className="text-base ml-3 font-medium leading-4 text-gray-800">Terms and Conditions</p>
            </div>
            <div className="flex items-center md:mt-0 mt-4 md:ml-12">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <p className="text-base font-medium leading-none text-white">03</p>
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
            Applicant Information
        </h1>
        <p role="contentinfo" className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4">
            Please make sure that you are applying for the correct position.<br />
        </p>
        <h2 role="heading" aria-label="enter Personal data" className="text-xl font-semibold leading-7 text-gray-800 mt-10">
            Applicant Data
        </h2>
        <p className="text-sm font-light leading-none text-gray-600 mt-0.5">Please tell us a bit about yourself</p>
        <form onSubmit={handleSubmit}>
        <div className="mt-8 md:flex items-center">
            <div className="flex flex-col md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">I'm applying for</label>
                <Select required key={position} options={position} onChange={changeHandler} />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">Skill Level</label>
                <Select required key={level} options={level} onChange={changeHandler} />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">Programming Languages</label>
                <input value={language} onChange={(e) => setLanguage(e.target.value)} required type="name" tabIndex={0} aria-label="Enter programming languages" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
            </div>
        </div>
        <div className="mt-12 md:flex items-center">
            <div className="flex flex-col md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">Do you have any working experiences?</label>
                <Select required key={work} options={work} onChange={changeHandler} />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">Previous working experiences</label>
                <Select required key={experience} options={experience} onChange={changeHandler} />
            </div>
        </div>
        <div className="mt-12 md:flex items-center grid grid-cols-3 row-span-2">
            <div className="flex flex-col">
                <label className="mb-3 text-sm leading-none text-gray-800">Describe your working experiences</label>
                <textarea value={workexp} onChange={(e) => setWorkExp(e.target.value)} required rows={4} type tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
            </div>
            <div className="flex flex-col ml-8">
                <label className="mb-3 text-sm leading-none text-gray-800">Describe your motivation</label>
                <textarea value={motivation} onChange={(e) => setMotivation(e.target.value)} required rows={4} type tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
            </div>
            <div className="flex flex-col ml-8">
                <label className="mb-3 text-sm leading-none text-gray-800">How do you plan on contributing?</label>
                <textarea value={contribute} onChange={(e) => setContribute(e.target.value)} required rows={4} type tabIndex={0} aria-label="Enter date of birth" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
                <label className="mb-3 text-sm leading-none text-gray-800">Describe how you overcome obstacles</label>
                <textarea value={obstacles} onChange={(e) => setObstacles(e.target.value)} required rows={4} type="name" tabIndex={0} aria-label="Enter programming languages" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
            </div>
        </div>
        <div className="flex flex-col mt-12 items-start">
                <label className="mb-3 text-sm leading-none text-gray-800">Your date of birth</label>
                <input value={dob} onChange={(e) => setDob(e.target.value)} required type='date' tabIndex={0} aria-label="Enter birthdate" className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200" />
        </div>
        <div className="flex flex-col mt-12 items-start">
                <label className="mb-3 text-sm leading-none text-gray-800">Where did you hear about us?</label>
                <Select required key={media} options={media} onChange={changeHandler} />
        </div>
        <div className="flex flex-col mt-12 items-start">
                <label className="mb-3 text-sm leading-none text-gray-800">When can you start?</label>
                <Select required key={timeline} options={timeline} onChange={changeHandler} />
        </div>
        <div className="mt-12">
            <div className="py-4 flex items-center">
                <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input type="checkbox" required tabIndex={0} aria-label="I agree with the terms of service" className="checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                    <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                        <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                    </div>
                </div>
                <p className="text-sm leading-none ml-2">
                    I have confirmed the content of my application
                </p>
            </div>
        </div>
        <button type="submit" role="button" aria-label="Next step" className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
            <a href='/blockchaindeveloper-4'><span className="text-sm font-medium text-center text-gray-800 capitalize">Next Step</span></a>
            <svg className="mt-1 ml-3" width={12} height={8} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
            </svg>
        </button>
        </form>
    </div>
    <style dangerouslySetInnerHTML={{ __html: "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      " }} />
    </div>
  )
}