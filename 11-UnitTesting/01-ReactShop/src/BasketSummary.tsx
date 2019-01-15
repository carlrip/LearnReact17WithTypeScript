import * as React from "react";
interface IProps {
  count: number;
}
const BasketSummary: React.FC<IProps> = props => {
  return <div className="basket-summary">{props.count}</div>;
};
export default BasketSummary;
