import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  template: `
    <p>Bem vinda, {{ nome }}!</p>
    <p>2 + 8 = {{ 2 + 8 }}</p>
    <p>{{ 5 + numero }}</p>
    <p>{{ 20 > 4 }}</p>
    <p>{{ geraSaudacao() }}</p>
    <p>{{ nome.toUpperCase() }}</p>`,

  styleUrls: ['./segundo.component.css'],
})
export class SegundoComponent {
  public nome: string = 'Julia';
  public numero: number = -1;

  public geraSaudacao(): string {
    const saudacao = `Bem vindo, ${this.nome}`;
    return saudacao;
  }
}
