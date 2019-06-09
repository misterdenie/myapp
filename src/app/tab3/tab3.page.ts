import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';
declare var google: any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: 0, lng: 0};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyDltkQGfcjH3Wmlk4T9xovjXjgCVWzi0kI'; /*Your API Key*/

  constructor(private geolocation: Geolocation, public loadingController: LoadingController) {}

  ngOnInit() {
     this.loadMap();
  }

  async loadMap(){

    const loading = await this.loadingController.create({
      message: 'Loading Maps'
    });
    await loading.present();
    
    /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';
    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=';
    }

    document.head.appendChild(script);
    /*Get Current location*/
    await this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });
    /*Map options*/
    this.mapOptions = {
        center: this.location,
        zoom: 15,
        mapTypeControl: false
    };
    await setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /*Marker Options*/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
        loading.dismiss();
    }, 3000);

  }
}
