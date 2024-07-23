import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 pb-[11px] pr-[26px] pl-[30px] box-border max-w-full text-left text-17xl text-black font-inter ${className}`}
    >
      <GroupComponent />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
