import React from 'react';
import firebase from './firebaseAuth'
import { withRouter } from 'react-router-dom'



function Home(props) {
    if(!firebase.getCurrentUserName()) {
        console.log(firebase.getCurrentUserName)
		alert('Please login first')
		props.history.replace('/login')
		return null
	}
    return  <div className="home-page">
                <h1>hello {firebase.getCurrentUserName()}</h1>
                <button onClick={logout}>Log out</button>
            </div>
            
            async function logout(){
                await firebase.logout()
                props.history.push('/signup')
            }

}



export default withRouter(Home)