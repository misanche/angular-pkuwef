import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { ConfigService } from "../shared/config.service";
import { AuthService } from "../shared/auth.service";

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService, AuthService],
      useFactory: (
        appConfigSvc: ConfigService,
        settingsService: AuthService
      ) => {
        return () => {
          return appConfigSvc.loadConfig().then(config => {
            return settingsService.loadConfig(config);
          });
        };
      }
    }
  ]
})
export class AppModule {}
