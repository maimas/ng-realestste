import {Component, OnInit} from '@angular/core';
import {Property} from '../../@generated/app-graphql-models';
import {AppGraphqlService} from '../../@common/services/app-graphql.service';


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
    this.apiService.getPropertyById({id: '5f756cf298cbdf032f87b886'})
      .valueChanges.subscribe(result => {
      // @ts-ignore
      const property = result.data && result.data.findPropertyById;
      this.properties.push(property);

      this.loading = result.loading;
      // this.error = result.error;
      console.log(this.properties);
      // console.log(this.property);
    });
  }

}
