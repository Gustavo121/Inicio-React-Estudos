## O que é o React
React é uma biblioteca JS, para web para criar componentes;

getElementById('id') ❌
- [x] No React você cria os componentes.
- [x] Componente nada mais é do que uma função que retorna uma TAG HTML.
- [x] React é uma biblioteca para você criar arquivos JSX ou JS caso você crie JS ele auto interpreta como JSX
- [x] O que é o JSX ? É mistura de javascript com HTML. Você pode escrever HTML no Javascript e colocar lógicas etc...
- [x] Components react devem retornar apenas uma coisa mas não quer dizer que é somente 1 coisa mesmo, vc pode envolver e ter varias coisas la dentro
    como por exemplo o fragment: <>abc</> ou <React.Frament>abc</React.Frament>
- [x] Componentes React quando você cria a função ou uma arrow function você sempre tem que colocar a primeira letra em maiusculo

## Como o React Funciona?
- SPA (Single Page Aplication)
- React ele cria um DOM virtual (Virtual DOM)
- Um exemplo HTML + JS: em uma página existe um botão de somar que ele vai exibir na tela o numero ai quando clica ele soma no numero.
              porém quando você clicar no número ele vai desconstruir o HTML inteiro MESMO COISA QUE NÃO TEM NADA VER COM O QUE ELE TA FAZENDO.
              
- Um exemplo em React: seguindo o mesmo exemplo do botão, Ele cria um DOM virtual. Quando a pessoa apertar o botão ele vai comparar o DOM vitural
                       com o DOM que ta no HTML e vai mudar apenas o que ta de diferente. Ele não vai desconstruir o HTML inteiro pra depois te retornar
                       ele vai mudar apenas aonde foi alterado.

