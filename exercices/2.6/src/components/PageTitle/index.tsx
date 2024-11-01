
export interface PageTitleProps { 
    title: string;
}

export const PageTitle= ( {title} : PageTitleProps) => { 
    return ( 
        <h1>
            {title}
        </h1>
    );
}