const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col border-[0.5px] border-gray-700 rounded-[6px] p-[32px]">
      <h4 className="text-[20px] font-semibold mb-[10px]">{title}</h4>
      <p className="text-[16px] font-normal text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;
