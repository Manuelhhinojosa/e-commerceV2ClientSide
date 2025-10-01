// React router
import { useSearchParams } from "react-router-dom";

// React hooks
import { useEffect, useState } from "react";

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

  //   functions
  // for ...
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  // return
  return <div>filterSideBar</div>;
};

export default FilterSideBar;
