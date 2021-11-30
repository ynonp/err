import * as React from "react";
import { Dropdown } from "azure-devops-ui/Dropdown";
import { DropdownSelection } from "azure-devops-ui/Utilities/DropdownSelection";
import { dropdownItems } from "./Data";

export default class DropdownSingleSelectExample extends React.Component {
  private selection = new DropdownSelection();

  public render() {
    return (
      <div style={{ margin: "8px" }}>
        <Dropdown
          ariaLabel="Single select"
          className="example-dropdown"
          placeholder="Select an Option"
          items={dropdownItems}
        />
      </div>
    );
  }
}
