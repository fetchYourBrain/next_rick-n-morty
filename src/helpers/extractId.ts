export const extractIds = (urls: string[] | undefined): string[] => {
  if (urls) {
    return urls.map(url => {
      const id = url.split('/').pop();
      return id !== undefined ? id : '';
    });
  }
  return [];
};
