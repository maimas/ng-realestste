import {Component, Input, OnInit} from '@angular/core';
import {Property} from '../../../@generated/app-graphql-models';
import {DomSanitizer, SafeHtml, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: Property;
  @Input() favorite = false;
  thumbnail: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    console.log('Property', this.property);
    if (!this.property.thumbnail) {
      this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/defaults/image_not_available.jpg');
    } else {
      this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.property.thumbnail);
    }
  }

}
