export const extractIds = (urls: string[]): number[] => {
  return urls
    .map(url => {
      const id = url.split('/').pop();
      return id ? parseInt(id) : null;
    })
    .filter((id): id is number => id !== null);
}