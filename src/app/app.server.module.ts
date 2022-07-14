// import { NgModule } from '@angular/core';
// import { ServerModule } from '@angular/platform-server';

// import { AppModule } from './app.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   imports: [
//     AppModule,
//     ServerModule,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppServerModule {}


// angular
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
// import { CookieService, CookieBackendService } from '@gorniv/ngx-universal';
// CookieModule

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule
],
  bootstrap: [AppComponent],
  providers: [
    // { provide: CookieService, useClass: CookieBackendService },
  ],
})
export class AppServerModule {}
