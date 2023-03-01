import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'dateDisplayHeader'
})
export class DateDisplayHeaderPipe implements PipeTransform {
  transform(dates: Date[]): string {
    const today = new Date();
    const firstDate = dates[0];
    if (firstDate.toDateString() === today.toDateString()) {
      // se houver mensagens do dia atual, exibe "HOJE"
      return 'Hoje';
    } else {
      // se as mensagens são de dias anteriores, exibe a data da primeira mensagem
      return formatDate(firstDate, 'dd/MM/yyyy', 'en-US');
    }
  }
}
