// import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";
import { useState } from "react";

const Services = () => {
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState("");
  const services = useServices(asc, search);
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //     fetch('http://localhost:5000/services')
  //         .then(res => res.json())
  //         .then(data => setServices(data));
  // }, [])
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
    e.target.reset();
  };

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
        <form onSubmit={handleSearch} className="my-10">
          <input className="py-3 px-6" type="text" name="search" id="" />
          <br />
          <input
            className="mt-5 btn btn-primary "
            type="submit"
            value="Search"
          />
        </form>
        <button onClick={() => setAsc(!asc)} className="btn btn-secondary mt-5">
          {asc ? "Price: High To Low" : "Price: Low To High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
