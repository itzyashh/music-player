export type TrackAPI = {
    name: string;
    url: string;
    date: string;
    id: string;
    genre: string;
    artists: Artist[];
    coverUrl: string;
    previewUrl: string;
    tags: Tag[];
    download: {
        regular: string;
    };
}

export type Track = {
    id: string;
    url: string;
    title: string;
    artist: Artist;
    artwork: string;
    isFavorite: boolean;
}

export type Artist = {
    name: string;
    url: string;
}

export type Tag = {
    name: string;
    color: Color;
    mood: number;
}

export type Color = {
    r: number;
    g: number;
    b: number;
}
