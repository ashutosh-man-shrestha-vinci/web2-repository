import './User.css';

export interface UserProps {
    nom: string;
    age: number;
    enLigne: boolean;
}

export const User = ({ nom, age, enLigne }: UserProps) => {
    return (
        <div className='container'> 
            <div className='rounded-box'>
            {enLigne ? (
                <div className="online">
                <h1>{nom}</h1>
                <p>{age}</p>
                En ligne
                </div>
            ) : (
                <div className="offline">
                    <h1>{nom}</h1>
                    <p>{age}</p>
                    Hors ligne
                </div>
            )}
        </div>

        </div>
        
    );
};