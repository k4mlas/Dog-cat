const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const arrow = document.querySelector('.header__arrow-icon');
const textOne = document.querySelector('.header__text-title');
const span = document.querySelector('.andSpan');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

white = () => {
	textOne.style.color = '#e0d7d7';
};
black = () => {
	textOne.style.color = 'black';
};
whiteAndOne = () => {
	span.style.color = 'black';
};
whiteAndTwo = () => {
	span.style.color = '#e0d7d7';
};

arrow.addEventListener('mouseover', white);
arrow.addEventListener('mouseleave', black);
arrow.addEventListener('mouseover', whiteAndOne);
arrow.addEventListener('mouseleave', whiteAndTwo);

handleCurrentYear();
