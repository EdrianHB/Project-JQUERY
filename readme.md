Mini projeto para juntar tudo

Depois de treinar separado, faça esse desafio:

Galeria simples com jQuery

Crie:

<img id="foto" src="img1.jpg" height="200">

<br>

<button id="img1">Imagem 1</button>
<button id="img2">Imagem 2</button>
<button id="img3">Imagem 3</button>

<p id="descricao">Descrição da imagem</p>

Objetivo:

Ao clicar em cada botão:

trocar a imagem com .attr();
trocar o texto com .text();
aplicar um efeito com .fadeOut() e .fadeIn();
usar .addClass() ou .toggleClass() para destacar a descrição.

Exemplo de ideia:

$('#img1').click(function() {
    $('#foto').attr('src', 'resources/1.jpeg');
    $('#descricao').text('Essa é a imagem 1');
});

https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80-TOy7VUXj70ngdQQ8V-cC4CeJuQiuV-lg&s

https://ciclovivo.com.br/wp-content/uploads/2016/08/foto_natureza_2.jpeg

https://www.caronacultural.com.br/wp-content/uploads/2023/10/Captura-de-Tela-2023-10-12-a%CC%80s-11.47.26_Easy-Resize.com_-1140x530.jpg