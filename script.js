$(document).ready(function(){
    $('#button1').on('click', function(){
        $('img').fadeOut(function(){
            $('img').attr('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80-TOy7VUXj70ngdQQ8V-cC4CeJuQiuV-lg&s');
            $('img').fadeIn();
            $('p').text('descrição da imagem 1').addClass('class');
        });
    });
    $('#button2').on('click', function(){
        $('img').fadeOut(function(){
            $('img').attr('src', 'https://ciclovivo.com.br/wp-content/uploads/2016/08/foto_natureza_2.jpeg');
            $('img').fadeIn();
            $('p').text('descrição da imagem 2').addClass('class');
        });
    });
    $('#button3').on('click', function(){
        $('img').fadeOut(function(){
            $('img').attr('src', 'https://www.caronacultural.com.br/wp-content/uploads/2023/10/Captura-de-Tela-2023-10-12-a%CC%80s-11.47.26_Easy-Resize.com_-1140x530.jpg');
            $('img').fadeIn();
            $('p').text('descrição da imagem 3').addClass('class');
        });
    });
});