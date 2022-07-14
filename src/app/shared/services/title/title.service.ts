import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Injectable({
	providedIn: 'root'
})
export class TitleService {

	constructor(private titleService: Title, private metaTagService: Meta) { }

	setTitle(title: string): void {
		this.titleService.setTitle(title);
	}

	setMeta(title: string, content: string): void {
		const metaTags = [
			{
				name: 'description',
				content: content
			},
			{
				property: 'og:description',
				content: content
			},
			{
				property: 'twitter:description',
				content: content
			},
			{
				name: 'title',
				content: title
			},
			{
				property: 'og:title',
				content: title
			},
			{
				property: 'twitter:title',
				content: title
			},
		];
		// console.log(metaTags)
		metaTags.forEach(tag => this.metaTagService.updateTag(tag));
	}

	setMetaKeywords(keywords: string): void {
		this.metaTagService.updateTag(
			{ name: 'keywords', content: keywords }
		);
	}
}