import { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createSkill } from '../graphql/mutations';
import { onCreateSkill } from '../graphql/subscriptions';
import { v4 as uuid } from 'uuid';

const SkillsUpdate = ({ skills, id }) => {
  const [onChangeSkill, setOnChangeSkill] = useState('');
  const [newSkills, setNewSkills] = useState([]);

  useEffect(() => {
    setNewSkills(skills)
  },[])

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateSkill)).subscribe({
      next: (eventData) => {
        const newSkill = eventData.value.data.onCreateSkill;
        const id = uuid()

        setNewSkills([...skills, { id, name: newSkill.name}])
      },
      error: error => console.error(error)
    })
    return () => subscription.unsubscribe()
  }, [])
  
  const addSkill = async() => {
    await API.graphql({
      query: createSkill,
      variables: { 
        input: { skillID: id, name: onChangeSkill }
      }
    }); 
    setOnChangeSkill('');
  }
  return (
    <div className="shadow sm:rounded-md sm:overflow-hidden relative py-3 sm:max-w-xl sm:mx-auto mt-4">
      <div className="mt-1 px-4 py-5 space-y-6 sm:p-6">
        <h2 className="text-lg">Skills</h2>
        <input 
          type="text" 
          name="skill"
          value={onChangeSkill}
          onChange = { (event) => setOnChangeSkill(event.target.value) }
          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" 
        />
      <div className="flex flex-wrap -m-2 mb-4">
        {newSkills.map(skill => (
          <div
            key={skill.id}
            className="bg-green-400 px-10 py-2 text-white text-center rounded-full mb-3 mr-2"
          >
            {skill.name}
          </div>
          ))
        }
      </div>
      <div>
        <button 
          type="submit"
          onClick={addSkill}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          Add skill
        </button>
        </div>
      </div>
    </div>
  )
}

export default SkillsUpdate;