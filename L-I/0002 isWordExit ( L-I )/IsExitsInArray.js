class Dictonary {
    constructor(arr) {
        this.dict = new Set(arr);
    }

    isInDict(word) {
        return this.dict.has(word)
    };
};

const isExits = new Dictonary(['tea', 'mug', 'jug', 'bug']);

console.log(isExits.isInDict('cat'));
console.log(isExits.isInDict('bug'));