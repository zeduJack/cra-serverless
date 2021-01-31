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
    header: string;
    items: PortfolioItem[]
}