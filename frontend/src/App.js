

import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Signup from './user/Signup';
import Signin from './user/Signin'; 
import Dashboard from "./events/Dashboard";
import Createevent from './events/Createevent';
import Likedevents from './events/Likedevents';
import Myevents from './events/Myevents';

function App() {
  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element={<Dashboard />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/signin" element={<Signin />} />
           <Route path="/create/event" element={<Createevent />} />
           <Route path="/likes" element={<Likedevents />} />
           <Route path="/myevents" element={<Myevents />} />
            
       </Routes>
    </BrowserRouter>
  );
}

export default App;
