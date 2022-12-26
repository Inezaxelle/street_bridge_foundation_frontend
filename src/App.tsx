import React, { useState } from 'react';
import { User } from './@types/types';
import data from "./users.json";
import Sbs from './components/Sbf';
function App() {
  const [users, setUsers] = useState<User[] | null>(data.users)
  return (
    <div>
      <Sbs />
    </div>
  );
}

export default App;
