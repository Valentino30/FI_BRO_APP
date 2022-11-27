import Papa from "papaparse";

export const fetchCsv = async () => {
  const response = await fetch("sp500.csv");
  const reader = response?.body?.getReader();
  const result = await reader?.read();
  const decoder = new TextDecoder("utf-8");
  const csv = await decoder.decode(result?.value);
  return csv;
};

export const GetData = async () => {
  const data = Papa.parse(await fetchCsv(), {
    delimiter: ",",
    header: true,
  });
  return data;
};

// export const fetchData = async () => {
//   const data = await axios.get(
//     "https://api.polygon.io/v2/aggs/ticker/SP/range/1/day/2021-06-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=Umlk2WnTHnjU0wfJzZJjyZeId4YeW8CQ"
//   );

//   const average = (
//     data.data.results
//       .map((result: Result) => result.o)
//       .reduce(
//         (previousOpening: string, currentOpening: string) =>
//           previousOpening + currentOpening
//       ) / data.data.count
//   ).toFixed(2);

//   setData({
//     ...data.data,
//     average,
//   });
// };
