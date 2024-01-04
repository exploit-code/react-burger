export const setCookie = (
  name: string,
  value: string,
  props: { expires?: number | Date } = {}
): void => {
  let exp: number | Date | undefined = props.expires;
  if (typeof exp === "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = d;
    props.expires = exp;
  } else if (exp instanceof Date && exp.toUTCString()) {
    props.expires = exp;
  }
  value = encodeURIComponent(value);
  let updatedCookie = `${name}=${value}`;
  for (const [propName, propValue] of Object.entries(props)) {
    if (typeof propValue !== "boolean") {
      updatedCookie += `; ${propName}=${propValue}`;
    } else {
      updatedCookie += `; ${propName}`;
    }
  }
  if (typeof document !== "undefined") {
    document.cookie = updatedCookie;
  }
};

export const getCookie = (name: string): string | undefined => {
  if (typeof document === "undefined") return undefined;
  const matches = document.cookie.match(
    new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "$1")}=([^;]*)`)
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name: string): void => {
  if (typeof document !== "undefined") {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
};
