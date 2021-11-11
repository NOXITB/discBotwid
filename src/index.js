"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCard = void 0;
const card_1 = require("./card");
const util_1 = require("./util");
async function generateCard(size, opts) {
    if (!(typeof opts.library === 'string'
        && Object.keys(util_1.images.library).includes(opts.library)))
        throw new Error(`Invalid library, ${opts.library} is not supported`);
    if (!['dnd', 'idle', 'online', 'streaming', 'offline'].includes(opts.status))
        throw new Error(`${opts.status}, isn't a valid status`);
    switch (size) {
        case 'small': return await (0, card_1.smallCard)(opts);
        case 'long': return await (0, card_1.longCard)(opts);
        case 'big': return await (0, card_1.bigCard)(opts);
        default: throw new Error('Invalid Card size');
    }
}
exports.generateCard = generateCard;
//# sourceMappingURL=index.js.map