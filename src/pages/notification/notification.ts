import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import * as moment from 'moment';

@Component({
    selector: 'page-notification',
    templateUrl: 'notification.html'
})
export class NotificationPage {
    notifyTime: any;
    notifications: any[] = [];
    days: any[];
    chosenHours: number;
    chosenMinutes: number;

    constructor(public navCtrl: NavController, public platform: Platform, public alertCtrl: AlertController) {
        this.notifyTime = moment(new Date()).format();

        this.chosenHours = new Date().getHours();
        this.chosenMinutes = new Date().getMinutes();

        this.days = [
            { title: 'Domingo', dayCode: 0, checked: false },
            { title: 'Segunda', dayCode: 1, checked: false },
            { title: 'Terça', dayCode: 2, checked: false },
            { title: 'Quarta', dayCode: 3, checked: false },
            { title: 'Quinta', dayCode: 4, checked: false },
            { title: 'Sexta', dayCode: 5, checked: false },
            { title: 'Sábado', dayCode: 6, checked: false }
        ];
    }

    ionViewDidLoad() {}

    timeChange(time){
        this.chosenHours = time.hour.value;
        this.chosenMinutes = time.minute.value;
    }

    addNotifications() {
        let currentDate = new Date();
        let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.

        for(let day of this.days){
            if(day.checked){
                let firstNotificationTime = new Date();
                let dayDifference = day.dayCode - currentDay;

                if(dayDifference < 0){
                    dayDifference = dayDifference + 7; // for cases where the day is in the following week
                }

                firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
                firstNotificationTime.setHours(this.chosenHours);
                firstNotificationTime.setMinutes(this.chosenMinutes);
                firstNotificationTime.setSeconds(0);

                let notification = {
                    id: day.dayCode,
                    title: 'Coleta de recicláveis',
                    text: 'Hoje é dia de colocar os recicláveis secos para coleta!',
                    at: firstNotificationTime,
                    every: 'week'
                };

                this.notifications.push(notification);
            }
        }

        console.log("Notifications to be scheduled: ", this.notifications);

        if(this.platform.is('cordova')){
            // Cancel any existing notifications
            LocalNotifications.cancelAll().then(() => {
                // Schedule the new notifications
                LocalNotifications.schedule(this.notifications);

                this.notifications = [];

                let alert = this.alertCtrl.create({
                    title: 'Notificação ativada',
                    buttons: ['Ok']
                });

                alert.present();
            });
        }
    }

    cancelAll() {
        LocalNotifications.cancelAll();

        let alert = this.alertCtrl.create({
            title: 'Notificação desativada',
            buttons: ['Ok']
        });

        alert.present();
    }
}
