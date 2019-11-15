import { EshopComponent } from '../components/eshop/eshop.component';
import { ProductentryComponent } from '../components/productentry/productentry.component';
import { ProductlistComponent } from '../components/productlist/productlist.component';

export const EShopRoutes = 
[
    // http://localhost/eshop
    {
        path : "",
        component : EshopComponent,
        children : 
        [   
            // http://localhost/eshop
            //Default for Second level
            {
                path : "",
                component : ProductlistComponent
            },

            // http://localhost/eshop/list
            {
                path : "list",
                component : ProductlistComponent
            },
            // http://localhost/eshop/entry
            {
                path : "entry",
                component : ProductentryComponent
            }
        ]
    },
];