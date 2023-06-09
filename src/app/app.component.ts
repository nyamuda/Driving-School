import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
})
export class AppComponent {
    title = "driving_school";

    constructor(private appService: AppService) {}

    getComponentToShow(): string {
        return this.appService.getView();
    }
}
