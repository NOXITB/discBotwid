
import * as drawMultilineText from 'canvas-multiline-text';
import { createCanvas } from 'canvas';
import '@discord-card/core';
import { colors, Options, defaultOptions, images, fancyCount } from './util';


const size = 100;



function setupCard(w: number, h: number) {
    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext('2d');

    ctx.font = '85px \'Source Sans Pro\'';

    ctx.fillStyle = colors.darkgrey;
    ctx.roundRect(0, 0, w, h, size * .75).clip();
    ctx.fill();

    return ({
        canvas,
        ctx
    })
}

export async function smallCard(opts?: Options) {
    opts = Object.assign({ ...defaultOptions }, opts ?? { });

    const { canvas, ctx } = setupCard(8 * size, 5 * size),
        { width: w, height: h } = canvas;

    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // ctx.shadowOffsetY = 40;
    // ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    // ctx.shadowOffsetX = 40;

    //Avatar
    //
    ctx.save();
    ctx.translate(size * .5, size * 1.5);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(size * 1.5, size * 1.5, size * 1.5, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.fillStyle = colors.grey;
    ctx.fillRect(0, 0, size * 3, size * 3);
    ctx.drawImage(await images.avatar, 0, 0, size * 3, size * 3);
    ctx.restore();

    //Status
    ctx.save();
    ctx.translate(size * 3.05, size * 4.05);

    ctx.fillStyle = colors.darkgrey;
    ctx.beginPath();
    ctx.arc(0, 0, size * .4, 0, Math.PI * 2, true); ctx.closePath();
    ctx.fill();

    ctx.drawImage(await images.status[opts.status], -size * .3, -size * .3, size * .6, size * .6);
    ctx.restore();


    //User Text
    //
    ctx.fillStyle = colors.blue;
    ctx.save();
    ctx.translate(size * .5, size * .3 + size * .65);
    ctx.changeFontSize(size * .65 + 'px')
    ctx.fillText(opts.name, size * .1, 0, size * 5);

    ctx.fillStyle = colors.lightgrey;
    ctx.fillText('#', size * 5, 0);
    ctx.fillText(opts.tag, size * 5.5, 0, size * 1.5);
    ctx.restore();



    //Counters
    //
    ctx.save();
    ctx.translate(size * 4.5, size * 1.9);
    ctx.textAlign = 'left';
    ctx.fillStyle = colors.lightgrey;
    ctx.changeFontSize(size * .65 + 'px');

    ctx.drawImage(await images.icons.server, size * .125, size * .125, size * .75, size * .75);
    ctx.fillText(fancyCount(opts.guilds), size * 1.5, size * .7, size * 2.25);
    ctx.translate(0, size * 1.15);
    ctx.drawImage(await images.icons.vote, size * .125, size * .125, size * .75, size * .75);
    ctx.fillText(fancyCount(opts.votes), size * 1.5, size * .7, size * 2.25);
    ctx.restore();

    return canvas;
}

export async function longCard(opts?: Options) {
    opts = Object.assign({ ...defaultOptions }, opts ?? { });

    const { canvas, ctx } = setupCard(16 * size, 5 * size),
        { width: w, height: h } = canvas;

    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    // ctx.shadowOffsetY = 40;
    // ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    // ctx.shadowOffsetX = 40;

    //Avatar
    //
    ctx.save();
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(h / 2, h / 2, h * 0.3, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    ctx.fillStyle = colors.grey;
    ctx.fillRect(h * 0.2, h * 0.2, h * 0.6, h * 0.6);
    ctx.drawImage(await images.avatar, h * 0.2, h * 0.2, h * 0.6, h * 0.6);
    ctx.restore();

    //Status
    ctx.save();
    ctx.translate(size * 3.55, size * 3.55);

    ctx.fillStyle = colors.darkgrey;
    ctx.beginPath();
    ctx.arc(0, 0, size * .4, 0, Math.PI * 2, true); ctx.closePath();
    ctx.fill();

    ctx.drawImage(await images.status[opts.status], -size * .3, -size * .3, size * .6, size * .6);
    ctx.restore();




    //User Text
    //
    ctx.fillStyle = colors.blue;
    ctx.changeFontSize(h * .17 + 'px')
    ctx.fillText(opts.name, w * 0.3, h * 0.45, w * 0.425);
    ctx.fillStyle = colors.lightgrey;
    ctx.fillText('#', w * 0.3 + w * 0.4375, h * 0.45);
    ctx.fillText(opts.tag, w * 0.3 + w * 0.425 + w * 0.05, h * 0.45, w * .15625);

    //Botlist URL
    //
    //ctx.textBaseline = 'middle';
    if (opts.botList) {
        ctx.textAlign = 'center';
        ctx.fillStyle = colors.blue;
        ctx.roundRect(w * .5, -(w * 0.0625), w * .5, h * .4, w * 0.0625);
        ctx.fill();
        ctx.fillRect(w * 0.625, 0, w * .5, w * 0.0625);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.changeFontSize(h * 0.15 + 'px')
        ctx.fillText(opts.botList, w * .55 + h * 0.65, h * .15, w * .421875);
    }

    //Counters
    //
    ctx.textAlign = 'left';
    ctx.fillStyle = colors.lightgrey;
    ctx.drawImage(await images.icons.server, w * 0.3
        , h * 0.65, w * 0.0625, w * 0.0625);
    ctx.changeFontSize(h * 0.15 + 'px');
    ctx.fillText(fancyCount(opts.guilds), w * 0.25 + h * 0.45, h * 0.65 + h * .15, h * 0.45);

    ctx.drawImage(await images.icons.vote, w * 0.6, h * 0.65, w * 0.0625, w * 0.0625);
    ctx.fillText(fancyCount(opts.votes), w * 0.55 + h * 0.45, h * 0.65 + h * .15, h * 0.45);

    //Library
    //
    if (opts.library) {
        ctx.fillStyle = colors.grey;
        ctx.roundRect(w * .875, h * .6, h * .4, h * .4, h * .15).clip();
        ctx.fill();
        ctx.drawImage(await images.library[opts.library], w * .875, h * .6, h * .4, h * .4);
    }

    return canvas;
}

export async function bigCard(opts?: Options) {
    opts = Object.assign({ ...defaultOptions }, opts ?? { });

    const { canvas, ctx } = setupCard(16 * size, 10 * size),
        { width: w, height: h } = canvas;

    ctx.drawImage(await longCard({ ...opts, library: false }), 0, 0);

    //Big Text Box
    //
    ctx.fillStyle = colors.grey;
    ctx.roundRect(0, h / 2, w, h, size * .75).clip();
    ctx.fill();

    //Library
    //
    if (opts.library) {
        ctx.save();
        ctx.fillStyle = colors.darkgrey;
        ctx.roundRect(w * .875, h - h * .2, h * .2, h * .2, size * .75).clip();
        ctx.fill();
        ctx.drawImage(await images.library[opts.library], w * .875, h - h * .2, h * .2, h * .2);
        ctx.restore();
    }

    //Description
    //
    ctx.fillStyle = colors.lightgrey;
    ctx.changeFontSize(size * .5 + 'px');
    drawMultilineText(ctx,
        opts.description,
        {
            rect: {
                x: size * .5,
                y: (h / 2) + size * .5,
                width: w - h * .2,
                height: (h / 2) - size * .5
            },
            verbose: false,
            lineHeight: 1.4,
            minFontSize: size * .5,
            maxFontSize: size * .5
        }
    );

    return canvas;
}