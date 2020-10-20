import {Component, OnInit} from '@angular/core';
import {AttachmentType, Property} from '../../../@generated/app-graphql-models';
import {AppGraphqlService} from '../../../@common/services/app-graphql.service';
import {ActivatedRoute} from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {MatSnackBar} from '@angular/material/snack-bar';
import {GalleryItem, ImageItem} from 'ng-gallery';
import {HYDRATED_PROPERTY_FRAGMENT} from '../../../@common/services/app-graphql.fragments';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit {

  property: Property;
  galleryImages: GalleryItem[] = [];
  favorite = true;
  hideFromMe = false;
  currentUrl: string = window.location.href;
  loading = true;

  constructor(private appGraphqlService: AppGraphqlService,
              private route: ActivatedRoute,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private snackBar: MatSnackBar) {
    const svgImages = [
      {name: 'apartment', path: '../assets/svg/apartment.svg'},
      {name: 'apartment-area', path: '../assets/svg/apartment-area.svg'},
      {name: 'apartment-badrooms', path: '../assets/svg/apartment-badrooms.svg'},
      {name: 'apartment-bathrooms', path: '../assets/svg/apartment-bathrooms.svg'},
      {name: 'apartment-garage', path: '../assets/svg/apartment-garage.svg'},
      {name: 'apartment-key', path: '../assets/svg/apartment-key.svg'},
      {name: 'apartment-price', path: '../assets/svg/apartment-price.svg'},
    ];
    svgImages.forEach(it => {
      this.matIconRegistry.addSvgIcon(it.name, this.domSanitizer.bypassSecurityTrustResourceUrl(it.path));
    });
  }

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');

    this.appGraphqlService.getPropertyById({id: propertyId}, HYDRATED_PROPERTY_FRAGMENT)
      .valueChanges.subscribe(result => {
      // @ts-ignore
      this.property = result.data && result.data.findPropertyById;
      this.loading = result.loading;
      console.log(this.property);

      this.loadGalleryImages();
      // console.error(result.error);
    });
  }

  loadGalleryImages(): void {
    const attachments = this.property.attachments;

    if (attachments && attachments.length > 0) {
      attachments.forEach(att => {
        if (att.type === AttachmentType.Image) {
          this.galleryImages.push(new ImageItem({src: 'data:image/jpg;base64,' + att.data, thumb: 'data:image/jpg;base64,' + att.data}));
        }
      });
    } else { // image not found default image
      const defaultImg = 'assets/images/defaults/image_not_available.jpg';
      this.galleryImages.push(new ImageItem({src: defaultImg, thumb: defaultImg}));
    }
  }

  onShareButtonClick(): void {
    this.snackBar.open('Link copied to clipboard!', 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  onHideFromMeButtonClick(): void {
    this.hideFromMe = !this.hideFromMe;
    const msg = this.hideFromMe ? 'Article will not appear in your search!' : 'It will appear back in your search!';
    this.snackBar.open(msg, 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  onFavoriteClick(): void {
    this.favorite = !this.favorite;
    const msg = this.favorite ? 'Added to favorite' : 'Removed from favorite';
    this.snackBar.open(msg, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
