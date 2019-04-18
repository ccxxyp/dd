import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { ClassifyPage } from '../classify/classify'

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  llist=[]
  glist=[]
  mlist=[]
  rlist=[]

  constructor(
    private myHttp:HttpClient,
    public navCtrl: NavController,
     public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    var url="http://localhost:8080/index"
    this.myHttp.get(url).subscribe((result:any)=>{
      this.llist=result.slides;
      this.glist=result.grids;
      this.mlist=result.ms;
      this.rlist=result.row;
    })
  }

  //跳转到classify页面
  classify(id){
    this.navCtrl.push(ClassifyPage);
  }

}
