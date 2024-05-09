import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          {
            value: "all",
            lable: "All",
          },
          {
            value: "no-discount",
            lable: "No-Discount",
          },
          {
            value: "with-discount",
            lable: "With-Discount",
          },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", lable: "Sort By Name (A-Z)" },
          { value: "name-desc", lable: "Sort By Name (Z-A)" },
          { value: "regularPrice-desc", lable: "Sort By Price (low first)" },
          { value: "regularPrice-asc", lable: "Sort By Price (high first)" },
          { value: "maxCapacity-asc", lable: "Sort By Capacity (high first)" },
          { value: "maxCapacity-desc", lable: "Sort By Capacity (low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
