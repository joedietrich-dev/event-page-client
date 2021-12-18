import { useState, useEffect } from "react";

function useFetch(url, defaultState = []) {
  const [data, setData] = useState(defaultState);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [url]);
  return { data, isLoading, setData };
}

export default useFetch;
