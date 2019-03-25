const write = (url, data) => {
  console.log('url: ' + url);
  console.log('data:' +  JSON.stringify(data));
}
export const post = write;

export const sendBeacon = write;
