import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  title="";
  subtitle="";
  img="";
  content="";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.title = this.activatedRoute.snapshot.paramMap.get('title');
   this.subtitle = this.activatedRoute.snapshot.paramMap.get('subtitle');
   this.img = this.activatedRoute.snapshot.paramMap.get('img');
   this.content = this.activatedRoute.snapshot.paramMap.get('content');
  }

}
