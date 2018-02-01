export class BaseInt {
    constructor(type, value) {
        this._value = new type(1);
        this._value[0] = value;
    }

    add(other) {
        this._value[0] += other.valueOf();
    }

    subtract(other) {
        this._value[0] -= other.valueOf();
    }

    devide(other) {
        this._value[0] /= other.valueOf();
    }

    times(other) {
        this._value[0] *= other.valueOf();
    }

    xor(other) {
        this._value[0] ^= other.valueOf();
    }

    valueOf() {
        return this._value[0];
    }
}

export class Uint32 extends BaseInt{
    constructor(value) {
        super(Uint32Array, value);
    }
}

export class Uint16 extends BaseInt{
    constructor(value) {
        super(Uint16Array, value);
    }
}

export class Uint8 extends BaseInt{
    constructor(value) {
        super(Uint8Array, value);
    }
}

export class Int32 extends BaseInt{
    constructor(value) {
        super(Int32Array, value);
    }
}

export class Int16 extends BaseInt{
    constructor(value) {
        super(Int16Array, value);
    }
}

export class Int8 extends BaseInt{
    constructor(value) {
        super(Int8Array, value);
    }
}