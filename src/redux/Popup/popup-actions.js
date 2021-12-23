export const CLICKED_PRODUCT = 'CLICKED_PRODUCT';

export const clickedProduct = (clickedProduct) => {
  return {
    type: CLICKED_PRODUCT,
    clickedProduct: clickedProduct,
  };
};