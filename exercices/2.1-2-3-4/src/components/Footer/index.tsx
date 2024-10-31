import './Footer.css';
export interface FooterProps {
    children: React.ReactNode;
}

export const Footer = (props: FooterProps) => {
    return (
        <footer>
            <p>{props.children}</p>
        </footer>
    );
};