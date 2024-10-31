export interface FooterTextProps { 
    text: string;
}

export const FooterText= ( {text} : FooterTextProps) => { 
    return ( 
        <footer>{text}</footer>
    );
}