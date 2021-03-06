import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { NewsService } from "../api/news.service";
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  newsList: any = [];
  constructor(private newsService: NewsService, public loadingController: LoadingController) {}

  ngOnInit() {
    this.getNews()
  }

  async getNews() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.newsService.getNews()
      .subscribe(news => {
        console.log(news);
        this.newsList = news;
        console.log(this.newsList);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
}
