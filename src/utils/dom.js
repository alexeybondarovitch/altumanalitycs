export const getDomElementString = el => {
  const elValues = [el.tagName];
  for (let i = 0; i < el.attributes.length; i++) {
    elValues.push(el.attributes[i].nodeName);
    elValues.push(el.attributes[i].nodeValue);
  }

  let nonEmptyValues = elValues.filter(s => !!s);

  nonEmptyValues.sort();
  let domElementStr = nonEmptyValues.join("");
  domElementStr = domElementStr.replace(/\s+/g, "");
  return domElementStr;
};
