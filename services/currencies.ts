export async function getCurrencies(newBaseCurrency?: string) {
  const apiKey = "ae8ab4f0-43cc-11ec-9d80-9f753414f6f7";

  return await fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${newBaseCurrency}`
  );

  // return await fetch("http://localhost:3000/api/currencies");
}
