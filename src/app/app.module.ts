import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBXDR1lVnNnCduj-lfcn5L-CTwMa_DHYao',
      authDomain: 'angular-file-upload-caef1.firebaseapp.com',
      databaseURL: 'https://angular-file-upload-caef1.firebaseio.com',
      projectId: 'angular-file-upload-caef1',
      storageBucket: 'angular-file-upload-caef1.appspot.com',
      messagingSenderId: '668633930035',
      appId: '1:668633930035:web:cb3cf3b43229a1277a4646',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
