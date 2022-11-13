export interface Currency {
  code: string;
  value: number;
  isFavorite?: boolean;
}

export type Currencies = { [currencyCode: string]: Currency };
