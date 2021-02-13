import {  IonIcon } from '@ionic/react';
import React, { useState } from 'react';
import './SearchBar.css';
import { search } from 'ionicons/icons';

const Suggestion = (props:any) =>{
    return(
        <div onMouseLeave={()=>{
            //if (props.onClose) props.onClose();
        }} onMouseEnter={()=>{

        }} className="suggestion-search-suggestion">
            {props?.list?.map((suggests:any, key:any)=>(
                <div key={key} onClick={()=>{
                    if (props.onClick) props.onClick(suggests);
                }} className="suggestion-hover">{suggests}</div>
            ))}
        </div>
    )
}

export const SearchBar = (props:any)=>{
    const [showSearch, setShowSearch] = useState(false);
    const suggestPicker = ["test 1", "test 2", "test 3", "test 4"]
    return(
        <div className="suggestion-search-container">
            <div hidden={!showSearch} className="suggestion-search-input-container">
                <input className="suggestion-search-input suggestion-search-focus" placeholder="Search..."/>
                <IonIcon class="suggestion-search-button" onClick={()=>{
                    setShowSearch(false);
                }} icon={search}/>
            </div>
            <div hidden={showSearch} onClick={()=>{
                    setShowSearch(true);
            }} className="suggestion-open-search suggestion-search-click">
                <span style={{padding:"8px"}}>Search</span>
                <IonIcon class="suggestion-open-search-icon" icon={search}/>
            </div>
            <div hidden={!showSearch} className="suggestion-item-picker-container">
                {suggestPicker.map((pick, key)=>(
                    <span className="suggestion-item-picker" key={key}>{pick}</span>
                ))}
            </div>
            <Suggestion 
                list={[]}
                onClick={(value:any)=>{

                }}
                onClose={()=>{
                    
                }}
            />
        </div>
    )
}