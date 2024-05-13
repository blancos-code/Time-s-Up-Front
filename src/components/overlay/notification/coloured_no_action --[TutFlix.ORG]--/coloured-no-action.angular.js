import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-coloured-no-action",
    templateUrl: "./coloured-no-action.component.html",
})
export class ColouredNoActionComponent implements OnInit {
    constructor() {}

    public closeModal() {
        var Notification = document.getElementById("notification");
        Notification.style.transform = "translateX(150%)";
    }
    ngOnInit(): void {
        var Notification = document.getElementById("notification");
        Notification.style.transform = "translateX(150%)";
        Notification.classList.remove("hidden");
        setTimeout(function () {
            Notification.style.transform = "translateX(0%)";
        }, 1000);
    }
}
