import CheckBox from "components/FormControls/Input/Checkbox";
import { Currency } from "store/currencies/types";
import { ToggleCurrency } from "../../../../index.page";

export interface Props {
  currency: Currency;
  toggleCurrency: ToggleCurrency;
}

export default function FavoriteStatus({ currency, toggleCurrency }: Props) {
  return (
    <CheckBox
      checked={currency.isFavorite ?? false}
      onChange={() => toggleCurrency(currency.code)}
    />
  );
}
