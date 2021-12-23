export const formatPrice = (price) => { // FUNCION DE UTILIDAD
  return new Intl.NumberFormat('es-AR', {
    style:'currency',
    currency: 'ARS',
  }).format(price);
};