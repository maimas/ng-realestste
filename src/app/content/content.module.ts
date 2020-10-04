import {NgModule} from '@angular/core';
import {PropertiesListingModule} from '../@pages/properties-listing/properties-listing.module';
import {ContentComponent} from './content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [PropertiesListingModule],
  exports: [ContentComponent],
  providers: [],
  bootstrap: []
})
export class AppContentModule {
}
