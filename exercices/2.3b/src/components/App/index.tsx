import './App.css';
import {PageTitle} from '../Title';
import {FooterText} from '../Footer';
import {People} from '../People';



export const App = () => {
  const title = "Welcome to My App";
  const people =[ 
    {
      name:"Alice",
      age:25
    },
    {
      name:"Bob",
      age:30
    },
    {
      name:"Charlie",
      age:35
    }

   ];
  
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      <People people={people}/>
      <FooterText text={footerText} /> 
    </div>
  );
};