export class ObjectCopier<T> {
    private originalObject: T;

    constructor(originalObject: T) {
        this.originalObject = originalObject;
    }

    public deepCopy(): T {
        const copy: any = Array.isArray(this.originalObject) ? [] : {};
        for (const key in this.originalObject) {
            const value = this.originalObject[key as keyof T];
            copy[key] = typeof value === 'object' ? new ObjectCopier(value).deepCopy() : value;
        }
        return copy as T;
    }
}

