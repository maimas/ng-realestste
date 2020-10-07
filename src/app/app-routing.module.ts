import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PropertiesListingModule} from './@pages/properties-listing/properties-listing.module';
import {PageNotFoundComponent} from './@pages/page-not-found/page-not-found.component';

const ROUTE_LINKS = {
  root: '',
  propertyListing: 'src/app/@modules/app-routing.module.ts',
};


const ROUTES: Routes = [
  {path: '', redirectTo: 'properties', pathMatch: 'full'},
  {path: 'properties', loadChildren: () => PropertiesListingModule},
  {path: 'page-not-found', component: PageNotFoundComponent},
  // {
  //   path: '',
  //   loadChildren: './main/content/pages/pages.module#FusePagesModule'
  // },

  // {
  //   path: ROUTE_LINKS.public.module.published_renters,
  //   loadChildren: './main/content/apps/public/renters-listing/renters-listing.module#RentersListingModule'
  // },
  // {
  //   path: ROUTE_LINKS.public.module.published_properties,
  //   loadChildren: './main/content/apps/public/properties-listing/properties-listing.module#PropertiesListingModule'
  // },
  // {
  //   path: ROUTE_LINKS.landlord.module.landlord,
  //   loadChildren: './main/content/apps/landlord/landlord.module#LandlordModule'
  // },
  // {
  //   path: ROUTE_LINKS.renter.module.my_renter_profile,
  //   loadChildren: './main/content/apps/renter/renter.module#RenterModule'
  // },
  // {
  //   path: ROUTE_LINKS.admin.module.admin,
  //   loadChildren: './main/content/apps/admin/admin.module#AdminModule'
  // },

  // {
  //   path: '',
  //   redirectTo: 'properties',
  //   pathMatch: 'full'
  // },
  //
  // Redirect user to the Page Not Found if nonexistent URI
  {
    path: '**',
    redirectTo: 'page-not-found',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
