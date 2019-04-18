import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  uname=""
  upwd=""

  constructor(
    private toast:ToastController,
    private myHttp:HttpClient,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    //获取用户名、密码
    console.log(this.uname,this.upwd);
    //发给服务器校验
    var url="http://localhost:8080/user/login";
    var body={
      uname:this.uname,
      upwd:this.upwd
    }
    //withCredentials凭证  涉及session要用withCredentials
    this.myHttp.post(url,body,{withCredentials:true}).subscribe((result:any)=>{
      console.log(result);  
      //result.code==200 返回上一页
      //result.code==其他 显示toast 
      if(result.code==200){
        this.navCtrl.parent.select(0);
      }else{
        this.toast.create({
          message:"登录失败",
          duration:1500
        }).present();
      }
    })
  }

}
