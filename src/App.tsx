import React from 'react';
import './App.css';

function App() {
    // const myFirstSubscriber=(event: MouseEvent<HTMLButtonElement)=>{
    //     console.log('Hello Im VASYA')
    // }
    // const mySecondSubscriber=()=>{
    //     console.log('Hello Im Ivan')
    // }

    const onClickHandler=(name: string)=>{
        console.log(name)
    }


    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello')}}>MyYoutube channel-1</button>*/}
              <button onClick={()=>onClickHandler('VASYA')}>MyYoutube channel-1</button>
              <button onClick={()=>onClickHandler('IVAN')}>MyYoutube channel-2</button>


        </div>

    );
}

export default App;
