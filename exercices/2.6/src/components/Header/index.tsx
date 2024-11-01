import './Header.css';

export interface HeaderProps {
    logo: string;
    children: React.ReactNode;}

export const Header = (props: HeaderProps) => {
    return (
        <header> 
            <img src={props.logo} alt="" />
            <h1>{props.children}</h1>
        </header>
    );
};