import {NgModule} from '@angular/core';
import {YesNoPipe} from './yesno.pipe';

@NgModule({
  exports: [
    YesNoPipe
  ],
  declarations: [YesNoPipe]
})

export class PipesModule {
}
