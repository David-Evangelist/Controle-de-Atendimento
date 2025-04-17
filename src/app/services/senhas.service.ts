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

  public senhaChamadaAtual: string = '';

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

  public historicoAtendimentos: {
    senha: string;
    tipo: string;
    tempo: number;
  }[] = [];

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
    } else {
      if (this.filaSE.length > 0) {
        proximaSenha = this.filaSE.shift()!;
        this.ultimaSenhaChamada = 'SE';
      } else if (this.filaSG.length > 0) {
        proximaSenha = this.filaSG.shift()!;
        this.ultimaSenhaChamada = 'SG';
      }
    }

    if (proximaSenha !== '') {
      const tipo = proximaSenha.split('-')[1].substring(0, 2);
      const tempo = this.gerarTempoAtendimento(tipo);

      this.registrarChamada(proximaSenha);
      this.senhaChamadaAtual = proximaSenha;

      this.historicoAtendimentos.push({
        senha: proximaSenha,
        tipo: tipo,
        tempo: tempo,
      });

      console.log(`Senha chamada:  ${proximaSenha}`);
      console.log(`Tempo de atendimento estimado: ${tempo} min`);
    } else {
      console.log('Não há senhas na fila');
    }
  }

  gerarTempoAtendimento(tipo: string) {
    if (tipo === 'SP') {
      return 15 + Math.floor(Math.random() * 11) - 5;
    } else if (tipo === 'SG') {
      return 5 + Math.floor(Math.random() * 7) - 3;
    } else if (tipo === 'SE') {
      return Math.random() < 0.95 ? 1 : 5;
    }

    return 0;
  }
}
