import { useState, useEffect } from "react";

function useFetch(url, defaultState = []) {
  const [data, setData] = useState(defaultState);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(console.log);
  }, [url]);
  return { data, setData };
}

export default useFetch;
