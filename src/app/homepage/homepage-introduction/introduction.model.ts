export class Introduction {
    private _title: string;
    private _subTitle: string;
    private _description: string;

    constructor(title: string, subTitle: string, description: string) {
        this._title = title;
        this._subTitle = subTitle;
        this._description = description;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get subTitle(): string {
        return this._subTitle;
    }

    set subTitle(value: string) {
        this._subTitle = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
