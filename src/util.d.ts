export declare const colors: {
    blue: string;
    white: string;
    lightgrey: string;
    grey: string;
    darkgrey: string;
    black: string;
    online: string;
    offline: string;
    dnd: string;
    idle: string;
};
export declare type Options = {
    name: string;
    tag: string;
    description?: string;
    status: keyof typeof images.status;
    guilds: number;
    votes: number;
    library?: keyof typeof images.library | false;
    botList?: string;
};
export declare const defaultOptions: Options;
export declare const images: {
    avatar: Promise<import("canvas").Image>;
    library: {
        'discord.js': Promise<import("canvas").Image>;
        'discord.py': Promise<import("canvas").Image>;
        jda: Promise<import("canvas").Image>;
        discord4j: Promise<import("canvas").Image>;
    };
    icons: {
        server: Promise<import("canvas").Image>;
        vote: Promise<import("canvas").Image>;
    };
    status: {
        dnd: Promise<import("canvas").Image>;
        idle: Promise<import("canvas").Image>;
        online: Promise<import("canvas").Image>;
        streaming: Promise<import("canvas").Image>;
        offline: Promise<import("canvas").Image>;
    };
};
export declare function fancyCount(n: number): string;
//# sourceMappingURL=util.d.ts.map