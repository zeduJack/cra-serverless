type AngebotItem = {
    title: string;
    bullets: string[];
    price: string;
}

export type Angebot = {
    name: string,
    title: string;
    navTitle: string;
    items: AngebotItem[]
}

export const angebote: Angebot[] = [
    {
        "name": "portrait",
        "title": "Angebot Portrait",
        "navTitle": "Portrait",
        "items": [
            {
                "title": "Brautpaar-Shooting",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 2 Stunden Shooting",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 2 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 30 km ist inklusive"
                ],
                "price": "600.- CHF"
            }
        ]
    },
    {
        "name": "hochzeit",
        "title": "Angebot Hochzeitsfotografie",
        "navTitle": "Hochzeit",
        "items": [
            {
                "title": "Brautpaar-Shooting",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 2 Stunden Shooting",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 2 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 30 km ist inklusive"
                ],
                "price": "600.- CHF"
            },
            {
                "title": "Ziviltrauung",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 3 Stunden Hochzeitsreportage (Zivil-Trauung / Apéro) inkl. Brautpaar-Shooting",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 3 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 30 km ist inklusive"
                ],
                "price": "1000.- CHF"
            },
            {
                "title": "5 Stunden Reportage",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 5 Std. Hochzeitsreportage (Kirche / Apéro) inkl. Brautpaar-Portraitshooting",
                    "2 Fotografen (2. Fotograf auf meine Kosten)",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 4 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 50 km ist inklusive"
                ],
                "price": "2100.- CHF"
            },
            {
                "title": "8 Stunden Reportage",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 8 Std. Hochzeitsreportage (Kirche / Apéro) inkl. Brautpaar-Portraitshooting",
                    "2 Fotografen (2. Fotograf auf meine Kosten)",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 7 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 50 km ist inklusive"
                ],
                "price": "3000.- CHF"
            },
            {
                "title": "12 Stunden Reportage",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 12 Std. Hochzeitsreportage (Kirche / Apéro) inkl. Brautpaar-Portraitshooting",
                    "2 Fotografen (2. Fotograf auf meine Kosten)",
                    "Bildbearbeitung",
                    "Fotoalbum A4",
                    "Fotos per Download Link innerhalb von 7 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 50 km ist inklusive"
                ],
                "price": "4200.- CHF"
            }
        ]
    },
    {
        "name": "event",
        "title": "Angebot Event",
        "navTitle": "Event",
        "items": [
            {
                "title": "Brautpaar-Shooting",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 2 Stunden Shooting",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 2 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 30 km ist inklusive"
                ],
                "price": "600.- CHF"
            }
        ]
    },
    {
        "name": "konzert",
        "title": "Angebot Konzert",
        "navTitle": "Konzert",
        "items": [
            {
                "title": "Brautpaar-Shooting",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 2 Stunden Shooting",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 2 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 30 km ist inklusive"
                ],
                "price": "600.- CHF"
            }
        ]
    },
    {
        "name": "familie",
        "title": "Familienangebot",
        "navTitle": "Familie",
        "items": [
            {
                "title": "Brautpaar-Shooting",
                "bullets": [
                    "Persönliches Kennenlern- und Beratungsgespräch",
                    "Bis zu 2 Stunden Shooting",
                    "Bildbearbeitung",
                    "Fotos per Download Link innerhalb von 2 Tagen verfügbar",
                    "Alle Fotos werden bei mir 1 Jahr lang archiviert",
                    "Anfarht im Umkreis von 30 km ist inklusive"
                ],
                "price": "600.- CHF"
            }
        ]
    }
]

export default angebote;