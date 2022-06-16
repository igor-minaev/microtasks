import React from "react";
import {FilerType} from "./App";

export type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

type NewComponentType={
    onClickFilterHandler:(nameButton:FilerType)=>void
    currentMoney: Array<CurrentMoneyType>
}

export const NewComponent=(props:NewComponentType)=>{
    return(
        <>
            <ul>
                {props.currentMoney.map((t, index) => {
                    return (
                        <li key={index}>
                            <span>{t.banknots}</span>
                            <span> {t.value}</span>
                            <span> {t.number}</span>
                        </li>

                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=> props.onClickFilterHandler('All')}>All</button>
                <button onClick={()=>props.onClickFilterHandler('Dollars')}>Dollars</button>
                <button onClick={()=>props.onClickFilterHandler('RUBLS')}>RUBLS</button>
            </div>
        </>
    )
}