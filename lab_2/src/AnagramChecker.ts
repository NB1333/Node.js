export class AnagramChecker {
    private str1: string;
    private str2: string;

    constructor(str1: string, str2: string) {
        this.str1 = str1;
        this.str2 = str2;
    }

    public isAnagram(): boolean {
        // Normalize strings by removing non-alphanumeric characters and converting to lowercase
        const normalizedStr1 = this.str1.replace(/[^\w]/g, '').toLowerCase();
        const normalizedStr2 = this.str2.replace(/[^\w]/g, '').toLowerCase();

        // Check if both strings have the same length
        if (normalizedStr1.length !== normalizedStr2.length) {
            return false;
        }

        // Sort the characters in both strings and compare them
        const sortedStr1 = normalizedStr1.split('').sort().join('');
        const sortedStr2 = normalizedStr2.split('').sort().join('');
        return sortedStr1 === sortedStr2;
    }
}
