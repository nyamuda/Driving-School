export class Testimonial {
    private _fullName: string;
    private _work!: string;
    private _testimonial: string;
    private _imgURL: string;

    constructor(
        fullName: string,
        work: string,
        testimonial: string,
        imgURL: string
    ) {
        this._fullName = fullName;
        this._work = work;
        this._testimonial = testimonial;
        this._imgURL = imgURL;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get work(): string {
        return this._work;
    }

    set work(value: string) {
        this._work = value;
    }

    get testimonial(): string {
        return this._testimonial;
    }

    set testimonial(value: string) {
        this._testimonial = value;
    }

    get imgURL(): string {
        return this._imgURL;
    }

    set imgURL(value: string) {
        this._imgURL = value;
    }
}
