export const setCookie = (name, value, props = {}) => {
  let exp = props.expires;
  if (typeof exp === "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp instanceof Date && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = `${name}=${value}`;
  for (const [propName, propValue] of Object.entries(props)) {
    if (propValue !== true) {
      updatedCookie += `; ${propName}=${propValue}`;
    } else {
      updatedCookie += `; ${propName}`;
    }
  }
  if (typeof document !== "undefined") {
    document.cookie = updatedCookie;
  }
};

export const getCookie = (name) => {
  if (typeof document === "undefined") return undefined;
  // eslint-disable-next-line
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1")}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name) => {
  if (typeof document !== "undefined") {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};