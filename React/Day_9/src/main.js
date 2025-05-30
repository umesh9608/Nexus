//task github se 10 user profile fetch krna hai or display krna hai(photo,name,link)
//use to take profile https://api.github.com/users?per_page=${10}
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import Body from './Component/Body';

function GithubProfile(){
    //header
    //body :show 10 card
 return(
    <>
    <Header/>
    <Body/>
    </>
 )
}

ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);