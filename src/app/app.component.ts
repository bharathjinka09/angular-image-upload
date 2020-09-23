import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url = '';

  urls = [];

  path: String;

  constructor(private http: HttpClient, private af: AngularFireStorage) {}

  upload(event) {
    this.path = event.target.files[0];
  }

  uploadImage() {
    console.log(this.path);

    this.af.upload('/files' + Math.random() + this.path, this.path);
    alert('File uploaded successfully!')
  }

  selectFiles(event) {
    if (event.target.files) {
      for (var i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        };
      }
    }
  }

  selectFile(event) {
    if (event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  title = 'angular-image-upload';
  selectedFile: File = null;

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post('https://upload.uploadcare.com/base/', fd, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log(
            'Upload progress' +
              Math.round((event.loaded / event.total) * 100) +
              '%'
          );
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      });
  }
}
