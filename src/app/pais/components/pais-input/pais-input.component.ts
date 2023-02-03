import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  // Se crea una varibale de output con el nombre EventEmitter para poder emitir la informacion a donde sea requeria 
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  // De igual manera se crea otra nueva variable de tipo output con el fin mandar las teclas que presiona
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  termino: string = '';

  debouncer: Subject<string> = new Subject();


  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }

}
