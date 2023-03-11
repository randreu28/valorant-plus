export default async function fetcher(api, setData) {
  const rawData = await fetch(api);
  const data = await rawData.json();

  setData(data);
}
