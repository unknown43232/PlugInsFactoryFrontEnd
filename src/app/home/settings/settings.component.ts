import { Component, EventEmitter, Output } from '@angular/core';
import { HomeService } from '../home.service';
import { Observable } from 'rxjs';
import { resizeImage } from '../home-utils';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  @Output() closeSidebar = new EventEmitter<void>();

  userInfo: any;
  previewImage: string | null = null;

  constructor(private homeService: HomeService) {
    this.homeService.userInfo$.subscribe((userInfo) => {
      this.userInfo = { ...userInfo }; // Create a copy of the userInfo object
    });

    // this.userInfo$ = this.homeService.userInfo$; // Get the userInfo Observable from the HomeService
  }

  saveChanges(formData: any) {
    const userInfo = {
      ...formData,
      picture: this.previewImage || this.userInfo.picture,
    };

    console.log(JSON.stringify(userInfo));
    this.homeService.updateUserProfile(userInfo);
  }
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    if (file) {
      resizeImage(file, 100, 100)
        .then((resizedImageUrl) => {
          this.previewImage = resizedImageUrl;
        })
        .catch((error) => {
          console.error('Failed to resize image:', error);
        });
    }
  }
}
