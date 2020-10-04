import {Component, Input, OnInit} from '@angular/core';
import {Property} from '../../../@generated/app-graphql-models';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: Property;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Property', this.property);
  }

}
