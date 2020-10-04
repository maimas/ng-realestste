import {NgModule} from '@angular/core';
import {PropertiesListingComponent} from './properties-listing.component';
import {PropertyCardComponent} from './property-card/property-card.component';
import {AppMaterialModule} from '../../@modules/app-material.module';

@NgModule({
  declarations: [
    PropertiesListingComponent,
    PropertyCardComponent
  ],
  imports: [AppMaterialModule],
  exports: [
    PropertiesListingComponent,
    PropertyCardComponent
  ],
  providers: [],
  bootstrap: []
})
export class PropertiesListingModule {
}
