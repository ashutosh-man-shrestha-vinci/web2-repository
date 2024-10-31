import './App.css'
import {User} from "../User";
import {Header} from "../Header";
import {Footer} from "../Footer";



export const App=() =>{

  return (
    <>
      <Header logo="https://images.unsplash.com/photo-1729432536160-d4ba057b61d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"  children="Bienvenue !" ></Header>
      <User nom="Ashutosh" age={20} enLigne= {false} ></User>
      <User nom="Man" age={19} enLigne= {true} ></User>
      <User nom="Shrestha" age={19} enLigne= {false} ></User>

      <Footer children="bye bye"></Footer>
    </>
  )
}