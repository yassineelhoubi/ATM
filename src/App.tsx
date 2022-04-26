import React from 'react';
import {AppRouter} from './routes/Router';


function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-cyan-300/50 h-5/6 w-5/6 rounded-3xl flex flex-col justify-center items-center">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
