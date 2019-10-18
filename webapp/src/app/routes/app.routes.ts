import { EshopComponent } from '../components/eshop/eshop.component';
import { ReportComponent } from '../components/report/report.component';

export const AppRoutes = 
[
    // http://localhost/
    {
        path : "",
        component : EshopComponent
    },

    // http://localhost/eshop
    {
        path : "eshop",
        component : EshopComponent
    },

    // http://localhost/reports/
    {
        path : "reports",
        component : ReportComponent
    },
];