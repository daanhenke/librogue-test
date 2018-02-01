//TODO: MOVE LERP TO OTHER FILE

import XorShift from "../prng/XorShift";

export default class Perlin {
    constructor(rng) {
        if (rng === undefined) {
            rng = new XorShift("xorshift32");
            rng.seed();
        }

        this.rng = rng;

        this.gradient = [];

        for (let i = 0; i < 256; i++)
            this.gradient.push(Math.floor(rng.generate(true) * 256))
    }
}