import FeatherIcons from "feather-icons-react";

const FeatherIcon = ({
  icon = "square",
  className = "",
  onClick,
  size = 18,
}) => {
  return (
    <FeatherIcons
      icon={icon}
      size={size}
      className={className}
      onClick={onClick}
    />
  );
};

export default FeatherIcon;
