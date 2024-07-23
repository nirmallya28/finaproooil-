import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const SimilarProjects = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 pr-[26px] pl-[30px] box-border max-w-full ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[63px] max-w-full mq900:gap-[31px] mq450:gap-[16px]">
        <GroupComponent propFlex="unset" propAlignSelf="stretch" />
        <GroupComponent propFlex="unset" propAlignSelf="stretch" />
      </div>
    </section>
  );
};

SimilarProjects.propTypes = {
  className: PropTypes.string,
};

export default SimilarProjects;
