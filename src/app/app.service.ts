import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class AppService {
    private _currentView = "homepage";

    changeView(view: string) {
        this._currentView = view;
    }

    getView(): string {
        return this._currentView;
    }
}
