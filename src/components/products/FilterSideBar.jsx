// React router
import { useSearchParams } from "react-router-dom";

// React hooks
import { useState } from "react";

// state
// static State (text)
import { filterSideBarText } from "../../assets/staticState/staticText";

// FilterSideBar function component
const FilterSideBar = () => {
  // state
  //   for getting and setting the search params
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  // return
  return <div>filterSideBar</div>;
};

export default FilterSideBar;
