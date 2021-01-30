export interface App{
    identifier: string;
    ammount: string;
    date: string;
}

export interface Page{
    title:string;
    url:string;
}

export interface NavigationState{
    currentPage: Page;
    error:any
}
