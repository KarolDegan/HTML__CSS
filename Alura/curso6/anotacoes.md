#

## Aula 1

### reset.css

Ao testar tudo que foi feito, foi possível detectar algumas margens entre os elementos e os cantos da página mesmo não tendo sido declarada sua criação. Isso acontece pois os navegadores contam com uma configuração padrão de estilos e cada um tem suas particularidades.

## Aula 2

### A diferença entre : e :: reside no que eles representam

### display-inline-block
https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-o-display-inline-block-4e6cba2f19d4

### ~ conbinador CSS

é chamado de combinador de irmãos, Ele seleciona todos os elementos irmãos (que estão no mesmo nível do DOM, ou seja, dentro do mesmo elemento pai) que aparecem depois do elemento de referência.

“Pegue todo .lista-menu que estiver no mesmo nível de .conteiner__botao e aparecer depois dele, e force display: block.

### + 

seleciona somente o próximo irmão imediato.

<div class="conteiner">
  <button class="conteiner__botao">Menu</button>
  <ul class="lista-menu">Lista 1</ul>
  <ul class="lista-menu">Lista 2</ul>
  <ul class="lista-menu">Lista 3</ul>
</div>

.conteiner__botao + .lista-menu {
  display: block;
}

somente a primeira .lista-menu que vier logo em seguida ao .conteiner__botao será afetada.

###

Alternativa correta! Isso ai! Ao usar o atributo for, com o valor igual ao id do input, você está associando a label com o input. Dessa maneira, ao clicar na imagem que está dentro dessa label, irá interagir com o checkbox, fazendo essa detecção do clique do usuário.

: (Pseudo-classes): São usadas para selecionar elementos com base em um certo estado.  Por exemplo, :hover para quando o mouse está sobre um elemento, :active quando um elemento está sendo ativado (clicado), ou :checked para um checkbox que está marcado.

:: (Pseudo-elementos): São usados para estilizar partes específicas de um elemento, que não existem como elementos separados na estrutura HTML. Eles permitem inserir conteúdo ou estilizar partes que normalmente não seriam acessíveis. Exemplos comuns são ::before e ::after para inserir conteúdo antes ou depois de um elemento, e ::first-line para estilizar a primeira linha de um texto.

#### pseudo elementos mais comuns

1. ::before e ::after:

Elementos: Praticamente todos os elementos HTML.
Uso: Permitem inserir conteúdo (texto, imagens, etc.) antes ou depois do conteúdo de um elemento. São muito usados para adicionar elementos decorativos, ícones, ou até mesmo para criar efeitos visuais complexos sem adicionar elementos extras no HTML.
Exemplo:

```css
.alerta::before {
  content: "Atenção: ";
  font-weight: bold;
  color: red;
}
```

Este código adiciona a palavra "Atenção: " em vermelho e negrito antes do conteúdo de qualquer elemento com a classe "alerta".

2. ::first-line:

Elementos: Elementos de bloco (como `<p>`, `<div>`, `<h1>`, etc.).
Uso: Permite estilizar a primeira linha de um texto em um elemento. O que define "a primeira linha" depende do tamanho da tela, da largura do elemento, etc.
Exemplo:

```css
p::first-line {
  font-variant: small-caps;
  color: #009900;
}
```

Este código formata a primeira linha de todos os parágrafos (`<p>`) com letras maiúsculas pequenas e cor verde.

3. ::first-letter:

Elementos: Elementos de bloco (como `<p>`, `<div>`, `<h1>`, etc.).
Uso: Permite estilizar a primeira letra de um texto em um elemento.
Exemplo:

```css
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left;
  margin-right: 0.1em;
}
```

Este código aumenta o tamanho da primeira letra de todos os parágrafos, coloca-a em negrito e a flutua à esquerda, criando um efeito de "letra capitular".

4. ::selection:

Elementos: Todos os elementos HTML.
Uso: Permite estilizar a parte do elemento que é selecionada pelo usuário (por exemplo, ao arrastar o mouse sobre o texto).
Exemplo:

```css
::selection {
  background-color: yellow;
  color: black;
}
```

Este código faz com que o texto selecionado em qualquer parte da página tenha fundo amarelo e cor preta.

### positions

1. static (estático - valor padrão)

- É o comportamento padrão de todos os elementos.

- Eles seguem o fluxo normal da página (como blocos empilhados) e não respondem às propriedades top, bottom, left, right. 

2. fixed (fixo)

- O elemento fica fixo na tela, não se desloca durante o scroll da página.

- Usando valores como bottom: 0% e right: 5%, você posiciona o elemento sempre relativo à viewport.

3. sticky (colado/pegajoso)

- Combina comportamentos relativos e fixos:

    - Comportamento inicial: o elemento rola normalmente.

    - Em determinado ponto de scroll: "cola" em uma posição na viewport (ex: topo) até que o scroll volte.

- Requer que você defina top, left etc., pois depende da posição de referência. 

4. relative (relativo)

- Move o elemento a partir de sua posição original, mas sem tirá-lo do fluxo.

- Exemplo: top: 50px; left: 50px faz o elemento deslocar-se 50px para baixo e para a direita, mantendo o restante dos elementos em suas posições originais.

5. absolute (absoluto)

- Retira o elemento do fluxo normal do documento.

- Seu posicionamento segue a primeira caixa ancestral que tenha position diferente de static. Se não houver (ou for static), a referência é o canto superior esquerdo do documento (viewport).

- Requer cautela: pode causar sobreposições ou desalinhamentos inesperados se usado sem referência clara. 

## Aula 3

