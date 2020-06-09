const Navigation = {
	hamburger: document.querySelector('.js-nav-hamburger'),
	navList: document.querySelector('.js-nav-list'),
	navItems: document.querySelectorAll('.js-nav-item'),

	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		const _this = this;

		if (window.innerWidth < 577) {
			this.hamburger.addEventListener('click', function () {
				_this.navList.classList.toggle('nav__list--active');
				_this.hamburger.classList.toggle('open');
			});

			this.navItems.forEach(function (item) {
				item.addEventListener('click', function () {
					_this.hamburger.classList.remove('open');
					_this.navList.classList.remove('nav__list--active');
				});
			});
		}
	},
};
Navigation.init();
const Plugins = {
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		if ($('main').hasClass('home')) {
			$(document).ready(function () {
				$('.js-twitter-slider').slick({
					dots: true,
					autoplay: true,
					autoplaySpeed: 5000,
					arrows: false,
				});
			});
		}
		if ($('main').hasClass('work')) {
			$('.centered-slider').slick({
				arrows: false,
				dots: true,
				slidesToShow: 3,
				responsive: [
					{
						breakpoint: 577,
						settings: {
							centerMode: true,
							dots: false,
							centerPadding: '18px',
							slidesToShow: 1,
						},
					},
				],
			});
		}

		if ($('main').hasClass('contact')) {
			$('.js-form-select').selectric();
		}
	},
};
Plugins.init();
const Accordion = {
	init: function () {
		this.bindEvents();
	},
	bindEvents: function () {
		if ($('main').hasClass('about')) {
			$('.js-accordion').on('click', function () {
				const $this = $(this);
				debugger;
				$this.toggleClass('accordion-active');
				$this.next().stop().slideToggle();
				$this.parent().find('.js-panel').not($this.next()).slideUp().prev().removeClass('accordion-active');
			});
		}
	},
};
Accordion.init();
AOS.init();
