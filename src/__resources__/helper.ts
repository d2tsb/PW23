export const getData = <S = any>(url: string): Promise<S> =>
  fetch(url, {
    method: "GET",
  }).then((res) => res.json());
