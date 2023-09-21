import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Draging from "./components/Draging";
import {DndProvider} from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import SignIn from "./components/auth/SignIn";
import Firebase from '../src/components/Firebase';



function App() {
  return (

      <DndProvider backend={HTML5Backend}>

          <Routes>
              <Route path="/" element={<SignIn />} />

              <Route path="draging" element={<Draging />} />
          </Routes>
          {/*{<SignIn />}*/}
          {/*{ <Draging/> }*/}
      </DndProvider>
    // <div className="App">
    //  <Routes>
    //  <Route path="/" element={< Draging/>} />
    //  </Routes>
    // </div>
  );
}

export default App;
