import React from "react";
import cx from "classnames";
import Icon from "../../components/Icon";

const FeatureCard = (props) => {
  const { img, title, description, small } = props;
  return (
    <div className="featurecard-container" {...props}>
      <div className={cx("featurecard-container-inner", { "small-width": !!small })}>
        <Icon imgsrc={img} classnamestyle="featurecard--top aic hover-effect" />
        <div className="featurecard--title">{title}</div>
        <div className="featurecard--description">{description}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
