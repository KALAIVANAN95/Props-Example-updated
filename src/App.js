import React from 'react';
import './App.css';
import Flowers from './components/flowers';
import FlowersData from './components/flowersData';

function App() {
  return (
   <>
   <h1>Flowers Data</h1>
   <div className="container">

    {
      FlowersData.map((datas)=>{
        return(
          <>
          
          <Flowers title={datas.title}
          images={datas.images}
          des={datas.des}
          btns={datas.btns}
          />
          
          </>
        )
      })
    }
    
   </div>
   
   
   </>
  );
}

export default App;
