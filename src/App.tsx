import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
const Button1Foo=(subscriber:string, age: number, address: string)=>{
    console.log(subscriber)
}
const Button2Foo=(subscriber:string, age?: number)=>{
    console.log(subscriber)
}

const Button3Foo=()=>{
    console.log('Im stupid button!')
}
    return (
        <div className="App">
            <Button name={'YoutubeChannel-1'} callBack={()=>Button1Foo('Vasya',21,'live in Minsk')}/>
            <Button name={'YoutubeChannel-12'} callBack={()=>Button2Foo('Ivan')}/>
            <Button name={'Stupid Button'} callBack={Button3Foo}/>
        </div>
    );
}

export default App;
