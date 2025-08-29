# Projeto

## Aula 2

### Grid

https://css-tricks.com/snippets/css/complete-guide-grid/

grid-tamplate-columns: definir o numero de linhas e o tamanho (eixo X)
grid-tamplate-rows: (eixo Y)
gap:espaçamentos. também tem indicidual para linha e coluna

grid-tamplate-area: "desenhar" com o nome das classes o espaçamento deles na tela. Depois é preciso aplicar nas classes filhas COLUNAS

```CSS
grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";

.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

```

ALINHAMENTO DE CONTEUDO
justify-items:; eixo y
justify-content: ; eixo X

DISPOSIÇÃO DOS ITENS INDIVIDUAIS
grid-row-star:
grid-row-end:

grid-columns-star:
grid-columns-end:

primeiro definir o grid-template-columns no container
depois definir o espaçamento que eles ocupam 