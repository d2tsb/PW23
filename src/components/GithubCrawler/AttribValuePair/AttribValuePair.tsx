const AttributeValuePair = (
  attrib: string | number,
  value: string | number
) => {
  return (
    <div>
      <text style={{ color: "#AAA" }}>{attrib}</text>
      <text className="gc__text" style={{ color: "#FFF" }}>
        {value}
      </text>
    </div>
  );
};
export default AttributeValuePair;
