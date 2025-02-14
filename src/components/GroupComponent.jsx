import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "", propFlex, propAlignSelf }) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`flex-1 rounded-smi bg-white flex flex-row flex-wrap items-end justify-start py-[41px] px-8 box-border relative gap-[20px] max-w-full text-left text-17xl text-black font-inter ${className}`}
      style={groupDivStyle}
    >
      <img
        className="h-14 w-14 absolute !m-[0] top-[-28px] right-[-24px] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/group-30308@2x.png"
      />
      <div className="h-10 w-10 absolute !m-[0] top-[-20px] left-[-17px] text-white font-general-sans">
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-tomato w-full h-full z-[3]" />
        <h1 className="m-0 absolute top-[-6px] left-[30.83px] text-inherit font-medium font-inherit [transform:_rotate(47deg)] [transform-origin:0_0] mq900:text-10xl mq450:text-3xl">
          +
        </h1>
      </div>
      <div className="h-[307px] w-[1740px] relative rounded-smi bg-white hidden max-w-full z-[1]" />
      <div className="h-[225px] w-[397px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border max-w-full">
        <img
          className="self-stretch flex-1 relative rounded-2xs max-w-full overflow-hidden max-h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle-169@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-row items-end justify-start gap-[35px] min-w-[629px] max-w-full mq900:gap-[17px] mq1275:flex-wrap mq1275:min-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[14px] min-w-[417px] max-w-full mq900:min-w-full">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[124px] z-[1] mq900:text-10xl mq450:text-3xl">
            Project
          </h1>
          <div className="self-stretch rounded-smi bg-lavender flex flex-row items-start justify-center py-14 pr-5 pl-[21px] box-border max-w-full z-[1]">
            <div className="h-[156px] w-[641px] relative rounded-smi bg-lavender hidden max-w-full" />
            <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[2] mq900:text-10xl mq450:text-3xl">
              Project Description
            </h1>
          </div>
        </div>
        <div className="h-[223px] w-[291px] flex flex-col items-start justify-start gap-[23px] min-w-[291px] mq1275:flex-1">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[85px] z-[1] mq900:text-10xl mq450:text-3xl">
            Tags
          </h1>
          <div className="self-stretch flex-1 rounded-3xs bg-lavender overflow-x-auto flex flex-row items-start justify-start py-5 px-[23px] gap-[9px] z-[1] text-3xs text-white">
            <div className="h-[156px] w-[291px] relative rounded-3xs bg-lavender shrink-0 hidden" />
            <div className="rounded bg-royalblue-100 flex flex-row items-start justify-start pt-0.5 px-2.5 pb-[3px] z-[2]">
              <div className="h-[17px] w-[54px] relative rounded bg-royalblue-100 hidden" />
              <div className="relative inline-block min-w-[34px] z-[1]">
                Python
              </div>
            </div>
            <div className="w-9 rounded bg-royalblue-100 shrink-0 flex flex-row items-start justify-start pt-[3px] px-2.5 pb-0.5 box-border z-[2]">
              <div className="h-[17px] w-9 relative rounded bg-royalblue-100 hidden" />
              <div className="relative inline-block min-w-[15px] z-[1]">ML</div>
            </div>
            <div className="rounded bg-royalblue-100 flex flex-row items-start justify-start pt-[3px] px-[13px] pb-0.5 z-[2]">
              <div className="h-[17px] w-9 relative rounded bg-royalblue-100 hidden" />
              <div className="relative inline-block min-w-[10px] z-[1]">AI</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[25px]">
        <div className="flex flex-row items-start justify-start py-0 px-[9px]">
          <h1 className="m-0 relative text-inherit font-semibold font-inherit z-[1] mq900:text-10xl mq450:text-3xl">
            Faculties
          </h1>
        </div>
        <div className="rounded-3xs bg-lavender flex flex-row items-start justify-center py-5 pr-5 pl-[21px] box-border gap-[19.7px] min-h-[156px] z-[1] mq450:flex-wrap">
          <div className="h-[156px] w-[268px] relative rounded-3xs bg-lavender hidden" />
          <img
            className="h-[42px] w-[42px] relative rounded-[50%] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/ellipse-16@2x.png"
          />
          <img
            className="h-[42px] w-[42px] relative rounded-[50%] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/ellipse-16@2x.png"
          />
          <img
            className="h-[42px] w-[42px] relative rounded-[50%] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/ellipse-16@2x.png"
          />
          <img
            className="h-[42px] w-[42px] relative rounded-[50%] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/ellipse-16@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default GroupComponent;
