// "use server";
// export async function getData() {
//   try {
//     const res = await fetch(
//       "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
//     );
//     const response = await res.json();
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return response;
//   } catch (error) {
//     throw error;
//   }
// }
