import { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { useRouter } from 'next/router';
import { getMainDetails } from '../../graphql/queries';
import { updateMainDetails } from '../../graphql/mutations';
import SkillsUpdate from '../../components/skillsUpdate';

const UpdateDetails = ({ mainDetails }) => {
  const router = useRouter();
  if (router.isFallback || !mainDetails) {
    return <div>Loading...</div>
  }
  const [onChangeDetail, setOnChangeDetail] = useState({ 
    name: '',  
    lastName: '' , 
    email: '', 
    location: '',
    description: '',
    skills: { items: []},
  });
  
  useEffect(() => {
    setOnChangeDetail(mainDetails);
  },[]);
 
  const handleInpuChange = (event,keyName)  =>  {
    event.persist();
    setOnChangeDetail( (onChangeDetail)  =>  {
      return  { ...onChangeDetail,  [ keyName ] : event.target.value }
    });
  }
  
  const updateDetails = async () => {
    delete onChangeDetail.skills
    await API.graphql({
      query: updateMainDetails,
      variables: { input: onChangeDetail },
    })
    router.push(`/`);
  }
  return (
    <>
      <div className="shadow sm:rounded-md sm:overflow-hidden relative py-3 sm:max-w-xl sm:mx-auto mt-4">
        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
          <h2 className="text-lg">Main Details</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div className="mt-1">
              <input 
                type="text" 
                name="name"
                value={onChangeDetail.name}
                onChange = { (event) => handleInpuChange(event ,'name') }
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="last name" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <div className="mt-1">
              <input 
                type="text" 
                name="last name" 
                value={onChangeDetail.lastName}
                onChange = { (event) => handleInpuChange(event ,'lastName') }
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input 
                type="email" 
                name="email" 
                value={onChangeDetail.email}
                onChange = { (event) => handleInpuChange(event ,'email') }
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="mt-1">
              <input 
                type="text" 
                name="location"
                value={onChangeDetail.location}
                onChange = { (event) => handleInpuChange(event ,'location') }
                className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <div className="mt-1">
              <textarea 
                name="description" 
                rows="3" 
                value={onChangeDetail.description}
                onChange = { (event) => handleInpuChange(event ,'description') }
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" 
                placeholder="Some words about yourself"
              />
            </div>
          </div>
        </div>
      </div>
      <SkillsUpdate 
        skills={mainDetails.skills.items}
        id={mainDetails.id} 
      />
      <div className="text-center mt-1 px-4 py-5 space-y-6 sm:p-6">
        <button 
          type="submit"
          onClick={updateDetails}
          className="inline-flex justify-center py-2 px-20 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update C.V
        </button>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      '/edit/id',
      { params: { id: '' } },
    ],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  let mainDetails = await API.graphql({
    query: getMainDetails,
    variables: { id }
  });
  return {
    props: {
      mainDetails: mainDetails.data.getMainDetails
    }
  }
}

export default UpdateDetails