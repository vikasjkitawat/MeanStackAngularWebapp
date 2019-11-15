import { ReportComponent } from '../components/report/report.component';

export const AppRoutes = 
[
    // http://localhost/
    // Default
    {
        path : "",
        component : ReportComponent
    },

    // http://localhost/reports/
    {
        path : "reports",
        component : ReportComponent
    },

    {
        path : "eshop",
        //loadChildren : ModuleFile Relative Path # ModuleClassName
        loadChildren : "./eshop.module#EShopModule"
    }
];