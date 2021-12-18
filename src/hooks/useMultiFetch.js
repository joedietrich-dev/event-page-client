import { useState, useEffect } from "react";

const useMultiFetch = (urls) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
      .then(setData)
      .then(() => setIsLoading(false))
      .catch(setError);
  }, [urls]);
  return { data, error, isLoading };
};

export default useMultiFetch;
