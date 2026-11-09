# Despensa — Angular

Aplicação convertida de React + TanStack Router para **Angular standalone + Angular Router**.

## Requisitos
- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente
```bash
npm install
npm start
```
Acesse `http://localhost:4200`.

## Build de produção
```bash
npm run build
```

## Estrutura
- `src/app/app.component.ts`: layout, navegação lateral e busca global.
- `src/app/pages.component.ts`: páginas Início, Receitas, detalhe, Despensa, Compras, Postar, Entrar e Vídeos.
- `src/app/pantry.service.ts`: estado da despensa com Angular Signals e persistência em `localStorage`.
- `src/app/data.ts`: catálogo de ingredientes, equipamentos e receitas.
- `src/assets/`: imagens originais preservadas.

O login e o envio de receitas continuam como demonstração, assim como no projeto original. Os dados da despensa e lista de compras são persistidos localmente no navegador.
