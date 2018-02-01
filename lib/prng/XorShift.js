import {Int8, Uint32} from "../primitives/IntTypes";

export default class XorShift {
    constructor(type, decimal) {
        this.decimal = decimal;

        switch (type.toUpperCase()) {
            case "XORSHIFT32":
                return new XorShift32(decimal);
            case "XORSHIFT128":
                return new XorShift128(decimal);
        }
    }
}

export class XorShift32 {
    constructor() {
        this._seed = new Uint32Array(1);
    }

    seed(seed) {
        if (arguments.length === 0)
            this.seed(new Date().getTime());
        else
            this._seed[0] = parseInt(seed);
    }

    generate(decimal) {
        let x = new Uint32Array([this._seed[0]]);

        x[0] ^= x[0] << 13;
        x[0] ^= x[0] >> 17;
        x[0] ^= x[0] << 5;

        this._seed[0] = x[0];

        return this.output(decimal, x[0]);
    }

    output(decimal, number) {
        if (decimal)
            return (number / 0xFFFFFFFF);
        return number;
    }
}

export class XorShift128 {
    constructor() {
        this._seed = new Uint32Array(4);
    }

    seed(seed) {
        if (arguments.length === 0)
            this.seed(new Date().getTime());
        else {
            //TODO: Allow for the seed to be based on 128 actual bytes of randomness
            for (let i = 0; i < 4; i++)
                this._seed[i] = (seed + seed * i * 0xBEEF);
        }
    }

    generate(decimal) {
        let s = new Uint32Array([this._seed[3]]);
        let t = new Uint32Array([this._seed[3]]);

        t[0] ^= t[0] << 11;
        t[0] ^= t[0] >> 8;

        this._seed[3] = this._seed[2];
        this._seed[2] = this._seed[1];
        this._seed[1] = this._seed[0];

        t[0] ^= s[0];
        t[0] ^= s[0] >> 19;

        this._seed[0] = t[0];

        return this.output(decimal, t[0]);
    }

    output(decimal, number) {
        if (decimal)
            return (number / 0xFFFFFFFF);
        return number;
    }
}