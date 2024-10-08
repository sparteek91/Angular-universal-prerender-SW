import { Routes } from '@angular/router';
import { APP_ROUTES } from './app-routes';

export const MAIN_LAYOUT_ROUTES: Routes = [
    {
        path: APP_ROUTES.root,
        loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
    }
];