window.addEventListener("load", function(){
    let headerSystem = {
        goToDiv: function(target){
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 2000);
        },
        init: function(){
            let header = document.querySelector("header.header .toggle");
            
            if(header !== null){
                header.addEventListener("click", function(){
                    let header = document.querySelector("header.header .menu-itens");

                    if(header !== null){
                        header.classList.toggle("menu-close")
                    }
                });
            }

            let menuItens = document.querySelectorAll("header.header .menu-itens li");
            menuItens.forEach(function(item){
                item.classList.add("hvr-underline-from-center")
            });
        }
    }

    let lojaIntegradaCatalogSystem = {
        catalog: [{"picture":{"image":"https://integrando.se//files/produtos/2310/420/meu-pet.png","link":"https://integrando.se/temas/e-commerce/loja-integrada/meu-pet-2310/"},"platform":{"image":"https://integrando.se//Store/assets/images/svg-lojaintegrada.svg","link":"https://integrando.se/plataforma/loja-integrada/"},"title":"Meu Pet","price":"R$ 349,00"},{"picture":{"image":"https://integrando.se//files/produtos/1993/420/doce-elegancia-theme.jpg","link":"https://integrando.se/temas/e-commerce/loja-integrada/doce-elegancia-theme-1993/"},"platform":{"image":"https://integrando.se//Store/assets/images/svg-lojaintegrada.svg","link":"https://integrando.se/plataforma/loja-integrada/"},"title":"Doce Elegância Theme","price":"R$ 349,00"},{"picture":{"image":"https://integrando.se//files/produtos/1859/420/face-mask-theme.jpg","link":"https://integrando.se/temas/e-commerce/loja-integrada/face-mask-theme-1859/"},"platform":{"image":"https://integrando.se//Store/assets/images/svg-lojaintegrada.svg","link":"https://integrando.se/plataforma/loja-integrada/"},"title":"FACE MASK THEME","price":"R$ 349,00"},{"picture":{"image":"https://integrando.se//files/produtos/1854/420/doces-ou-travessuras.jpg","link":"https://integrando.se/temas/e-commerce/loja-integrada/doces-ou-travessuras-1854/"},"platform":{"image":"https://integrando.se//Store/assets/images/svg-lojaintegrada.svg","link":"https://integrando.se/plataforma/loja-integrada/"},"title":"Doces ou Travessuras","price":"R$ 349,00"},{"picture":{"image":"https://integrando.se//files/produtos/1774/420/elegant-store.png","link":"https://integrando.se/temas/e-commerce/loja-integrada/elegant-store/"},"platform":{"image":"https://integrando.se//Store/assets/images/svg-lojaintegrada.svg","link":"https://integrando.se/plataforma/loja-integrada/"},"title":"Elegant Store","price":"R$ 349,00"}],
        services: [{"picture":{"image":"https://integrando.se//files/produtos/2803/420/1611565881eu-quero-ganhar-de-presente-2803.png","link":"https://integrando.se/servicos/implantacao/layout/eu-quero-ganhar-de-presente-2803/"},"platform":{"image":"https://integrando.se//Store/assets/images/svg-lojaintegrada.svg","link":"https://integrando.se/plataforma/lojaintegrada/"},"title":"Eu quero ganhar de presente ❤️","price":"R$ 99,90 "},{"picture":{"image":"https://integrando.se//files/produtos/2802/420/1611579539sistema-de-blog-para-loja-integrada-2802.png","link":"https://integrando.se/servicos/implantacao/layout/sistema-de-blog-para-loja-integrada-2802/"},"platform":{"image":"https://integrando.se//Store/assets/images/svg-lojaintegrada.svg","link":"https://integrando.se/plataforma/lojaintegrada/"},"title":"Sistema de Conteúdo para Loja Integrada","price":"R$ 49,90 "}],
        createCard: function(){
        let card = document.createElement("article");
            card.classList.add("theme");

        return card;
        },
        init: function(){
        this.catalog.forEach(function(item){
            let card = lojaIntegradaCatalogSystem.createCard();

            card.insertAdjacentHTML('afterbegin', `
            <div class="product-header">
                <a class="tema-foto" href="${item.picture.link}"><img src="${item.picture.image}" alt="${item.title}"/></a>
                <a class="tema-plataforma" href="${item.platform.link}"><img src="${item.platform.image}"/></a>
            </div>
            <div class="product-body">
                <p>${item.title}</p>
                <strong>${item.price}</strong>
            </div>
            <div class="product-footer">
                <a class="hvr-float-shadow" href="${item.picture.link}">Ver Mais</a>
            </div>
            `);

            let target = document.querySelector(".catalogo-temas");
        
            if(target !== null){
            target.append(card);
            }
            
        });
        this.services.forEach(function(item){
            let card = lojaIntegradaCatalogSystem.createCard();

            card.insertAdjacentHTML('afterbegin', `
            <div class="product-header">
                <a class="tema-foto" href="${item.picture.link}"><img src="${item.picture.image}" alt="${item.title}"/></a>
                <a class="tema-plataforma" href="${item.platform.link}"><img src="${item.platform.image}"/></a>
            </div>
            <div class="product-body">
                <p>${item.title}</p>
                <strong>${item.price}</strong>
            </div>
            <div class="product-footer">
                <a class="hvr-float-shadow" href="${item.picture.link}">Ver Mais</a>
            </div>
            `);

            let target = document.querySelector(".catalogo-servicos");
        
            if(target !== null){
            target.append(card);
            }
            
        });
        }
    }

    let servicesSystem = {
        setClickButtons: function(){
            let buttons = document.querySelectorAll(".catalogo-buttons > button");
            
            buttons.forEach(function(item){
                item.addEventListener("click", function(e){
                    $("#c").css("display", "none")
                    window.location.hash = "#a"
                    //servicesSystem.init();
                    $(".ft.catalogo > div.c").hide();
                    let div = e.target.dataset.div;
                        div = document.querySelector(div);
                        $(div).css("display","grid")

                        window.location.hash = "#c";
                })
            })
        },
        services: function(){
            if($(window).width() < 768){
                //$('.owl-carousel').css("display", "block")

                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    items:2,
                    loop:true,
                    margin:10,
                    autoplay:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true
                });
                $('.play').on('click',function(){
                    owl.trigger('play.owl.autoplay',[3000])
                })
                $('.stop').on('click',function(){
                    owl.trigger('stop.owl.autoplay')
                })
            }
        },
        services2: function(){
            if($(window).width() < 768){
                $('.aoferecer').css("display", "block")

                var owl = $('.aoferecer');
                owl.owlCarousel({
                    items:2,
                    loop:true,
                    margin:10,
                    autoplay:true,
                    autoplayTimeout:3000,
                    autoplayHoverPause:true
                });
                $('.play').on('click',function(){
                    owl.trigger('play.owl.autoplay',[3000])
                })
                $('.stop').on('click',function(){
                    owl.trigger('stop.owl.autoplay')
                })
            }
        },
        init: function(){
            this.setClickButtons();
            setTimeout(function(){
                //servicesSystem.services2();
                //servicesSystem.services();
            }, 1000)
        }
    }

    servicesSystem.init();
    headerSystem.init();
    lojaIntegradaCatalogSystem.init()

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
    });

    $(window).scroll(function(target) {
        if($(window).scrollTop() < 300){
            $(".flaotPage").hide();
        }else{
            $(".flaotPage").show();
        }
    });

    function asnwer() {
        let questionA = Math.floor(Math.random() * 100) + 1; 
        let questionB = Math.floor(Math.random() * 100) + 1; 
        $("#question").html(`Quanto é <span class='question-a'>${questionA}</span> + <span class='question-b'>${questionB}</span>?`)

        $("form").on("submit", function(e){
            e.preventDefault();
            let form = {
                nome:       e.target[0].value,
                email:      e.target[1].value,
                telefone:   e.target[2].value,
                empresa:    e.target[3].value,
                mensagem:   e.target[4].value,
                answer:     parseInt(e.target[5].value)
            }
            if(
                form.nome !== '' &&
                form.email !== '' &&
                form.telefone !== '' &&
                form.empresa !== '' &&
                form.mensagem !== '' &&
                form.answer !== ''
            ){
                if(parseInt($(".question-a").text()) + parseInt($(".question-b").text()) === form.answer){
                    $.ajax({
                        type: "POST",
                        url: "assets/api/api.php",
                        data: {data: form},
                        success: function(data){
                            let status = JSON.parse(data);

                            if(status){
                                alert("mensagem enviada com sucesso, retornaremos o contato em breve através dos meios de contato que foi fornecido no formulário")
                            }else{
                                alert("Houve um erro ao enviar o email");
                            }
                        }
                      });
                }else{
                    alert("Questão incorreta, verifique a resposta");
                }
            }else{
                alert("Preecha todos os campos");
            }
        });
    }

    asnwer();
    
});