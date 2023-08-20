import { useState, useEffect } from "react";
import axios from "axios";

function useData(requestUrl: string) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        const response = await axios.get(requestUrl, {
          cancelToken: source.token,
        });

        setData(response.data.results);
      } catch (error) {
        if (axios.isCancel(error)) {
          // Request was canceled
        } else {
          // Handle other errors
          console.log(error);
        }
      }
    }

    fetchData();

    return () => {
      // Cancel the Axios request when component unmounts
      source.cancel();
    };
  }, [requestUrl]);

  return data;
}

export default useData;
