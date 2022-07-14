import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { TransferHttpCacheModule } from '@nguniversal/common';

import { environment } from 'src/environments/environment';
import { AppRoutes } from './app.routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';


@NgModule({
	declarations: [
		AppComponent,
		LayoutsComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
		// BrowserModule.withServerTransition({ appId: 'my-app' }),
		// ServiceWorkerModule.register('ngsw-config.json'),
		TransferHttpCacheModule,
		HttpClientModule,
		RouterModule,
		AppRoutes,
		BrowserAnimationsModule,
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
