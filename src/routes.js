/* routes.js */
export const rootPath = "/";
export const profilePath = "/profile";
export const externalApiPath = "/external-api";

export const error404Path = "/404";

export const productPath = "/product";
export const productShowPath = "/product/:id";
export const postProductPath = "/product/post";

export const buildProductShowPath = productId => `/product/${productId}`;