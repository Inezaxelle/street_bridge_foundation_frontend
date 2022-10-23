import React, { useState } from 'react';
import { User } from './@types/types';
import UserCard from './components/UserCard';
import data from "./users.json";
function App() {
  const [users,setUsers]=useState<User[]|null>(data.users)
  return (
    <div className="flex flex-col items-center justify-center h-screen px-32 space-y-12">
      <h1 className='text-xl font-bold'>Our Customers</h1>
     <div className='grid grid-cols-3 gap-12 w-full px-12 py-12'>
        {
          users?.map((user)=>(
            <UserCard key={user.name} {...user}/>
          ))
        }
     </div>
    </div>
  );
}

export default App;
