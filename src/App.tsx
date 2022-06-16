import React, {useState} from 'react';
import './App.css';
import {CurrentMoneyType, NewComponent} from "./NewComponent";

export type FilerType= "All" | 'Dollars' | 'RUBLS'

function App() {
    const [money, setMoney] = useState<Array<CurrentMoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'}
    ])

    const [filter, setFilter] = useState<FilerType>('All')

    let currentMoney = money
    if(filter==='RUBLS'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }
    if(filter==='Dollars'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }


    const onClickFilterHandler=(nameButton:FilerType)=>{
        setFilter(nameButton)
    }


    return (
        <NewComponent onClickFilterHandler={onClickFilterHandler} currentMoney={currentMoney}/>
    );
}

export default App;
