"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fancyCount = exports.images = exports.defaultOptions = exports.colors = void 0;
const canvas_1 = require("canvas");
const path_1 = require("path");
const root = (0, path_1.join)(__dirname, '..', 'images');
exports.colors = {
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
};
exports.defaultOptions = {
    name: '',
    tag: '',
    description: '',
    status: 'offline',
    guilds: 0,
    votes: 0,
    library: false,
};
exports.images = {
    avatar: (0, canvas_1.loadImage)((0, path_1.join)(root, 'plasma.png')),
    library: {
        'discord.js': (0, canvas_1.loadImage)((0, path_1.join)(root, 'library', 'discord.js.png')),
        'discord.py': (0, canvas_1.loadImage)((0, path_1.join)(root, 'library', 'discord.py.png')),
        'jda': (0, canvas_1.loadImage)((0, path_1.join)(root, 'library', 'jda.png')),
        'discord4j': (0, canvas_1.loadImage)((0, path_1.join)(root, 'library', 'discord4j.svg'))
    },
    icons: {
        server: (0, canvas_1.loadImage)((0, path_1.join)(root, 'icons', 'server.svg')),
        vote: (0, canvas_1.loadImage)((0, path_1.join)(root, 'icons', 'vote.svg')),
    },
    status: {
        dnd: (0, canvas_1.loadImage)((0, path_1.join)(root, 'status', 'dnd.svg')),
        idle: (0, canvas_1.loadImage)((0, path_1.join)(root, 'status', 'idle.svg')),
        online: (0, canvas_1.loadImage)((0, path_1.join)(root, 'status', 'online.svg')),
        streaming: (0, canvas_1.loadImage)((0, path_1.join)(root, 'status', 'streaming.svg')),
        offline: (0, canvas_1.loadImage)((0, path_1.join)(root, 'status', 'offline.svg')),
    }
};
function fancyCount(n) {
    if (n > 1000000)
        return Math.floor(n / 1000000) + 'M';
    if (n > 1000) {
        if (n < 10000)
            return (n / 1000).toFixed(1) + 'k';
        return Math.floor(n / 1000) + 'k';
    }
    return Math.floor(n) + '';
}
exports.fancyCount = fancyCount;
//# sourceMappingURL=util.js.map