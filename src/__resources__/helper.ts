export const getData = <S = unknown>(url: string): Promise<S> =>
  fetch(url, {
    method: 'GET',
  }).then((res) => {
    // fetch lehnt nur bei Netzwerkfehlern ab, nicht bei 4xx/5xx. Ohne diese
    // Pruefung wird aus einem 404 eine erfolgreich aufgeloeste Promise, die
    // das Fehlerobjekt als gueltige Daten weiterreicht - und ein Fallback,
    // der am catch haengt, greift nie.
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
    return res.json() as Promise<S>;
  });
