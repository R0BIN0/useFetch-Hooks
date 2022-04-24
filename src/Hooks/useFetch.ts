import { useState, useEffect } from "react";
import { ApiProps } from "../Interface/Interface";
import axios, { AxiosResponse } from "axios";

type errMessage = string | number;

export const useFetch = (url: string, errMessage?: errMessage) => {
  const [data, setData] = useState<ApiProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [handleError, setHandleError] = useState<errMessage>();

  useEffect(() => {
    setLoading(true);
    // Should verify the return of your "res" to send good Infos to setData() !
    axios
      .get(url)
      .then((res: AxiosResponse) => setData(res.data.data))
      .catch((err) => {
        console.error(err);
        setHandleError(errMessage);
      })
      .finally(() => setLoading(false));
  }, [url, errMessage]);

  return { data, loading, handleError };
};
