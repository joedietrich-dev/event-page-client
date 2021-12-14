import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function useEditForm(defaultState, pathName, idName) {
  const id = useParams()[idName];
  const [data, setData] = useState(defaultState);
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_API_ROOT}/${pathName}/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
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

  return { data, handleChange, handleSubmit, handleDelete };
}

export default useEditForm;
