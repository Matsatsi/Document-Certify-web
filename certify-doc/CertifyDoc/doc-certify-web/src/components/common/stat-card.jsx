import { Widget } from "../widgets";
import { TfiStatsUp } from "react-icons/tfi";
import PropTypes from "prop-types";

export const StatCard = ({ title, value, description }) => (
  <Widget>
    <>
      <section className="flex justify-between items-center">
        <h4 className="text-2xl text-center">{title}</h4>
        <TfiStatsUp className="w-5 h-5" />
      </section>
      <section className="flex flex-col gap-1 justify-center items-center p-4">
        <h2 className="text-center font-medium text-7xl">{value}</h2>
        <p>{description}</p>
      </section>
    </>
  </Widget>
);

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
