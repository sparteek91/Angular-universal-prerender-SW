import { environment } from "../../environments/environment";

export class ApiRoutes {
    public static apiBaseUrl: string = environment.apiBaseUrl;

    public static get contact(): string {
        return this.apiBaseUrl + "contact-us";
    }
}