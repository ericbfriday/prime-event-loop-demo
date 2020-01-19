import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./app.effects";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AceEditorModule } from "ng2-ace-editor";
import { HeaderComponent } from "./header/header.component";
import { EditorsContainerComponent } from "./editors/editors-container/editors-container.component";
import { DisplayEditor } from "./editors/ace-editor/ace-editor.component";
import { HypertextEditorComponent } from "./editors/hypertext-editor/hypertext-editor.component";
import { PortalContainerComponent } from "./portal/portal-container/portal-container.component";
import { CallStackComponent } from "./portal/call-stack/call-stack.component";
import { WebApisComponent } from "./portal/web-apis/web-apis.component";
import { CallbackQueueComponent } from "./portal/callback-queue/callback-queue.component";
import { ActivityDisplayComponent } from "./portal/activity-display/activity-display.component";
import { PopupContainerComponent } from "./modal/popup-container/popup-container.component";
import { AboutComponent } from "./modal/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditorsContainerComponent,
    DisplayEditor,
    HypertextEditorComponent,
    PortalContainerComponent,
    CallStackComponent,
    WebApisComponent,
    CallbackQueueComponent,
    ActivityDisplayComponent,
    PopupContainerComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
