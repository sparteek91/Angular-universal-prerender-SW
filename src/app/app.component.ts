import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

import { CanonicalService } from './shared/services/canonical/canonical.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})

export class AppComponent {
	constructor(@Inject(PLATFORM_ID) private platformId: Object, private canonical: CanonicalService, private swUpdate: SwUpdate) {
		console.log(environment)
	}

	ngOnInit(): void {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.available.subscribe(() => {
				if (confirm("You're using an old version of the control panel. Want to update?")) {
					window.location.reload();
				}
			});
		}
		this.canonical.setCanonicalURL();
		this.clutchWidget();
	}

	private clutchWidget(): void {
		if (isPlatformBrowser(this.platformId)) {
			let script = document.createElement('script');
			script.src = 'https://widget.clutch.co/static/js/widget.js';
			script.type = 'text/javascript';
			script.defer = true;
			document.getElementsByTagName('head')[0].appendChild(script);
		}
	}
}