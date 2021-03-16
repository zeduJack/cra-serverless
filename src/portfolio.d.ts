interface Image {
    src: string;
    w: number;
    h: number;
}

export interface PortfolioItem {
    small: Image;
    medium: Image;
}

export interface Portfolio {
    route: string;
    header: string;
    items: PortfolioItem[]
}