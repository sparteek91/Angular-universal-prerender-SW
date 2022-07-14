import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	obj: any = {
		name: '',
		email: ''
	};
	website: number;
	isSplash: boolean = false;
	
	constructor(private http: HttpClient) { }

	public get(url: string): Observable<any> {
		return this.http.get<any>(url).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public post(url: string, reqBody: any): Observable<any> {
		return this.http.post<any>(url, reqBody).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public formDataRequest(url: string, reqBody: any): Observable<any> {
		return this.http.post<any>(url, reqBody, { headers: { Anonymous: 'undefined' } }).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public delete(url: string) {
		return this.http.delete<any>(url).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public put(url: string, reqBody: any): Observable<any> {
		return this.http.put<any>(url, reqBody).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public patch(url: string, reqBody: any): Observable<any> {
		return this.http.patch<any>(url, reqBody).pipe(
			map((data) => {
				return data;
			})
		);
	}

	public formUrlParam(url: string, data: any): string {
		let queryString: string = '';
		for (const key in data) {
			if (data.hasOwnProperty(key) && data[key]) {
				if (!queryString) {
					queryString = `?${key}=${data[key]}`;
				} else {
					queryString += `&${key}=${data[key]}`;
				}
			}
		}
		return url + queryString;
	}
}