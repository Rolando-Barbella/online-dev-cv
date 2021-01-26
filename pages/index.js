import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { API } from 'aws-amplify';
import { listMainDetails } from '../graphql/queries'

export default function Home() {
  let [mainDetails, setListMainDetails] = useState(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchListMainDetailss()
  },[])
  
  async function fetchListMainDetailss() {
    const mainDetails = await API.graphql({
      query: listMainDetails
    });
    setIsLoading(false);
    setListMainDetails(mainDetails.data.listMainDetailss.items[0]);
  }
  if(isLoading || !mainDetails) {
    return <p>..Loading</p>
  }
  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <Head>
        <title>My online C.V</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-5 md:mt-5 md:col-span-2">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              My Online C.V
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {mainDetails.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Last Name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {mainDetails.lastName}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {mainDetails.email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Location
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {mainDetails.location}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {mainDetails.description}
                </dd>
               </div>
               <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <Link href={`/edit/${mainDetails.id}`}>
                  <div className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Edit
                  </div>
                </Link>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
