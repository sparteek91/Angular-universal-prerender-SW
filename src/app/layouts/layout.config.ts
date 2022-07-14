import { APP_ROUTES } from '../routes/app-routes';
import { IMenuItems } from '../interfaces/menu.interface';

export const menuItems: IMenuItems[] = [
    { 
        id: 0, 
        title: 'Home', 
        route: APP_ROUTES.root, 
        children: []        
    },
    { 
        id: 1, 
        title: 'Services', 
        route: APP_ROUTES.services, 
        children: [
            { id: 1, title: "Website Design & Development", route: APP_ROUTES.webApps },
            { id: 2, title: "eCommerce Store Development", route: APP_ROUTES.ecom },
            { id: 3, title: "Mobile Design & Development", route: APP_ROUTES.mobile },
            { id: 4, title: "SaaS & Web Applications", route: APP_ROUTES.saas },
            { id: 5, title: "CRM & Automation Setup", route: APP_ROUTES.crm },
            { id: 6, title: "Digital Marketing & Strategy", route: APP_ROUTES.marketing },
            { id: 7, title: "API Integration", route: APP_ROUTES.api },
            { id: 8, title: "AI - Artificial Intelligence", route: APP_ROUTES.ai },
            { id: 9, title: "Security Networking", route: APP_ROUTES.security },
            { id: 10, title: "Data Migration", route: APP_ROUTES.dataMigration },
            { id: 11, title: "Chatbot", route: APP_ROUTES.chatbot },
            { id: 12, title: "Cloud Solutions", route: APP_ROUTES.cloud },
        ],
        isSubmenuOpen: false
    },
    { 
        id: 2, 
        title: 'Hire Experts', 
        // route: APP_ROUTES.hireExpert,
        children: [
            { id: 1, title: "Product Managers", route: APP_ROUTES.hireExpert, pathparam: "product-managers" },
            { id: 2, title: "Content Marketers", route: APP_ROUTES.hireExpert, pathparam: "content-marketers" },
            { id: 3, title: "Full Stack Developers", route: APP_ROUTES.hireExpert, pathparam: "full-stact-developers" },
            { id: 4, title: "UI/UX Designers Developers", route: APP_ROUTES.hireExpert, pathparam: "ui-ux-designers-developers" },
            { id: 5, title: "Frontend and Backend Developers", route: APP_ROUTES.hireExpert, pathparam: "frontend-and-backend-developers" },
            { id: 6, title: "Software Tester", route: APP_ROUTES.hireExpert, pathparam: "software-tester" },
            { id: 7, title: "Data Scientists", route: APP_ROUTES.hireExpert, pathparam: "data-scientists" },
        ] 
    },
    { 
        id: 3, 
        title: 'About Us', 
        route: APP_ROUTES.about, 
        children: [] 
    },
    { 
        id: 4, 
        title: 'Portfolio', 
        route: APP_ROUTES.portfolio, 
        children: [] 
    },
    { 
        id: 5, 
        title: 'Blogs', 
        route: APP_ROUTES.blog, 
        children: [] 
    },
];