import * as constants from "./constants";
import { WIDTH, HEIGHT } from "./constants";

const FONT = new Uint8Array([ 0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xc7,0xc7,0xc7,0xcf,0xcf,0xff,0xcf,0xff,0x93,0x93,0x93,0xff,0xff,0xff,0xff,0xff,0x93,0x01,0x93,0x93,0x93,0x01,0x93,0xff,0xef,0x83,0x2f,0x83,0xe9,0x03,0xef,0xff,0x9d,0x5b,0x37,0xef,0xd9,0xb5,0x73,0xff,0x8f,0x27,0x27,0x8f,0x25,0x33,0x81,0xff,0xcf,0xcf,0xcf,0xff,0xff,0xff,0xff,0xff,0xf3,0xe7,0xcf,0xcf,0xcf,0xe7,0xf3,0xff,0x9f,0xcf,0xe7,0xe7,0xe7,0xcf,0x9f,0xff,0xff,0x93,0xc7,0x01,0xc7,0x93,0xff,0xff,0xff,0xe7,0xe7,0x81,0xe7,0xe7,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xcf,0xcf,0x9f,0xff,0xff,0xff,0x81,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xcf,0xcf,0xff,0xfd,0xfb,0xf7,0xef,0xdf,0xbf,0x7f,0xff,0xc7,0xb3,0x39,0x39,0x39,0x9b,0xc7,0xff,0xe7,0xc7,0xe7,0xe7,0xe7,0xe7,0x81,0xff,0x83,0x39,0xf1,0xc3,0x87,0x1f,0x01,0xff,0x81,0xf3,0xe7,0xc3,0xf9,0x39,0x83,0xff,0xe3,0xc3,0x93,0x33,0x01,0xf3,0xf3,0xff,0x03,0x3f,0x03,0xf9,0xf9,0x39,0x83,0xff,0xc3,0x9f,0x3f,0x03,0x39,0x39,0x83,0xff,0x01,0x39,0xf3,0xe7,0xcf,0xcf,0xcf,0xff,0x87,0x3b,0x1b,0x87,0x61,0x79,0x83,0xff,0x83,0x39,0x39,0x81,0xf9,0xf3,0x87,0xff,0xff,0xcf,0xcf,0xff,0xcf,0xcf,0xff,0xff,0xff,0xcf,0xcf,0xff,0xcf,0xcf,0x9f,0xff,0xf3,0xe7,0xcf,0x9f,0xcf,0xe7,0xf3,0xff,0xff,0xff,0x01,0xff,0x01,0xff,0xff,0xff,0x9f,0xcf,0xe7,0xf3,0xe7,0xcf,0x9f,0xff,0x83,0x01,0x39,0xf3,0xc7,0xff,0xc7,0xff,0x83,0x7d,0x45,0x55,0x41,0x7f,0x83,0xff,0xc7,0x93,0x39,0x39,0x01,0x39,0x39,0xff,0x03,0x39,0x39,0x03,0x39,0x39,0x03,0xff,0xc3,0x99,0x3f,0x3f,0x3f,0x99,0xc3,0xff,0x07,0x33,0x39,0x39,0x39,0x33,0x07,0xff,0x01,0x3f,0x3f,0x03,0x3f,0x3f,0x01,0xff,0x01,0x3f,0x3f,0x03,0x3f,0x3f,0x3f,0xff,0xc1,0x9f,0x3f,0x31,0x39,0x99,0xc1,0xff,0x39,0x39,0x39,0x01,0x39,0x39,0x39,0xff,0x81,0xe7,0xe7,0xe7,0xe7,0xe7,0x81,0xff,0xf9,0xf9,0xf9,0xf9,0xf9,0x39,0x83,0xff,0x39,0x33,0x27,0x0f,0x07,0x23,0x31,0xff,0x9f,0x9f,0x9f,0x9f,0x9f,0x9f,0x81,0xff,0x39,0x11,0x01,0x01,0x29,0x39,0x39,0xff,0x39,0x19,0x09,0x01,0x21,0x31,0x39,0xff,0x83,0x39,0x39,0x39,0x39,0x39,0x83,0xff,0x03,0x39,0x39,0x39,0x03,0x3f,0x3f,0xff,0x83,0x39,0x39,0x39,0x21,0x33,0x85,0xff,0x03,0x39,0x39,0x31,0x07,0x23,0x31,0xff,0x87,0x33,0x3f,0x83,0xf9,0x39,0x83,0xff,0x81,0xe7,0xe7,0xe7,0xe7,0xe7,0xe7,0xff,0x39,0x39,0x39,0x39,0x39,0x39,0x83,0xff,0x39,0x39,0x39,0x11,0x83,0xc7,0xef,0xff,0x39,0x39,0x29,0x01,0x01,0x11,0x39,0xff,0x39,0x11,0x83,0xc7,0x83,0x11,0x39,0xff,0x99,0x99,0x99,0xc3,0xe7,0xe7,0xe7,0xff,0x01,0xf1,0xe3,0xc7,0x8f,0x1f,0x01,0xff,0xc3,0xcf,0xcf,0xcf,0xcf,0xcf,0xc3,0xff,0x7f,0xbf,0xdf,0xef,0xf7,0xfb,0xfd,0xff,0x87,0xe7,0xe7,0xe7,0xe7,0xe7,0x87,0xff,0xc7,0x93,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x01,0xef,0xf7,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x83,0xf9,0x81,0x39,0x81,0xff,0x3f,0x3f,0x03,0x39,0x39,0x39,0x83,0xff,0xff,0xff,0x81,0x3f,0x3f,0x3f,0x81,0xff,0xf9,0xf9,0x81,0x39,0x39,0x39,0x81,0xff,0xff,0xff,0x83,0x39,0x01,0x3f,0x83,0xff,0xf1,0xe7,0x81,0xe7,0xe7,0xe7,0xe7,0xff,0xff,0xff,0x81,0x39,0x39,0x81,0xf9,0x83,0x3f,0x3f,0x03,0x39,0x39,0x39,0x39,0xff,0xe7,0xff,0xc7,0xe7,0xe7,0xe7,0x81,0xff,0xf3,0xff,0xe3,0xf3,0xf3,0xf3,0xf3,0x87,0x3f,0x3f,0x31,0x03,0x07,0x23,0x31,0xff,0xc7,0xe7,0xe7,0xe7,0xe7,0xe7,0x81,0xff,0xff,0xff,0x03,0x49,0x49,0x49,0x49,0xff,0xff,0xff,0x03,0x39,0x39,0x39,0x39,0xff,0xff,0xff,0x83,0x39,0x39,0x39,0x83,0xff,0xff,0xff,0x03,0x39,0x39,0x03,0x3f,0x3f,0xff,0xff,0x81,0x39,0x39,0x81,0xf9,0xf9,0xff,0xff,0x91,0x8f,0x9f,0x9f,0x9f,0xff,0xff,0xff,0x83,0x3f,0x83,0xf9,0x03,0xff,0xe7,0xe7,0x81,0xe7,0xe7,0xe7,0xe7,0xff,0xff,0xff,0x39,0x39,0x39,0x39,0x81,0xff,0xff,0xff,0x99,0x99,0x99,0xc3,0xe7,0xff,0xff,0xff,0x49,0x49,0x49,0x49,0x81,0xff,0xff,0xff,0x39,0x01,0xc7,0x01,0x39,0xff,0xff,0xff,0x39,0x39,0x39,0x81,0xf9,0x83,0xff,0xff,0x01,0xe3,0xc7,0x8f,0x01,0xff,0xf3,0xe7,0xe7,0xcf,0xe7,0xe7,0xf3,0xff,0xe7,0xe7,0xe7,0xe7,0xe7,0xe7,0xe7,0xff,0x9f,0xcf,0xcf,0xe7,0xcf,0xcf,0x9f,0xff,0xff,0xff,0x8f,0x45,0xe3,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x93,0x93,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xe7,0xff,0xe7,0xe7,0xc7,0xc7,0xc7,0xff,0xef,0x83,0x29,0x2f,0x29,0x83,0xef,0xff,0xc3,0x99,0x9f,0x03,0x9f,0x9f,0x01,0xff,0xff,0xa5,0xdb,0xdb,0xdb,0xa5,0xff,0xff,0x99,0x99,0xc3,0x81,0xe7,0x81,0xe7,0xff,0xe7,0xe7,0xe7,0xff,0xe7,0xe7,0xe7,0xff,0xc3,0x99,0x87,0xdb,0xe1,0x99,0xc3,0xff,0x93,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xc3,0xbd,0x66,0x5e,0x5e,0x66,0xbd,0xc3,0x87,0xc3,0x93,0xc3,0xff,0xff,0xff,0xff,0xff,0xc9,0x93,0x27,0x93,0xc9,0xff,0xff,0xff,0xff,0x81,0xf9,0xf9,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xc3,0xbd,0x46,0x5a,0x46,0x5a,0xbd,0xc3,0x83,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xef,0xd7,0xef,0xff,0xff,0xff,0xff,0xff,0xe7,0xe7,0x81,0xe7,0xe7,0xff,0x81,0xff,0xc7,0xf3,0xe7,0xc3,0xff,0xff,0xff,0xff,0xc3,0xe7,0xf3,0xc7,0xff,0xff,0xff,0xff,0xf7,0xef,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0x33,0x33,0x33,0x33,0x09,0x3f,0xc1,0x95,0xb5,0x95,0xc1,0xf5,0xf5,0xff,0xff,0xff,0xff,0xcf,0xcf,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xff,0xf7,0xcf,0xe7,0xc7,0xe7,0xc3,0xff,0xff,0xff,0xff,0xc7,0x93,0x93,0xc7,0xff,0xff,0xff,0xff,0xff,0x27,0x93,0xc9,0x93,0x27,0xff,0xff,0xbd,0x3b,0xb7,0xad,0xd9,0xb1,0x7d,0xff,0xbd,0x3b,0xb7,0xa9,0xdd,0xbb,0x71,0xff,0x1d,0xbb,0xd7,0x2d,0xd9,0xb1,0x7d,0xff,0xc7,0xff,0xc7,0x9f,0x39,0x01,0x83,0xff,0xdf,0xef,0xc7,0x93,0x39,0x01,0x39,0xff,0xf7,0xef,0xc7,0x93,0x39,0x01,0x39,0xff,0xc7,0x93,0xc7,0x93,0x39,0x01,0x39,0xff,0xcb,0xa7,0xc7,0x93,0x39,0x01,0x39,0xff,0x93,0xff,0xc7,0x93,0x39,0x01,0x39,0xff,0xef,0xd7,0xc7,0x93,0x39,0x01,0x39,0xff,0xc1,0x87,0x27,0x21,0x07,0x27,0x21,0xff,0xc3,0x99,0x3f,0x3f,0x99,0xc3,0xf7,0xcf,0xdf,0xef,0x01,0x3f,0x03,0x3f,0x01,0xff,0xf7,0xef,0x01,0x3f,0x03,0x3f,0x01,0xff,0xc7,0x93,0x01,0x3f,0x03,0x3f,0x01,0xff,0x93,0xff,0x01,0x3f,0x03,0x3f,0x01,0xff,0xef,0xf7,0x81,0xe7,0xe7,0xe7,0x81,0xff,0xf7,0xef,0x81,0xe7,0xe7,0xe7,0x81,0xff,0xe7,0xc3,0x81,0xe7,0xe7,0xe7,0x81,0xff,0x99,0xff,0x81,0xe7,0xe7,0xe7,0x81,0xff,0x87,0x93,0x99,0x09,0x99,0x93,0x87,0xff,0xcb,0xa7,0x19,0x09,0x01,0x21,0x31,0xff,0xdf,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xc7,0x93,0x83,0x39,0x39,0x39,0x83,0xff,0xcb,0xa7,0x83,0x39,0x39,0x39,0x83,0xff,0x93,0xff,0x83,0x39,0x39,0x39,0x83,0xff,0xff,0xbb,0xd7,0xef,0xd7,0xbb,0xff,0xff,0x83,0x39,0x31,0x29,0x19,0x39,0x83,0xff,0xdf,0xef,0x39,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x39,0x39,0x39,0x39,0x83,0xff,0xc7,0x93,0xff,0x39,0x39,0x39,0x83,0xff,0x93,0xff,0x39,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x99,0x99,0xc3,0xe7,0xe7,0xff,0x3f,0x03,0x39,0x39,0x39,0x03,0x3f,0xff,0xc3,0x99,0x99,0x93,0x99,0x89,0x93,0xff,0xdf,0xef,0x83,0xf9,0x81,0x39,0x81,0xff,0xf7,0xef,0x83,0xf9,0x81,0x39,0x81,0xff,0xc7,0x93,0x83,0xf9,0x81,0x39,0x81,0xff,0xcb,0xa7,0x83,0xf9,0x81,0x39,0x81,0xff,0x93,0xff,0x83,0xf9,0x81,0x39,0x81,0xff,0xef,0xd7,0x83,0xf9,0x81,0x39,0x81,0xff,0xff,0xff,0x83,0xe9,0x81,0x2f,0x83,0xff,0xff,0xff,0x81,0x3f,0x3f,0x81,0xf7,0xcf,0xdf,0xef,0x83,0x39,0x01,0x3f,0x83,0xff,0xf7,0xef,0x83,0x39,0x01,0x3f,0x83,0xff,0xc7,0x93,0x83,0x39,0x01,0x3f,0x83,0xff,0x93,0xff,0x83,0x39,0x01,0x3f,0x83,0xff,0xdf,0xef,0xff,0xc7,0xe7,0xe7,0x81,0xff,0xf7,0xef,0xff,0xc7,0xe7,0xe7,0x81,0xff,0xc7,0x93,0xff,0xc7,0xe7,0xe7,0x81,0xff,0x93,0xff,0xc7,0xe7,0xe7,0xe7,0x81,0xff,0x9b,0x87,0x67,0x83,0x39,0x39,0x83,0xff,0xcb,0xa7,0x03,0x39,0x39,0x39,0x39,0xff,0xdf,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xf7,0xef,0x83,0x39,0x39,0x39,0x83,0xff,0xc7,0x93,0x83,0x39,0x39,0x39,0x83,0xff,0xcb,0xa7,0x83,0x39,0x39,0x39,0x83,0xff,0x93,0xff,0x83,0x39,0x39,0x39,0x83,0xff,0xff,0xe7,0xff,0x81,0xff,0xe7,0xff,0xff,0xff,0xff,0x83,0x31,0x29,0x19,0x83,0xff,0xdf,0xef,0x39,0x39,0x39,0x39,0x81,0xff,0xf7,0xef,0x39,0x39,0x39,0x39,0x81,0xff,0xc7,0x93,0xff,0x39,0x39,0x39,0x81,0xff,0x93,0xff,0x39,0x39,0x39,0x39,0x81,0xff,0xf7,0xef,0x39,0x39,0x39,0x81,0xf9,0x83,0x3f,0x3f,0x03,0x39,0x39,0x03,0x3f,0x3f,0x93,0xff,0x39,0x39,0x39,0x81,0xf9,0x83 ]);

export class Framebuffer {
    constructor (memory) {
        this.bytes = new Uint8Array(memory, constants.ADDR_FRAMEBUFFER, WIDTH*HEIGHT >> 2);
        this.drawColors = new Uint16Array(memory, constants.ADDR_DRAW_COLORS, 1);
    }

    clear () {
        this.bytes.fill(0);
    }

    drawPoint (color, x, y) {
        const idx = (WIDTH*y + x) >> 2;
        const shift = (x & 0x3) << 1;
        const mask = 0x3 << shift;
        this.bytes[idx] = (color << shift) | (this.bytes[idx] & (~mask));
    }

    drawPointUnclipped (color, x, y) {
        if (x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
            this.drawPoint(color, x, y);
        }
    }

    drawRect (x, y, width, height) {
        const startX = Math.max(0, x);
        const startY = Math.max(0, y);
        const endX = Math.min(x+width, WIDTH);
        const endY = Math.min(y+height, HEIGHT);

        const drawColors = this.drawColors[0];
        const dc0 = drawColors & 0xf;
        const dc1 = (drawColors >> 4) & 0xf;

        if (dc0 != 0) {
            const fillColor = (dc0-1) & 0x3;

            for (let yy = startY; yy < endY; ++yy) {
                for (let xx = startX; xx < endX; ++xx) {
                    this.drawPoint(fillColor, xx, yy);
                }
            }
        }

        if (dc1 != 0) {
            const strokeColor = (dc1-1) & 0x3;

            // Left edge
            if (x >= 0 && x < WIDTH) {
                for (let yy = startY; yy < endY; ++yy) {
                    this.drawPoint(strokeColor, x, yy);
                }
            }

            // Right edge
            if (endX > 0 && endX < WIDTH+1) {
                for (let yy = startY; yy < endY; ++yy) {
                    this.drawPoint(strokeColor, endX-1, yy);
                }
            }

            // Top edge
            if (y >= 0 && y < HEIGHT) {
                for (let xx = startX; xx < endX; ++xx) {
                    this.drawPoint(strokeColor, xx, y);
                }
            }

            // Bottom edge
            if (endY > 0 && endY < HEIGHT+1) {
                for (let xx = startX; xx < endX; ++xx) {
                    this.drawPoint(strokeColor, xx, endY-1);
                }
            }
        }
    }

    drawOval (x, y, width, height) {
        const drawColors = this.drawColors[0];
        // const dc0 = drawColors & 0xf;
        const dc1 = (drawColors >> 4) & 0xf;
        if (dc1 == 0xf) {
            return;
        }
        const strokeColor = (dc1-1) & 0x3;

        const a = width/2, b = height/2;

        if(a <= 0) return;
        if(b <= 0) return;

        const x0 = x + a, y0 = y + b;
        const aa2 = a*a*2, bb2 = b*b*2;

        {
            let x = a, y = 0;
            let dx = (1-2*a)*b*b, dy = a*a;
            let sx = bb2*a, sy=0;
            let e = 0;

            while (sx >= sy)
            {
                this.drawPointUnclipped(strokeColor, (x0+x), (y0+y)); /*   I. Quadrant */
                this.drawPointUnclipped(strokeColor, (x0+x), (y0-y)); /*  II. Quadrant */
                this.drawPointUnclipped(strokeColor, (x0-x), (y0+y)); /* III. Quadrant */
                this.drawPointUnclipped(strokeColor, (x0-x), (y0-y)); /*  IV. Quadrant */
                y++; sy += aa2; e += dy; dy += aa2;
                if(2*e+dx >0) { x--; sx -= bb2; e  += dx; dx += bb2; }
            }
        }

        {
            let x = 0, y = b;
            let dx = b*b, dy = (1-2*b)*a*a;
            let sx = 0, sy=aa2*b;
            let e = 0;

            while (sy >= sx)
            {
                this.drawPointUnclipped(strokeColor, (x0+x), (y0+y)); /*   I. Quadrant */
                this.drawPointUnclipped(strokeColor, (x0+x), (y0-y)); /*  II. Quadrant */
                this.drawPointUnclipped(strokeColor, (x0-x), (y0+y)); /* III. Quadrant */
                this.drawPointUnclipped(strokeColor, (x0-x), (y0-y)); /*  IV. Quadrant */

                x++; sx += bb2; e += dx; dx += bb2;
                if(2*e+dy >0) { y--; sy -= aa2; e  += dy; dy += aa2; }
            }
        }
    }

    // From https://github.com/nesbox/TIC-80/blob/master/src/core/draw.c
    drawLine (x1, y1, x2, y2) {
        const drawColors = this.drawColors[0];
        const dc0 = drawColors & 0xf;
        if (dc0 == 0) {
            return;
        }
        const strokeColor = (dc0-1) & 0x3;

        if (y1 > y2) {
            let swap = x1;
            x1 = x2;
            x2 = swap;

            swap = y1;
            y1 = y2;
            y2 = swap;
        }

        const dx = Math.abs(x2 - x1), sx = x1 < x2 ? 1 : -1;
        const dy = y2 - y1;
        let err = (dx > dy ? dx : -dy) / 2, e2;

        for (;;) {
            this.drawPointUnclipped(strokeColor, x1, y1);
            if (x1 == x2 && y1 == y2) {
                break;
            }
            e2 = err;
            if (e2 > -dx) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dy) {
                err += dx;
                y1++;
            }
        }
    }

    drawText (charArray, x, y) {
        let currentX = x;
        for (let ii = 0, length = charArray.length; ii < length; ++ii) {
            const charCode = charArray[ii];
            switch (charCode) {
            case 0:
                return; // Null terminator
            case 10:
                y += 8;
                currentX = x;
                break;
            default:
                this.blit(FONT, currentX, y, 8, 8, 0, (charCode-32)*8, 8, false, false, false);
                currentX += 8;
                break;
            }
        }
    }

    blit (sprite, dstX, dstY, width, height, srcX, srcY, srcStride, bpp2, flipX, flipY, rotate) {
        const clipXMin = Math.max(0, dstX) - dstX;
        const clipYMin = Math.max(0, dstY) - dstY;
        const clipXMax = Math.min(width, WIDTH - dstX);
        const clipYMax = Math.min(height, HEIGHT - dstY);
        const drawColors = this.drawColors[0];

        if (rotate) {
            flipX = !flipX;
        }

        for (let row = clipYMin; row < clipYMax; ++row) {
            for (let col = clipXMin; col < clipXMax; ++col) {
                // Determine the local position on the sprite
                let sx, sy;
                if (rotate) {
                    sx = row;
                    sy = col;
                } else {
                    sx = col;
                    sy = row;
                }
                if (flipX) {
                    sx = clipXMax - sx - 1;
                }
                if (flipY) {
                    sy = clipYMax - sy - 1;
                }

                // Sample the sprite to get a color index
                let colorIdx;
                const x = srcX + sx, y = srcY + sy;
                if (bpp2) {
                    const byte = sprite[(y*srcStride + x) >> 2];
                    const shift = 6 - ((x & 0x03) << 1);
                    colorIdx = (byte >> shift) & 0b11;

                } else {
                    const byte = sprite[(y*srcStride + x) >> 3];
                    const shift = 7 - (x & 0x07);
                    colorIdx = (byte >> shift) & 0b1;
                }

                // Get the final color using the drawColors indirection
                // TODO(2021-08-11): Use a lookup table here?
                const dc = (drawColors >> (colorIdx << 2)) & 0x0f;
                if (dc != 0) {
                    this.drawPoint((dc-1) & 0x03, dstX + col, dstY + row);
                }
            }
        }
    }
}
