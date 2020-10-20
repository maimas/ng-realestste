import {NgModule} from '@angular/core';
import {PropertiesListingComponent} from './properties-listing.component';
import {PropertyCardComponent} from './property-card/property-card.component';
import {AppMaterialModule} from '../../@modules/app-material.module';
import {TimeagoModule} from 'ngx-timeago';
import {PropertyDetailsComponent} from './property-details/property-details.component';
import {RouterModule, Routes} from '@angular/router';
import {PipesModule} from '../../@common/pipes/pipes.module';
import {GalleryModule} from 'ng-gallery';

const childRoutes: Routes = [

  // {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', component: PropertiesListingComponent},
  {path: ':id', component: PropertyDetailsComponent}


];

@NgModule({
  declarations: [
    PropertiesListingComponent,
    PropertyCardComponent,
    PropertyDetailsComponent
  ],
  imports: [
    AppMaterialModule,
    TimeagoModule,
    RouterModule.forChild(childRoutes),
    PipesModule,
    GalleryModule,
  ],
  exports: [
    PropertiesListingComponent,
    PropertyCardComponent
  ],
  providers: [],
  bootstrap: []
})
export class PropertiesListingModule {
}
