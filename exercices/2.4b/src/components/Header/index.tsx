import './Header.css';
export interface Header {
logo : string;
children : React.ReactNode;
}


export const Header = (props : Header) => {
return (
   <header>
     <img src={props.logo} alt="" />
     <h1>{props.children}</h1>
   </header>
    
)
  

}