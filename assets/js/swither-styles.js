(function($) {
	"use strict";

	// ______________ SWITCHER-toggle ______________//

	$('.layout-setting').on("click", function(e) {
		if (!(document.querySelector('body').classList.contains('dark-mode'))) {
			$('body').addClass('dark-mode');
			$('body').removeClass('light-mode');
			$('body').removeClass('transparent-mode');
            
            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('light-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('light-header');

            $('#myonoffswitch10').prop('checked', true);
            $('#myonoffswitch14').prop('checked', true);

			localStorage.setItem('zanexdarkMode', true);
			localStorage.removeItem('zanexlightMode');
			localStorage.removeItem('zanextransparentMode');
            $('#myonoffswitch7').prop('checked', true);

		} else {
			$('body').removeClass('dark-mode');
			$('body').addClass('light-mode');
            $('#myonoffswitch8').prop('checked', true);
            $('#myonoffswitch12').prop('checked', true);

			localStorage.setItem('zanexlightMode', true);
			localStorage.removeItem('zanextransparentMode');
			localStorage.removeItem('zanexdarkMode');
            $('#myonoffswitch6').prop('checked', true);
		}
		
	
	localStorageBackup();
	checkOptions();
	});

    /*Light Theme Start*/
    $(document).on("click", '#myonoffswitch6', function () {
        if (this.checked) {
            $('body').addClass('light-mode');
            $('#myonoffswitch8').prop('checked', true);
            $('#myonoffswitch12').prop('checked', true);
            $('body').removeClass('dark-mode');

            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('dark-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('dark-header');

			localStorage.setItem("zanexlightMode", "true");
            localStorage.removeItem("zanexdarkMode");


            $('#myonoffswitch6').prop('checked', true);
            $('#myonoffswitch7').prop('checked', false);

            checkOptions();
            const root = document.querySelector(':root');
            root.style = "";
            names()
        }
        localStorageBackup();
    });
    /*Light Theme End*/

    /*Dark Theme Start*/
    $(document).on("click", '#myonoffswitch7', function () {
        if (this.checked) {
            $('body').addClass('dark-mode');

            $('#myonoffswitch10').prop('checked', true);
            $('#myonoffswitch14').prop('checked', true);
            $('body').removeClass('light-mode');
            
            $('body')?.removeClass('color-menu');
            $('body')?.removeClass('gradient-menu');
            $('body')?.removeClass('light-menu');
            $('body')?.removeClass('color-header');
            $('body')?.removeClass('gradient-header');
            $('body')?.removeClass('light-header');

			localStorage.setItem("zanexdarkMode", true);
			localStorage.removeItem("zanexlightMode");
	
			$("#myonoffswitch7").prop("checked", true);
			$("#myonoffswitch6").prop("checked", false);

            checkOptions();
            const root = document.querySelector(':root');
            root.style = "";
			names()
        }
        localStorageBackup()
    });
    /*Dark Theme End*/

	/*Light Header Start*/
    $(document).on("click", '#myonoffswitch8', function () {
        if (this.checked) {
            $('body').addClass('light-header');
            $('body').removeClass('color-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');

			localStorage.setItem("zanexLightheader", true);
			localStorage.removeItem("zanexDarkheader");
			localStorage.removeItem("zanexGradientheader");
			localStorage.removeItem("zanexColorheader");

        } else {
            $('body').removeClass('light-header');
        }
    });
    /*Light Header End*/

    /*Color Header Start*/
    $(document).on("click", '#myonoffswitch9', function () {
        if (this.checked) {
            $('body').addClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');

        localStorage.setItem("zanexColorheader", true);
        localStorage.removeItem("zanexDarkheader");
        localStorage.removeItem("zanexGradientheader");
        localStorage.removeItem("zanexLightheader");

        } else {
            $('body').removeClass('color-header');
        }
    });
    /*Color Header End*/

    /*Dark Header Start*/
    $(document).on("click", '#myonoffswitch10', function () {
        if (this.checked) {
            $('body').addClass('dark-header');
            $('body').removeClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('gradient-header');

			localStorage.setItem("zanexDarkheader", true);
			localStorage.removeItem("zanexColorheader");
			localStorage.removeItem("zanexGradientheader");
			localStorage.removeItem("zanexLightheader");

        } else {
            $('body').removeClass('dark-header');
        }
    });
    /*Dark Header End*/

    /*Gradient Header Start*/
    $(document).on("click", '#myonoffswitch11', function () {
        if (this.checked) {
            $('body').addClass('gradient-header');
            $('body').removeClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('dark-header');

			localStorage.setItem("zanexGradientheader", true);
			localStorage.removeItem("zanexColorheader");
			localStorage.removeItem("zanexDarkheader");
			localStorage.removeItem("zanexLightheader");

        } else {
            $('body').removeClass('gradient-header');
        }
    });
    /*Dark Header End*/

	/*Light LeftMenu Start*/
    $(document).on("click", '#myonoffswitch12', function () {
        if (this.checked) {
            $('body').addClass('light-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');

			localStorage.setItem("zanexLightmenu", true);
			localStorage.removeItem("zanexDarkmenu");
			localStorage.removeItem("zanexGradientmenu");
			localStorage.removeItem("zanexColormenu");

        } else {
            $('body').removeClass('light-menu');
        }
    });
    /*Light LeftMenu End*/

    /*Color LeftMenu Start*/
    $(document).on("click", '#myonoffswitch13', function () {
        if (this.checked) {
            $('body').addClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');

			localStorage.setItem("zanexColormenu", true);
			localStorage.removeItem("zanexDarkmenu");
			localStorage.removeItem("zanexGradientmenu");
			localStorage.removeItem("zanexLightmenu");
			localStorage.removeItem("zanexthemestyle");

        } else {
            $('body').removeClass('color-menu');
        }
    });
    /*Color LeftMenu End*/

    /*Dark LeftMenu Start*/
    $(document).on("click", '#myonoffswitch14', function () {
        if (this.checked) {
            $('body').addClass('dark-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('gradient-menu');

        localStorage.setItem("zanexDarkmenu", true);
        localStorage.removeItem("zanexColormenu");
        localStorage.removeItem("zanexGradientmenu");
        localStorage.removeItem("zanexLightmenu");
        } else {
            $('body').removeClass('dark-menu');
        }
    });
    /*Dark LeftMenu End*/

    /*Gradient LeftMenu Start*/
    $(document).on("click", '#myonoffswitch15', function () {
        if (this.checked) {
            $('body').addClass('gradient-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');

			localStorage.setItem("zanexGradientmenu", true);
			localStorage.removeItem("zanexColormenu");
			localStorage.removeItem("zanexDarkmenu");
			localStorage.removeItem("zanexLightmenu");

        } else {
            $('body').removeClass('gradient-menu');
        }
    });
    /*Gradient LeftMenu End*/

	/*Full Width Layout Start*/
    $('#myonoffswitch16').click(function () {
        if (this.checked) {
            $('body').addClass('layout-fullwidth');
            $('body').removeClass('layout-boxed');
			// responsive();
			// checkHoriMenu();
			if (document.querySelector('body').classList.contains('horizontal')  && !document.querySelector('body').classList.contains('login-img')) {
				checkHoriMenu();
			}

			localStorage.setItem("zanexfullwidth", true);
			localStorage.removeItem("zanexboxedwidth");
        }
    });
    /*Full Width Layout End*/

    /*Boxed Layout Start*/
    $('#myonoffswitch17').click(function () {
        if (this.checked) {
            $('body').addClass('layout-boxed');
            $('body').removeClass('layout-fullwidth');
			// responsive();
			// checkHoriMenu();
			if(document.querySelector('.page').classList.contains('login-page') !== true){
					checkHoriMenu();
					responsive();
				}

			localStorage.setItem("zanexboxedwidth", true);
			localStorage.removeItem("zanexfullwidth");
        }
    });
    /*Boxed Layout End*/

    /*Header-Position Styles Start*/
    $('#myonoffswitch18').click(function () {
        if (this.checked) {
            $('body').addClass('fixed-layout');
            $('body').removeClass('scrollable-layout');

			localStorage.setItem("zanexfixed", true);
			localStorage.removeItem("zanexscrollable");
        }
    });
    $('#myonoffswitch19').click(function () {
        if (this.checked) {
            $('body').addClass('scrollable-layout');
            $('body').removeClass('fixed-layout');

			localStorage.setItem("zanexscrollable", true);
			localStorage.removeItem("zanexfixed");
        }
    });
    /*Header-Position Styles End*/

	/*Default Sidemenu Start*/
    $(document).on("click", '#myonoffswitch20', function () {
        if (this.checked) {
            $('body').addClass('default-menu');
            $('body').removeClass('sidenav-toggled');
            hovermenu();
            $('body').removeClass('icontext-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');

			localStorage.setItem("zanexdefaultmenu", true);
			localStorage.removeItem("zanexclosedmenu");
			localStorage.removeItem("zanexicontextmenu");
			localStorage.removeItem("zanexiconoverlay");
			localStorage.removeItem("zanexhoversubmenu");
			localStorage.removeItem("zanexhoversubmenu1");
        }
    });
    /*Default Sidemenu End*/

    /*Icon Overlay Sidemenu Start*/
    $('#myonoffswitch21').click(function () {
        if (this.checked) {
            $('body').addClass('icon-overlay');
            // hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');

			localStorage.setItem("zanexiconoverlay", true);
			localStorage.removeItem("zanexdefaultmenu");
			localStorage.removeItem("zanexclosedmenu");
			localStorage.removeItem("zanexicontextmenu");
			localStorage.removeItem("zanexhoversubmenu");
			localStorage.removeItem("zanexhoversubmenu1");
			if(document.querySelector('.page').classList.contains('login-page') !== true){	
				hovermenu();	
			}
        }
    });
    /*Icon Overlay Sidemenu End*/

    /*Icon Text Sidemenu Start*/
    $('#myonoffswitch22').click(function () {
        if (this.checked) {
            $('body').addClass('icontext-menu');
            // icontext();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('default-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');

			localStorage.setItem("zanexicontextmenu", true);
			localStorage.removeItem("zanexdefaultmenu");
			localStorage.removeItem("zanexclosedmenu");
			localStorage.removeItem("zanexiconoverlay");
			localStorage.removeItem("zanexhoversubmenu");
			localStorage.removeItem("zanexhoversubmenu1");
			if(document.querySelector('.page').classList.contains('login-page') !== true){	
				icontext();	
			}
        }
    });
    /*Icon Text Sidemenu End*/

    /*Closed Sidemenu Start*/
    $('#myonoffswitch23').click(function () {
        if (this.checked) {
            $('body').addClass('closed-leftmenu');
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
        
			localStorage.setItem("zanexclosedmenu", true);
			localStorage.removeItem("zanexdefaultmenu");
			localStorage.removeItem("zanexicontextmenu");
			localStorage.removeItem("zanexiconoverlay");
			localStorage.removeItem("zanexhoversubmenu");
			localStorage.removeItem("zanexhoversubmenu1");
        }
    });
    /*Closed Sidemenu End*/

    /*Hover Submenu Start*/
    $('#myonoffswitch24').click(function () {
        if (this.checked) {
            $('body').addClass('hover-submenu');
            // hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');

			localStorage.setItem("zanexhoversubmenu", true);
			localStorage.removeItem("zanexdefaultmenu");
			localStorage.removeItem("zanexclosedmenu");
			localStorage.removeItem("zanexicontextmenu");
			localStorage.removeItem("zanexiconoverlay");
			localStorage.removeItem("zanexhoversubmenu1");
			if(document.querySelector('.page').classList.contains('login-page') !== true){	
				hovermenu();	
			}
        }
    });
    /*Hover Submenu End*/

    /*Hover Submenu Style 1 Start*/
    $('#myonoffswitch25').click(function () {
        if (this.checked) {
            $('body').addClass('hover-submenu1');
            // hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('default-menu');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('icontext-menu');
            $('.app-sidebar').removeClass('sidemenu-scroll');
        
			localStorage.setItem("zanexhoversubmenu1", true);
			localStorage.removeItem("zanexdefaultmenu");
			localStorage.removeItem("zanexclosedmenu");
			localStorage.removeItem("zanexicontextmenu");
			localStorage.removeItem("zanexiconoverlay");
			localStorage.removeItem("zanexhoversubmenu");
			if(document.querySelector('.page').classList.contains('login-page') !== true){	
				hovermenu();	
			}
			
        }
    });
    /*Hover Submenu Style 1 End*/

})(jQuery);

$(function () {
	/***************** Horizontal HAs Class START *********************/
	let bodyhorizontal = $('body').hasClass('horizontal');
	if (bodyhorizontal) {
		// ActiveSubmenu();
		if(window.innerWidth>=992){
			let li = document.querySelectorAll('.side-menu li')
			li.forEach((e, i) => {
				e.classList.remove('is-expanded')
			})
			var animationSpeed = 300;
			// first level
			var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
			var ul = parent.find('ul:visible').slideUp(animationSpeed);
			ul.removeClass('open');
			var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
			var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
			ul1.removeClass('open');
		}
		$('body').addClass('horizontal');
		$(".main-content").addClass("hor-content");
		$(".main-content").removeClass("app-content");
		$(".main-container").addClass("container");
		$(".main-container").removeClass("container-fluid");
		$(".app-header").addClass("hor-header");
		$(".hor-header").removeClass("app-header");
		$(".app-sidebar").addClass("horizontal-main")
		$(".main-sidemenu").addClass("container")
		$('body').removeClass('sidebar-mini');
		$('body').removeClass('sidenav-toggled');
		$('body').removeClass('horizontal-hover');
		$('body').removeClass('default-menu');
		$('body').removeClass('icontext-menu');
		$('body').removeClass('icon-overlay');
		$('body').removeClass('closed-leftmenu');
		$('body').removeClass('hover-submenu');
		$('body').removeClass('hover-submenu1');
		// // To enable no-wrap horizontal style
		$('#slide-left').removeClass('d-none');
		$('#slide-right').removeClass('d-none');
		localStorage.setItem("zanexhorizontal", "true");
		localStorage.removeItem("zanexsidebarMini");
		localStorage.removeItem("zanexhorizontalHover");
		document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap');
		// To enable wrap horizontal style
		// $('#slide-left').addClass('d-none');
		// $('#slide-right').addClass('d-none');
		// document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
	}
	/***************** Horizontal HAs Class END *********************/
	
	/***************** Horizontal Hover HAs Class START *********************/
	let bodyhorizontalHover = $('body').hasClass('horizontal-hover');
	if (bodyhorizontalHover) {
		if(window.innerWidth>=992){
			let li = document.querySelectorAll('.side-menu li')
			li.forEach((e, i) => {
				e.classList.remove('is-expanded')
			})
			var animationSpeed = 300;
			// first level
			var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
			var ul = parent.find('ul:visible').slideUp(animationSpeed);
			ul.removeClass('open');
			var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
			var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
			ul1.removeClass('open');
		}
		$('body').addClass('horizontal-hover');
		$('body').addClass('horizontal');
		// $('#slide-left').addClass('d-none');
		// $('#slide-right').addClass('d-none');
		// 	document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
		$('#slide-left').addClass('d-none');
		$('#slide-right').addClass('d-none');
		document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap');
		$(".main-content").addClass("hor-content");
		$(".main-content").removeClass("app-content");
		$(".main-container").addClass("container");
		$(".main-container").removeClass("container-fluid");
		$(".app-header").addClass("hor-header");
		$(".app-header").removeClass("app-header");
		$(".app-sidebar").addClass("horizontal-main")
		$(".main-sidemenu").addClass("container")
		$('body').removeClass('sidebar-mini');
		$('body').removeClass('sidenav-toggled');
		$('body').removeClass('default-menu');
		$('body').removeClass('icontext-menu');
		$('body').removeClass('icon-overlay');
		$('body').removeClass('closed-leftmenu');
		$('body').removeClass('hover-submenu');
		$('body').removeClass('hover-submenu1');
		localStorage.setItem("zanexhorizontalHover", "true");
		localStorage.removeItem("zanexsidebarMini");
		localStorage.removeItem("zanexhorizontal");
		// checkHoriMenu();
		// responsive();
	}
	
	/***************** Horizontal Hover HAs Class END *********************/
	
	/***************** RTL HAs Class START *********************/
	let bodyRtl = $('body').hasClass('rtl');
	if (bodyRtl) {
		$('body').addClass('rtl');

		$('#slide-left').removeClass('d-none');
		$('#slide-right').removeClass('d-none');
		$("html[lang=en]").attr("dir", "rtl");
		$(".select2-container").attr("dir", "rtl");
		$("head link#style").attr("href", $(this));
		$('body').removeClass('ltr');
		(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel, function (index, element) {
			// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
		});
		localStorage.setItem('zanexrtl', true)
		localStorage.removeItem('zanexltr')
	}
	/***************** RTL HAs Class END *********************/


	/***************** CLOSEDMENU HAs Class *********************/
	let bodyclosed = $('body').hasClass('closed-leftmenu');
	  if (bodyclosed) {
		  $('body').addClass('closed-leftmenu');
		  $('body').addClass('sidenav-toggled');
	  if(document.querySelector('.page').classList.contains('login-page') !== true){
		hovermenu();
	  }
	  }
	/***************** CLOSEDMENU HAs Class *********************/
  
	/***************** ICONTEXT MENU HAs Class *********************/
	  let bodyicontext = $('body').hasClass('icontext-menu');
	  if (bodyicontext) {
		  $('body').addClass('icontext-menu');
		  $('body').addClass('sidenav-toggled');
		if(document.querySelector('.page').classList.contains('login-page') !== true){
			icontext();
		}
	  }
	  /***************** ICONTEXT MENU HAs Class *********************/
  
	  /***************** ICONOVERLAY MENU HAs Class *********************/
	  let bodyiconoverlay = $('body').hasClass('icon-overlay');
	  if (bodyiconoverlay) {
		  $('body').addClass('icon-overlay');
		  $('body').addClass('sidenav-toggled');
	  if(document.querySelector('.page').classList.contains('login-page') !== true){
		hovermenu();
	  }
	  }
	  /***************** ICONOVERLAY MENU HAs Class *********************/
  
	  /***************** HOVER-SUBMENU HAs Class *********************/
	  let bodyhover = $('body').hasClass('hover-submenu');
	  if (bodyhover) {
		  $('body').addClass('hover-submenu');
		  $('body').addClass('sidenav-toggled');
	  if(document.querySelector('.page').classList.contains('login-page') !== true){
		hovermenu();
	  }
	  }
	  /***************** HOVER-SUBMENU HAs Class *********************/
  
	  /***************** HOVER-SUBMENU HAs Class *********************/
	  let bodyhover1 = $('body').hasClass('hover-submenu1');
	  if (bodyhover1) {
		  $('body').addClass('hover-submenu1');
		  $('body').addClass('sidenav-toggled');
	  if(document.querySelector('.page').classList.contains('login-page') !== true){
		hovermenu();
	  }
	  }
	  /***************** HOVER-SUBMENU HAs Class *********************/
});


	// RTL STYLE START
	$(document).on("click", '#myonoffswitch5', function () {
		if (this.checked) {
			$('body').addClass('rtl');

			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$("html[lang=en]").attr("dir", "rtl");
			$('body').removeClass('ltr');
			$("head link#style").attr("href", $(this));
			$(".select2-container").attr("dir", "rtl");

			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = true; //don't know if both are necessary
				carouselData.options.rtl = true;
				$(element).trigger('refresh.owl.carousel');
			});
			localStorage.setItem('zanexrtl', true)
			localStorage.removeItem('zanexltr')
		}
	});
	// RTL STYLE END
	
	// LTR STYLE START
	$(document).on("click", '#myonoffswitch4', function () {
		if (this.checked) {
			$('body').addClass('ltr');

			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$("html[lang=en]").attr("dir", "ltr");
			$('body').removeClass('rtl');
			$("head link#style").attr("href", $(this));
			$(".select2-container").attr("dir", "ltr");
			(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
			var carousel = $('.owl-carousel');
			$.each(carousel, function (index, element) {
				// element == this
				var carouselData = $(element).data('owl.carousel');
				carouselData.settings.rtl = false; //don't know if both are necessary
				carouselData.options.rtl = false;
				$(element).trigger('refresh.owl.carousel');
			});
			localStorage.setItem('zanexltr', true)
			localStorage.removeItem('zanexrtl')
		}
	});
	// LTR STYLE END

	//vertical
	$(document).on("click", '#myonoffswitch1', function () {
		if (this.checked) {
			ActiveSubmenu();
			$('body').removeClass('horizontal');
			$('body').removeClass('horizontal-hover');
			$(".main-content").removeClass("hor-content");
			$(".main-content").addClass("app-content");
			$(".main-container").removeClass("container");
			$(".main-container").addClass("container-fluid");
			$(".app-header").removeClass("hor-header");
			$(".hor-header").addClass("app-header");
			$(".app-sidebar").removeClass("horizontal-main")
			$(".main-sidemenu").removeClass("container")
			$('#slide-left').removeClass('d-none');
			$('#slide-right').removeClass('d-none');
			$('body').addClass('sidebar-mini');
			localStorage.removeItem("zanexhorizontal");
			localStorage.removeItem("zanexhorizontalHover");
			// localStorage.setItem("sidebar-mini", "True");
			responsive();
			
			if(!(document.querySelector('.icontext-menu')!== null)){
				hovermenu();
			}
			
		} else {
			$('body').removeClass('sidebar-mini');
			localStorage.setItem("zanexsidebar-mini", "False");
		}
	});

	// HORIZONTAL
    $(document).on("click", '#myonoffswitch2', function () {
        if (this.checked) {
            // if( !document.querySelector('.login-img') ){
            //     ActiveSubmenu();
            //     checkHoriMenu();
            //     responsive();
            // }
            if(window.innerWidth>=992){
                let li = document.querySelectorAll('.side-menu li')
                li.forEach((e, i) => {
                    e.classList.remove('is-expanded')
                })
                var animationSpeed = 300;
                // first level
                var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
                var ul = parent.find('ul:visible').slideUp(animationSpeed);
                ul.removeClass('open');
                var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
                var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
                ul1.removeClass('open');
            }
			checkHoriMenu();
            $('body').addClass('horizontal');
            $(".main-content").addClass("hor-content");
            $(".main-content").removeClass("app-content");
            $(".main-container").addClass("container");
            $(".main-container").removeClass("container-fluid");
            $(".app-header").addClass("hor-header");
            $(".hor-header").removeClass("app-header");
            $(".app-sidebar").addClass("horizontal-main")
            $(".main-sidemenu").addClass("container")
            $('body').removeClass('sidebar-mini');
            $('body').removeClass('sidenav-toggled');
            $('body').removeClass('horizontal-hover');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('icon-overlay');
            $('body').removeClass('closed-leftmenu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            // // To enable no-wrap horizontal style
            $('#slide-left').removeClass('d-none');
            $('#slide-right').removeClass('d-none');
            localStorage.setItem("zanexhorizontal", "true");
            localStorage.removeItem("zanexsidebarMini");
            localStorage.removeItem("zanexhorizontalHover");
			document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap');
            // To enable wrap horizontal style
            // $('#slide-left').addClass('d-none');
            // $('#slide-right').addClass('d-none');
			// document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
        }
    });
    // HORIZONTAL END

	// HORIZONTAL HOVER
	$(document).on("click", '#myonoffswitch111', function () {
		if (this.checked) {
			if( !document.querySelector('.login-img') ){
				checkHoriMenu();
				responsive();
			}
			if(window.innerWidth>=992){
				let li = document.querySelectorAll('.side-menu li')
				li.forEach((e, i) => {
					e.classList.remove('is-expanded')
				})
				var animationSpeed = 300;
				// first level
				var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
				var ul = parent.find('ul:visible').slideUp(animationSpeed);
				ul.removeClass('open');
				var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
				var ul1 = parent1.find('ul:visible').slideUp(animationSpeed);
				ul1.removeClass('open');
			}
			$('body').addClass('horizontal-hover');
			$('body').addClass('horizontal');
			// $('#slide-left').addClass('d-none');
			// $('#slide-right').addClass('d-none');
			// 	document.querySelector('.horizontal .side-menu').style.flexWrap = 'wrap'
			$('#slide-left').addClass('d-none');
			$('#slide-right').addClass('d-none');
			document.querySelector('.horizontal .side-menu')?.classList.add('flex-nowrap');
			$(".main-content").addClass("hor-content");
			$(".main-content").removeClass("app-content");
			$(".main-container").addClass("container");
			$(".main-container").removeClass("container-fluid");
			$(".app-header").addClass("hor-header");
			$(".app-header").removeClass("app-header");
			$(".app-sidebar").addClass("horizontal-main")
			$(".main-sidemenu").addClass("container")
			$('body').removeClass('sidebar-mini');
			$('body').removeClass('sidenav-toggled');
			$('body').removeClass('default-menu');
			$('body').removeClass('icontext-menu');
			$('body').removeClass('icon-overlay');
			$('body').removeClass('closed-leftmenu');
			$('body').removeClass('hover-submenu');
			$('body').removeClass('hover-submenu1');
			localStorage.setItem("zanexhorizontalHover", "true");
			localStorage.removeItem("zanexsidebarMini");
			localStorage.removeItem("zanexhorizontal");
		} 
	});
	// HORIZONTAL HOVER END


function checkOptions() {

	//  dark-theme 
	if (document.querySelector('body').classList.contains('dark-mode')) {
		$('#myonoffswitch7').prop('checked', true);
	}
	//  light-theme 
	if (document.querySelector('body').classList.contains('light-mode')) {
		$('#myonoffswitch6').prop('checked', true);
	}
    // rtl
	if (document.querySelector('body').classList.contains('rtl')) {
		$('#myonoffswitch5').prop('checked', true);
	}
	// horizontal
	if (document.querySelector('body').classList.contains('horizontal')) {
		$('#myonoffswitch2').prop('checked', true);
	}
	// horizontal-hover
	if (document.querySelector('body').classList.contains('horizontal-hover')) {
		$('#myonoffswitch111').prop('checked', true);
	}

	// light header 
	if (document.querySelector('body').classList.contains('light-header')) {
		$('#myonoffswitch8').prop('checked', true);
	}
	// color header 
	if (document.querySelector('body').classList.contains('color-header')) {
		$('#myonoffswitch9').prop('checked', true);
	}
	// gradient header 
	if (document.querySelector('body').classList.contains('gradient-header')) {
		$('#myonoffswitch11').prop('checked', true);
	}
	// dark header 
	if (document.querySelector('body').classList.contains('dark-header')) {
		$('#myonoffswitch10').prop('checked', true);
	}

	// light menu
	if (document.querySelector('body').classList.contains('light-menu')) {
		$('#myonoffswitch12').prop('checked', true);
	}
	// color menu
	if (document.querySelector('body').classList.contains('color-menu')) {
		$('#myonoffswitch13').prop('checked', true);
	}
	// gradient menu
	if (document.querySelector('body').classList.contains('gradient-menu')) {
		$('#myonoffswitch15').prop('checked', true);
	}
	// dark menu
	if (document.querySelector('body').classList.contains('dark-menu')) {
		$('#myonoffswitch14').prop('checked', true);
	}
}
checkOptions();

function resetData() {
	$('#myonoffswitch3').prop('checked', true);
	$('#myonoffswitch6').prop('checked', true);
	$('#myonoffswitch4').prop('checked', true);
	$('#myonoffswitch1').prop('checked', true);
	$('#myonoffswitch8').prop('checked', true);
	$('#myonoffswitch5').prop('checked', false);
	$('#myonoffswitch10').prop('checked', false);
	$('#myonoffswitch9').prop('checked', false);
	$('#myonoffswitch11').prop('checked', false);
	$('#myonoffswitch12').prop('checked', true);
	$('#myonoffswitch13').prop('checked', false);
	$('#myonoffswitch14').prop('checked', false);
	$('#myonoffswitch15').prop('checked', false);
	$('#myonoffswitch16').prop('checked', true);
	$('#myonoffswitch17').prop('checked', false);
	$('#myonoffswitch18').prop('checked', true);
	$('body')?.removeClass('bg-img4');
	$('body')?.removeClass('bg-img1');
	$('body')?.removeClass('bg-img2');
	$('body')?.removeClass('bg-img3');
	$('body')?.removeClass('dark-mode');
	$('body')?.removeClass('dark-menu');
	$('body')?.removeClass('color-menu');
	$('body')?.removeClass('gradient-menu');
	$('body')?.removeClass('dark-header');
	$('body')?.removeClass('color-header');
	$('body')?.removeClass('gradient-header');
	$('body')?.removeClass('layout-boxed');
	$('body')?.removeClass('icontext-menu');
	$('body')?.removeClass('icon-overlay');
	$('body')?.removeClass('closed-leftmenu');
	$('body')?.removeClass('hover-submenu');
	$('body')?.removeClass('hover-submenu1');
	$('body')?.removeClass('sidenav-toggled');
	$('body')?.removeClass('scrollable-layout');
	$('body')?.removeClass('rtl');
	$('body')?.addClass('ltr');

	document.querySelector('html').setAttribute("dir","ltr");
	$(".select2-container").attr("dir", "ltr");

	// resetting horizontal to vertical
    $('body').removeClass('horizontal');
    $('body').removeClass('horizontal-hover');
    $(".main-content").removeClass("hor-content");
    $(".main-content").addClass("app-content");
    $(".main-container").removeClass("container");
    $(".main-container").addClass("container-fluid");
    $(".app-header").removeClass("hor-header");
    $(".hor-header").addClass("app-header");
    $(".app-sidebar").removeClass("horizontal-main")
    $(".app-sidebar").removeClass("fixed-header")
    $(".main-sidemenu").removeClass("container")
    $(".slide-menu").removeClass("ps")
    $(".slide-menu").removeClass("ps--active-y")
    $('#slide-left').removeClass('d-none');
    $('#slide-right').removeClass('d-none');
    $('body').addClass('sidebar-mini');

   
    
    $("head link#style").attr("href", $(this));
    (document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
}

	/***************** Add Switcher Classes *********************/
	//LTR & RTL
	if (!localStorage.getItem('zanexrtl') && !localStorage.getItem('zanexltr')) {

		/***************** RTL *********************/
		// $('body').addClass('rtl');
		/***************** RTL *********************/
		/***************** LTR *********************/
		// $('body').addClass('ltr');
		/***************** LTR *********************/

	}
	//Light-mode & Dark-mode
	if (!localStorage.getItem('zanexlightMode') && !localStorage.getItem('zanexdarkMode')) {
		/***************** Light THEME *********************/
		// $('body').addClass('light-theme');
		/***************** Light THEME *********************/

		/***************** DARK THEME *********************/
		// $('body').addClass('dark-theme');
		// $('body').removeClass('light-theme');
		/***************** Dark THEME *********************/
	}

	//Vertical-menu & Horizontal-menu
	if (!localStorage.getItem('zanexvertical') && !localStorage.getItem('zanexhorizontal') && !localStorage.getItem('zanexhorizontalHover')) {
		/* Horizontal Menu Start */
			// $('body').addClass('horizontal');
			// if(document.querySelector('.page').classList.contains('login-page') !== true){
			// 	checkHoriMenu();
			// }
		/*Horizontal Menu End */

		/***************** Horizontal-Hover THEME *********************/
		// $('body').addClass('horizontal-hover');
		// if(document.querySelector('.page').classList.contains('login-page') !== true){
		// 	checkHoriMenu();
		// }
		/***************** Horizontal-Hover THEME *********************/
	}

	//Vertical Layout Style
	if (!localStorage.getItem('zanexdefaultmenu') && !localStorage.getItem('zanexclosedmenu') && !localStorage.getItem('zanexicontextmenu')&& !localStorage.getItem('zanexsideiconmenu')&& !localStorage.getItem('zanexhoversubmenu')&& !localStorage.getItem('zanexhoversubmenu1')) {
		/**Default-Menu**/
		// $('body').addClass('default-menu');
		// hovermenu();
		/**Default-Menu**/

		/**closed-Menu**/
		// $('body').addClass('closed-leftmenu');
		// hovermenu();
		// $('body').addClass('sidenav-toggled');
		/**closed-Menu**/

		/**Icon-Text-Menu**/
		// $('body').addClass('icontext-menu');
		// $('body').addClass('sidenav-toggled');
		// if(document.querySelector('.page').classList.contains('login-page') !== true){
		// 		icontext();
		// }

		/**Icon-Text-Menu**/

		/**Icon-Overlay-Menu**/
		// $('body').addClass('icon-overlay');
		// $('body').addClass('sidenav-toggled');
		// if(document.querySelector('.page').classList.contains('login-page') !== true){
		// 	hovermenu();
		// }
		/**Icon-Overlay-Menu**/

		/**Hover-Sub-Menu**/
		// $('body').addClass('hover-submenu');
		// $('body').addClass('main-sidebar-hide');
		// if(document.querySelector('.page').classList.contains('login-page') !== true){
		// 	hovermenu();
		// }
		/**Hover-Sub-Menu**/

		/**Hover-Sub-Menu1**/
		// $('body').addClass('hover-submenu1');
		// $('body').addClass('main-sidebar-hide');
		// if(document.querySelector('.page').classList.contains('login-page') !== true){
		// 	hovermenu();
		// }
		/**Hover-Sub-Menu1**/
	}

	//Boxed Layout Style
	if (!localStorage.getItem('zanexfullwidth') && !localStorage.getItem('zanexboxedwidth')) {
	// $('body').addClass('layout-boxed');
	}

	//Scrollable-Layout Style
	if (!localStorage.getItem('zanexfixed') && !localStorage.getItem('zanexscrollable')) {
		/* Header-Scrollable Start */
			// $('body').addClass('scrollable-layout');
		/* Header-Scrollable End */

		/* Header-Fixed Start */
			// $('body').addClass('fixed-layout');
		/* Header-Fixed End */
	}


	//Menu Styles
	if (!localStorage.getItem('zanexlightmenu') && !localStorage.getItem('zanexcolormenu') && !localStorage.getItem('zanexdarkmenu') && !localStorage.getItem('zanexgradientmenu')) {
		/**Light-menu**/
		// $('body').addClass('light-menu');
		// $('body').removeClass('dark-menu');
		/**Light-menu**/

		/**Color-menu**/
		// $('body').addClass('color-menu');
		// $('body').removeClass('dark-menu');
		/**Color-menu**/

		/**Dark-menu**/
		// $('body').addClass('dark-menu');
		/**Dark-menu**/
	}
	//Header Styles
	if (!localStorage.getItem('zanexlightheader') && !localStorage.getItem('zanexcolorheader') && !localStorage.getItem('zanexdarkheader') && !localStorage.getItem('zanexgradientheader')) {
		/**Light-Header**/
		// $('body').addClass('light-header');
		/**Light-Header**/

		/**Color-Header**/
		// $('body').addClass('color-header');
		/**Color-Header**/


		/**Dark-Header**/
		// $('body').addClass('header-dark');
		/**Dark-Header**/

	}
	/***************** Add Switcher Classes *********************/