import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function useEditForm(defaultState, pathName, idName) {
  const id = useParams()[idName];
  const [data, setData] = useState(defaultState);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_API_ROOT}/${pathName}/${id}`;

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

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resJson) => setData({ ...data, ...resJson }))
      .then(() => navigate(`/${pathName}`))
      .catch(console.log);
  };
  const handleDelete = (event) => {
    fetch(url, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setData(defaultState);
        navigate(`/${pathName}`);
      }
    });
  };

  return { data, isLoading, handleChange, handleSubmit, handleDelete, setData };
}

export default useEditForm;
