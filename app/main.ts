// function, nativescript-angular module, code to integrate NativeScript and Angular app version of platformBrowserDynamic()
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { setStatusBarColors } from "./utils/status-bar-util";
// typescript class .. both defined in seperate files
import { AppModule } from "./app.module";

// bootstrapModule expects an Angular module that contains the main configuration for your application,
// in this case AppModule module defiend in app.module.ts
setStatusBarColors();
platformNativeScriptDynamic().bootstrapModule(AppModule);
