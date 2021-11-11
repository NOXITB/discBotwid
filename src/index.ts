import { smallCard, longCard, bigCard } from './card';
import { Options, images } from './util';
export { Options } from './util';


export async function generateCard(size: 'small' | 'long' | 'big', opts: Options) {
    if (!(
        typeof opts.library === 'string'
        && Object.keys(images.library).includes(opts.library))
    ) throw new Error(`Invalid library, ${opts.library} is not supported`);

    if (!['dnd', 'idle', 'online', 'streaming', 'offline'].includes(opts.status))
        throw new Error(`${opts.status}, isn't a valid status`);




    switch (size) {
        case 'small': return await smallCard(opts);
        case 'long': return await longCard(opts);
        case 'big': return await bigCard(opts);
        default: throw new Error('Invalid Card size');
    }
}