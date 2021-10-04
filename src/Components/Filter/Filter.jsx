import { connect } from "react-redux";
import * as actions from "../../Redux/action";

import { FilterInput, Label } from "./Filter.styled";

const Filter = ({ filter, filterChange }) => {
  return (
    <Label>
      Find contact by name
      <FilterInput
        type="text"
        value={filter}
        onChange={filterChange}
        name="filter"
        placeholder="Enter contact name"
      />
    </Label>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.items.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChange: (e) => dispatch(actions.filterChange(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
