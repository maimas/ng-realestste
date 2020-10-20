import {Component, OnInit} from '@angular/core';
import {Property} from '../../@generated/app-graphql-models';
import {AppGraphqlService} from '../../@common/services/app-graphql.service';
import {Router} from '@angular/router';
import {PROPERTY_FRAGMENT} from '../../@common/services/app-graphql.fragments';


@Component({
  selector: 'app-properties-listing',
  templateUrl: './properties-listing.component.html',
  styleUrls: ['./properties-listing.component.scss']
})
export class PropertiesListingComponent implements OnInit {

  properties: Property[] = [];
  loading = true;

  constructor(private apiService: AppGraphqlService) {
  }

  ngOnInit(): void {
    this.apiService.getAllProperties({offset: 0, limit: 100}, PROPERTY_FRAGMENT)
      .valueChanges.subscribe(result => {
      // @ts-ignore
      const properties: Property[] = result.data && result.data.findAllProperties;
      this.properties.push(...properties);

      this.loading = result.loading;
      // this.error = result.error;
      console.log(this.properties);
      // console.log(this.property);
    });
  }
}
