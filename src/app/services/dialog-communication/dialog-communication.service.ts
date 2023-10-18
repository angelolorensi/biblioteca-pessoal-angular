import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogCommunicationService {

  //Este serviço faz a comunicação entre o dialog de adição de livros e qualquer outro componente.
  private dialogClosedSource = new Subject<void>();

  dialogClosed$ = this.dialogClosedSource.asObservable();

  emitDialogClosed() {
    this.dialogClosedSource.next();
  }
}
