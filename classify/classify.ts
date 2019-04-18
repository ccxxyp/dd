import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { DetailPage } from '../detail/detail'

/**
 * Generated class for the ClassifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
})
export class ClassifyPage {
  list=[]

  constructor(
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
    var url="http://localhost:8080/index"
    this.myHttp.get(url).subscribe((result:any)=>{
      this.list=result.cx;
    })
  }

  //跳转到detail页面
  detail(pid){
    this.navCtrl.push(DetailPage,{pid:pid});
  }

}
