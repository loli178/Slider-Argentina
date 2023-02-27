const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const container = document.querySelector('.container');
  const banner = document.querySelector('.banner');
  const slideshow = document.querySelector('.slideshow-wrapper');
  const slide = document.querySelector('.slideshow');

  container.style.backgroundColor = 'transparent';
  banner.style.display = 'none';
  slideshow.style.opacity = '1';
  slideshow.style.visibility = 'visible';
  slide.style.cssText = 'animation: slideAnim 90s infinite';
});
// Buenos Aires
// Catamarca
// Chaco
// Chubut
// Córdoba
// Corrientes
// Entre Ríos
// Formosa
// Jujuy
// La Pampa
// La Rioja
// Mendoza
// Misiones
// Neuquén
// Río Negro
// Salta
// San Juan
// San Luis
// Santa Cruz
// Santa Fe
// Santiago del Estero
// Tierra del Fuego, Antártida e Islas del Atlántico Sur
// Tucumán
