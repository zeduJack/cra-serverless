type itemsType = {
    [name: string]: {
        route: string,
        displayName: string,
        items?: object[]
    }
}

const items: itemsType = {
    "portfolio": {
        "route": "/portfolio",
        "displayName": "Portfolio"
    },
    "angebot": {
        "route": "/angebot",
        "displayName": "Angebot",
        "items": []
    },
    "kontakt": {
        "route": "/kontakt",
        "displayName": "Kontakt"
    }
}

export default items;