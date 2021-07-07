// eslint-disable-next-line import/prefer-default-export
export const addResizeParam = (href: string): string => {
  const url = new URL(href);
  url.pathname = `/resize/276*130${url.pathname}`;
  return url.toString();
};
