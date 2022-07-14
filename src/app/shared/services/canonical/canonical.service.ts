import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
	providedIn: 'root'
})

export class CanonicalService {

	constructor(@Inject(DOCUMENT) private dom) { }

	setCanonicalURL(url?: string): void {
		// console.log(this.dom.location.pathname)
		const canURL = url == undefined ? "https://www.kodehash.com" + this.dom.location.pathname : url;
		// console.log(canURL)
		const link: HTMLLinkElement = this.dom.createElement('link');
		link.setAttribute('rel', 'canonical');
		this.dom.head.appendChild(link);
		link.setAttribute('href', canURL);
	}
}