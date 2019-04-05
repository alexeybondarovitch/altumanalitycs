const headers = {
  'Accept': 'application/json',
  'Content-Type': 'text/plain'
};

export const post = async (url, content, mode='no-cors') => (
  await fetch(url, {
    method: 'POST',
    mode,
    headers,
    body: JSON.stringify(content)
  })
);

export const sendBeacon = (url, content) => {
  const navigator = window && window.navigator;
  const data = JSON.stringify(content);
  if (!navigator.sendBeacon || !navigator.sendBeacon(url, data)) {
    var t = new XMLHttpRequest();
    t.open('POST', url, false);
    Object.keys(headers).map(key => t.setRequestHeader(key, headers[key]));
    t.send(data);
  }
}
