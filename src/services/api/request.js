const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const post = async (url, parameters, mode='no-cors') => (
  await fetch(url, {
    method: 'POST',
    mode,
    headers,
    body: JSON.stringify(parameters)
  })
);
