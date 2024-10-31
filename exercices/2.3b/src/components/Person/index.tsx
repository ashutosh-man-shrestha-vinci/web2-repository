export interface Person { 
    name: string;
    age: number;
}

export const Person= ( {name,age} : Person) => { 
    return ( 
     <div>
        <h2>{name}</h2>
         <p>Age : {age}</p>
     </div>
    );
}