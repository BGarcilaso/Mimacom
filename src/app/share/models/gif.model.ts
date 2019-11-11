export class Gif {
    id: string;
    url: string;
    images: Images;
    title: string;
    showDetail = false;
    user: User;
    slug: string;
    favourite = false;
}

export class Images {
    downsized: Image;
    original: Image;
    preview_gif: Image
}

export class Image {
    height: String;
    size: String;
    url: String;
    width: String;
}

export class User {
    username: string;
    is_verified: boolean;
    display_name: string;
    avatar_url: string;
    profile_url: string;
}
