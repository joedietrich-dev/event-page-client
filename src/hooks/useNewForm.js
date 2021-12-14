import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useNewForm(defaultState, pathName) {
  const [data, setData] = useState(defaultState);
  const navigate = useNavigate();

  const url = `${process.env.REACT_APP_API_ROOT}/${pathName}`;

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => navigate(`/${pathName}/${resData.id}/edit`))
      .catch(console.log);
  };
  return { data, handleChange, handleSubmit };
}

export default useNewForm;
