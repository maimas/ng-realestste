import {NgModule} from '@angular/core';
import {PropertiesListingComponent} from './properties-listing.component';
import {PropertyCardComponent} from './property-card/property-card.component';
import {AppMaterialModule} from '../../@modules/app-material.module';
import {TimeagoModule} from 'ngx-timeago';

@NgModule({
  declarations: [
    PropertiesListingComponent,
    PropertyCardComponent
  ],
  imports: [AppMaterialModule, TimeagoModule],
  exports: [
    PropertiesListingComponent,
    PropertyCardComponent
  ],
  providers: [],
  bootstrap: []
})
export class PropertiesListingModule {
}
