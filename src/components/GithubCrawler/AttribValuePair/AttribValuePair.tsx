const AttributeValuePair = (attrib: string | number, value: string | number) => {
  return (
    <div>
      <text className='gc__attrib'>{attrib}</text>
      <text className='gc__value'>{value}</text>
    </div>
  );
};
export default AttributeValuePair;
