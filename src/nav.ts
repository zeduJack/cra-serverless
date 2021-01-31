export interface SubNavItem {
    displayName: string;
    route: string;
    key: string;
}

export interface NavItem {
    name: string;
    route: string;
    displayName: string;
    items?: SubNavItem[]
}

export const navigation: NavItem[] = [{
    "name": "portfolio",
    "route": "/portfolio",
    "displayName": "Portfolio"
}, {
    "name": "angebot",
    "route": "/angebot",
    "displayName": "Angebot",
    "items": []
}, {
    "name": "kontakt",
    "route": "/kontakt",
    "displayName": "Kontakt"
}]

export default navigation;