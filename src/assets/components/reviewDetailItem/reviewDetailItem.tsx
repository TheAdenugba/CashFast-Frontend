import { ReactElement } from "react";
import "./review-detail-item.scss";

interface ReviewDetailItemProps {
  label: string;
  value: string | ReactElement;
}

const ReviewDetailItem = ({ label, value }: ReviewDetailItemProps) => {
  return (
    <div className="review_detail_item">
      <div className="review_detail_item__label">{label}</div>
      <div className="review_detail_item__value">{value}</div>
    </div>
  );
};

export default ReviewDetailItem;
