import { Component, Input, OnInit } from "@angular/core";
import { ConfigService } from "../shared/config.service";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "hello",
  template: `
    <br />
    {{ dataFromSettingsSvc || "could not load data from settings service" }}
    <br />
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  dataFromSettingsSvc: string;
  constructor(private settingsService: AuthService) {}

  ngOnInit() {
    this.dataFromSettingsSvc = this.settingsService.authUrl;
  }
}
