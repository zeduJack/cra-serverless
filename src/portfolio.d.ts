interface Image {
    src: string;
    w: number;
    h: number;
}

export interface Portfolio {
    header: string;
    items: {
        small: Image;
        medium: Image;
    }[]
}