
import './App.css';
import { useState } from "react";
import Result from './component/Result';
import UserInput from './component/UserInput';
import Header from './component/header';

function App() {

  const [userinput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChange(inputIdentifier, newvalue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newvalue

      }
    });


  }
  const validInput = userinput.duration >= 1;

  return (<>
    <Header />
    <UserInput OnChange={handleChange} userinput={userinput} />
    {validInput && <Result input={userinput} />}
    {!validInput && <p className='center'>Please Enter Duration 1 or greater NUmber</p>}



  </>

  );
}

export default App;

// import React from 'react';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// const App = ({ events, onDragEnd }) => {
//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="events">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {events.map((event, index) => (
//               <Draggable key={event.id} draggableId={event.id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     {event.title}
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>  
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default App;
