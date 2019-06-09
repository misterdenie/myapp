import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  barcodeText = "";
  barcodeFormat = "";
  
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {

  }
  scanBarcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      alert('Barcode data :' + barcodeData.text);
      this.barcodeText = barcodeData.text;
      this.barcodeFormat = barcodeData.format;
     }).catch(err => { 
         console.log('Error', err);
     });
  }
}
