import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'dateDisplay',
})
export class DateDisplayPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}


  transform(date: Timestamp | undefined): string {
    const now = new Date();
    const messageDate = new Date(date?.toMillis() || 0);
    const isToday = now.getFullYear() === messageDate.getFullYear() &&
                    now.getMonth() === messageDate.getMonth() &&
                    now.getDate() === messageDate.getDate();
    if (isToday) {
        return this.datePipe.transform(date?.toMillis(), 'hh:mm') || '';
    } else {
        return this.datePipe.transform(date?.toMillis(), 'dd/MM/yyyy') || '';
    }
}
}
