export class NameDuplicationError extends Error {

    public name = "\u001b[31;1mNAME DUPLICATION\u001b[0m";
    public message: string;

    public constructor(name: string) {
        super();
        this.message = name + " is already used as item name";
        return;
    }
}

export class InternalIDDuplicationError extends Error {
    public name = "\u001b[31;1mINTERNAL ERROR: ID DUPLICATION\u001b[0m";
    public message: string;

    public constructor(id: string) {
        super();
        this.message = id + " is already used as ID\nThis is an internal error, please make an issue and show your code"
        return;
    }
}