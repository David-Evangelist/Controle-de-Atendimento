# Sistema de Controle de Atendimento - Mobile

Este projeto foi desenvolvido como parte da disciplina **Código de Alta Performance - Mobile**

## 📱 Descrição

Aplicativo mobile para simular um sistema de controle de atendimento em filas de **laboratórios médicos**, baseado em emissão de senhas por prioridade. O projeto foi desenvolvido utilizando **Ionic + Angular** e segue as regras especificadas no documento funcional proposto pela disciplina.

## 🎯 Funcionalidades

- Emissão de senhas por tipo:
  - `SP`: Senha Prioritária
  - `SG`: Senha Geral
  - `SE`: Senha para retirada de Exames
- Geração de número de senha no formato: `YYMMDD-<TIPO><SEQ>`
- Contadores de senhas emitidas por tipo
- Painel de chamadas com exibição das últimas 5 senhas chamadas
- Simulação do tempo médio de atendimento com variação:
  - SP: 15min ± 5min
  - SG: 5min ± 3min
  - SE: 95% ≤ 1min / 5% ≤ 5min
- Relatório detalhado com:
  - Número da senha
  - Tipo
  - Tempo estimado
  - Data/hora da chamada
- Registro de senhas **não atendidas** com descarte manual
- Relatório de senhas descartadas

## 🧪 Como usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o app:
```bash
ionic serve
```

## 📄 Licença
Este projeto é apenas para fins educacionais.
