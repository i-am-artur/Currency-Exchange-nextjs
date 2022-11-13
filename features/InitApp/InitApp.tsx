import { ReactNode, useEffect } from "react";
import { useAppDispatch, useCurrenciesSelector } from "store/hooks";
import { setBaseCurrency } from "store/currencies/actions";
import { AnyObject } from "typescript/models/common";
import { Provider } from "react-redux";
import { useStore } from "store/index";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  initialReduxState: AnyObject;
  children: ReactNode;
}

export default function InitApp({ initialReduxState, children }: Props) {
  const store = useStore(initialReduxState);

  useEffect(() => {
    toast.info("This website uses 'cookies'. You comply by proceeding.", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }, []);

  return (
    <Provider store={store}>
      <PopulateStore initialReduxState={initialReduxState}>
        {children}
      </PopulateStore>
      <ToastContainer />
    </Provider>
  );
}

function PopulateStore({ initialReduxState, children }: Props) {
  const dispatch = useAppDispatch();
  const currencies = useCurrenciesSelector();

  useEffect(() => {
    !initialReduxState && dispatch(setBaseCurrency(currencies.baseCurrency));
  }, []);

  return <>{children}</>;
}
