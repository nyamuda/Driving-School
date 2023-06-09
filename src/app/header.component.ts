import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
    constructor(private appService: AppService) {}

    changeComponentToShow(component: string) {
        this.appService.changeView(component);
    }

    getComponentToShow(): string {
        return this.appService.getView();
    }
}
