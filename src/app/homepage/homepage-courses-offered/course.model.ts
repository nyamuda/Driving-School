export class Course {
    private _title: string;
    private _price: number;
    private _imgURL: string;
    private _comments!: Array<object>;
    private _description: string;

    constructor(
        title: string,
        price: number,
        imgURL: string,
        comments: object[],
        description: string
    ) {
        this._title = title;
        this._price = price;
        this._imgURL = imgURL;
        this._comments = comments;
        this._description = description;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get imgURL(): string {
        return this._imgURL;
    }

    set imgURL(value: string) {
        this._imgURL = value;
    }

    get comments(): object[] {
        return this._comments;
    }

    set comments(value: object[]) {
        this._comments = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
