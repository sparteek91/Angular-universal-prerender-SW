import { Routes, RouterModule } from '@angular/router';

import { APP_ROUTES } from './routes/app-routes';
import { LayoutsComponent } from './layouts/layouts.component';
// import { NotfoundComponent } from './pages/error/notfound/notfound.component';

const routes: Routes = [
	{
		path: APP_ROUTES.root,
		component: LayoutsComponent,
		data: { title: 'Layout' },
		// children: MAIN_LAYOUT_ROUTES
	}
];
// must use {initialNavigation: 'enabled'}) - for one load page, without reload
const routeOptions: any = {
	initialNavigation: 'enabled',
	scrollPositionRestoration: 'enabled'
}
export const AppRoutes = RouterModule.forRoot(routes, routeOptions);
