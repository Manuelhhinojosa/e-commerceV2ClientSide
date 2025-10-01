// React router hooks
import { useSearchParams } from "react-router-dom";

// State
// Static state (text)
import { sortOptionsText } from "../../assets/staticState/staticText";

// SortOptions function component
const SortOptions = () => {
  // state
  // for handling sorting
  const [searchParams, setSearchParams] = useSearchParams();

  // functions
  // for handling sorting
  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    setSearchParams(searchParams);
  };
  // return
  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy" || "")}
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="">{sortOptionsText.valueText1}</option>
        <option value="priceAsc">{sortOptionsText.valueText2}</option>
        <option value="priceDesc">{sortOptionsText.valueText3}</option>
        <option value="popularity">{sortOptionsText.valueText4}</option>
      </select>
    </div>
  );
};

export default SortOptions;
