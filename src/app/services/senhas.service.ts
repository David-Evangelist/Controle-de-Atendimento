import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SenhasService {
  constructor() {}

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  public inputNovaSenha: string = '';

  public ultimasChamadas: string[] = [];

  public filaSP: string[] = [];
  public filaSG: string[] = [];
  public filaSE: string[] = [];
  public ultimaSenhaChamada: string = '';

  public senhasArray = {
    SG: [''],
    SP: [''],
    SE: [''],
  };

  somaGeral() {
    this.senhasGeral++;
    this.senhasTotal++;
  }

  somaPrior() {
    this.senhasPrior++;
    this.senhasTotal++;
  }

  somaExame() {
    this.senhasExame++;
    this.senhasTotal++;
  }

  novaSenha(tipoSenha: string = '') {
    if (tipoSenha === 'SG') {
      this.somaGeral();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        this.senhasArray['SG'].length.toString().padStart(2, '0');

      this.senhasArray.SG.push(this.inputNovaSenha);
      this.filaSG.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SP') {
      this.somaPrior();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        this.senhasArray['SP'].length.toString().padStart(2, '0');

      this.senhasArray.SP.push(this.inputNovaSenha);
      this.filaSP.push(this.inputNovaSenha);
    } else if (tipoSenha == 'SE') {
      this.somaExame();
      this.inputNovaSenha =
        new Date().getFullYear().toString().substring(2, 4) +
        (new Date().getMonth() + 1).toString().padStart(2, '0') +
        new Date().getDate().toString().padStart(2, '0') +
        '-' +
        tipoSenha +
        this.senhasArray['SE'].length.toString().padStart(2, '0');

      this.senhasArray.SE.push(this.inputNovaSenha);
      this.filaSE.push(this.inputNovaSenha);
    }

    console.log(this.senhasArray);
  }

  registrarChamada(senha: string) {
    this.ultimasChamadas.unshift(senha);

    if (this.ultimasChamadas.length > 5) {
      this.ultimasChamadas.pop();
    }
  }

  chamarProximaSenha() {
    let proximaSenha = '';

    if (this.ultimaSenhaChamada !== 'SP' && this.filaSP.length > 0) {
      proximaSenha = this.filaSP.shift()!;
      this.ultimaSenhaChamada = 'SP';
    } else if (this.ultimaSenhaChamada === 'SP') {
      if (this.filaSE.length > 0) {
        proximaSenha = this.filaSE.shift()!;
        this.ultimaSenhaChamada = 'SE';
      } else if (this.filaSG.length > 0) {
        proximaSenha = this.filaSG.shift()!;
        this.ultimaSenhaChamada = 'SG';
      }
    } 

    if (proximaSenha !== '') {
      this.registrarChamada(proximaSenha);
      console.log(`Senha chamada:  ${proximaSenha}`);
    } else {
      console.log('Não há senhas na fila');
    }
  }
}
