export class FunctionCache<T extends unknown[], R> {
    private cache: Map<string, R> = new Map();

    constructor(private fn: (...args: T) => R) {}

    public execute(...args: T): R {
        const key = JSON.stringify(args);

        if (this.cache.has(key)) {
            return this.cache.get(key)!;
        }

        const result = this.fn(...args);
        this.cache.set(key, result);

        return result;
    }
}