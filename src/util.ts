import { loadImage } from "canvas";
import { join } from "path";

const root = join(__dirname, '..', 'images');

export const colors = {
    blue: '#7289DA',
    white: '#FFFFFF',
    lightgrey: '#99AAB5',
    grey: '#2C2F33',
    darkgrey: '#23272A',
    black: '#000000',
    online: '#2db85b',
    offline: '#666',
    dnd: '#cc3737',
    idle: '#dab026'
}

export type Options = {
    name: string
    tag: string
    description?: string
    status: keyof typeof images.status
    guilds: number
    votes: number
    library?: keyof typeof images.library | false,
    botList?: string
}

export const defaultOptions: Options = {
    name: '',
    tag: '',
    description: '',
    status: 'offline',
    guilds: 0,
    votes: 0,
    library: false,
}

export const images = {
    avatar: loadImage(join(root, 'plasma.png')),
    library: {
        'discord.js': loadImage(join(root, 'library', 'discord.js.png')),
        'discord.py': loadImage(join(root, 'library', 'discord.py.png')),
        'jda': loadImage(join(root, 'library', 'jda.png')),
        'discord4j': loadImage(join(root, 'library', 'discord4j.svg'))
    },
    icons: {
        server: loadImage(join(root, 'icons', 'server.svg')),
        vote: loadImage(join(root, 'icons', 'vote.svg')),
    },
    status: {
        dnd: loadImage(join(root, 'status', 'dnd.svg')),
        idle: loadImage(join(root, 'status', 'idle.svg')),
        online: loadImage(join(root, 'status', 'online.svg')),
        streaming: loadImage(join(root, 'status', 'streaming.svg')),
        offline: loadImage(join(root, 'status', 'offline.svg')),
    }
}

export function fancyCount(n: number) {
    if (n > 1000000)
        return Math.floor(n / 1000000) + 'M'

    if (n > 1000) {
        if (n < 10000) return (n / 1000).toFixed(1) + 'k'
        return Math.floor(n / 1000) + 'k'
    }

    return Math.floor(n) + '';
}