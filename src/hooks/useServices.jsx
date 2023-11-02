import { useEffect, useState } from "react";

const useServices = (url) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [url]);
  return services;
};

export default useServices;
