export const getData = <S = unknown>(url: string): Promise<S> =>
  fetch(url, {
    method: "GET",
  }).then((res) => res.json());
