import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [color, setColor] = useState('bg-blue-500');

  return (
    <div className={`h-screen w-screen flex    items-center  justify-around ${color} `}>
      
     
        <button 
          className="px-4 py-2 bg-red-500 text-black rounded"
          onClick={() => setColor('bg-red-500')}
        >
          RED
       </button>

        <button 
          className="px-4 py-2 bg-green-500 text-black rounded"
          onClick={() => setColor('bg-green-500')}
        >
          GREEN
        </button>

        <button 
          className="px-4 py-2 bg-blue-500 text-black rounded"
          onClick={() => setColor('bg-blue-500')}
        >
          BLUE
        </button>
     

    </div>
  );
}

export default App;
