export const normalizeUrl = (host, url) => {
  const hostEndsWithSymbol = host.endsWith("/");
  const urlStartsWithSymbol = url.startsWith("/");
  if (hostEndsWithSymbol && urlStartsWithSymbol) {
    return host + url.substr(1, url.length);
  } else if (!hostEndsWithSymbol && !urlStartsWithSymbol) {
    return `${host}/${url}`;
  }

  return host + url;
};
