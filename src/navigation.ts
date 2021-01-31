export interface SubNavItem {
    displayName: string;
    route: string;
    key: string;
}

export type NavItem = {
    route: string;
    displayName: string;
    items?: SubNavItem[]
}

export type Navigation = {
    portfolio: NavItem,
    angebot: NavItem,
    kontakt: NavItem
}

export const navigation: Navigation = {
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
export default navigation;