export const formatDate = (seconds) => {
  const fecha = new Date(seconds * 1000);
  const mes = fecha.getMonth();
  const dia = fecha.getDate();
  const year = fecha.getFullYear();
  return `${dia}/${mes + 1}/${year}`;
};