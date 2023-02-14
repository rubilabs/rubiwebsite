/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useState } from 'react'


const positions = [
  {
    id: 1,
    title: 'Blockchain Developer',
    type: 'Full-time',
    location: 'Takanawa',
    department: 'Development',
    closeDate: '2023-04-10',
    closeDateFull: 'April 10, 2023',
    href: '/blockchaindeveloper-1'
  },
  {
    id: 2,
    title: 'System Design',
    type: 'Full-time',
    location: 'Takanawa',
    department: 'Development',
    closeDate: '2023-04-10',
    closeDateFull: 'April 10, 2023',
  },
  {
    id: 3,
    title: 'Sales and Marketing',
    type: 'Full-time',
    location: 'Takanawa',
    department: 'Sales',
    closeDate: '2023-04-10',
    closeDateFull: 'April 10, 2023',
  },
  {
    id: 3,
    title: 'Business Development',
    type: 'Full-time',
    location: 'Takanawa',
    department: 'Strategy',
    closeDate: '2023-04-10',
    closeDateFull: 'April 10, 2023',
  },
]

export default function JobItem() {

  // const [positions, setPositions] = useState([])

  // const fetchPositions = async () => {
  //   const req = await firestore.collection('positions').orderBy('desc').get();
  //   req.docs.forEach(positions)
  // }

  // useEffect(() => {
  //   fetchPositions();
  // }, [])

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md p-12 -mt-8">
      <ul role="list" className="divide-y divide-gray-200">
        {positions.map((position) => (
          <li key={position.id}>
            <a href={position.href} className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-blue-600">{position.title}</p>
                  <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {position.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {position.department}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {position.location}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <p>
                      Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
