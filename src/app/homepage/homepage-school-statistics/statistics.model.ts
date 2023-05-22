export class Statistics {
    private _yearsInService: number;
    private _licenses: number;
    private _activeStudents: number;
    private _registeredTeachers: number;

    public Statistics(
        yearsInService: number,
        licenses: number,
        activeStudents: number,
        registeredTeachers: number
    ) {
        this._yearsInService = yearsInService;
        this._licenses = licenses;
        this._activeStudents = activeStudents;
        this._registeredTeachers = registeredTeachers;
    }

    get YearInService(): number {
        return this._yearsInService;
    }
    set YearsInService(yearsInService: number) {
        this._yearsInService = yearsInService;
    }

    get licenses(): number {
        return this._licenses;
    }

    set licenses(value: number) {
        this._licenses = value;
    }

    get activeStudents(): number {
        return this._activeStudents;
    }

    set activeStudents(value: number) {
        this._activeStudents = value;
    }

    get registeredTeachers(): number {
        return this._registeredTeachers;
    }

    set registeredTeachers(value: number) {
        this._registeredTeachers = value;
    }
}
