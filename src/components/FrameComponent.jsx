import React from "react";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

// Global variable to store the number of GroupComponent instances
const numberOfGroups = 0;

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[11px] pr-[26px] pl-[30px] box-border max-w-full text-left text-17xl text-black font-inter ${className}`}
    >
      {Array.from({ length: numberOfGroups }).map((_, index) => (
        <GroupComponent key={index} />
      ))}
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
