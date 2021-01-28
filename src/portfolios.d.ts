declare namespace portfolios {
    type dimensionsType = {
        src: string,
        w: number,
        h: number
    }
    
    type portfolioItemType = {
        small: dimensionsType,
        medium: dimensionsType
    }
    
    type portfolioType = {
        header: string,
        items: portfolioItemType[]
    }
}

export = portfolios;