import {Component, Input, OnInit} from '@angular/core';
import {Property} from '../../../@generated/app-graphql-models';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: Property;
  @Input() favorite = false;
  @Input() navigateToLink: string;
  thumbnail: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private router: Router) {
  }

  ngOnInit(): void {
    console.log('Property', this.property);
    if (!this.property.thumbnail) {
      this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/defaults/image_not_available.jpg');
    } else {
      this.thumbnail = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.property.thumbnail);
    }
  }

  navigate(): void {
    this.router.navigate([this.navigateToLink]);
  }
}
