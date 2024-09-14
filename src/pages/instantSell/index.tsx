import { useState } from "react";
import InstantSellForm from "./InstantSellForm.tsx";
import "./instant-sell.scss";
import { InstantSellStages } from "../../types/enums.ts";
import ReviewTransaction from "./reviewTransaction.tsx";

const InstantSell = () => {
  const [stage, setStage] = useState<InstantSellStages>(
    InstantSellStages.PROVIDE_DETAILS,
  );

  return (
    <div className="instant_sell">
      <div className="instant_sell_inner">
        <div className="instant_sell__title">Send USDT for Fiat Instantly</div>

        <div className="instant_sell__content">
          {stage === InstantSellStages.PROVIDE_DETAILS && (
            <InstantSellForm
              nextStage={() => setStage(InstantSellStages.REVIEW_TRANSACTION)}
            />
          )}
          {stage === InstantSellStages.REVIEW_TRANSACTION && (
            <ReviewTransaction
              goBack={() => setStage(InstantSellStages.PROVIDE_DETAILS)}
              nextStage={() => setStage(InstantSellStages.TRANSACTION_RECEIPT)}
            />
          )}
          {stage === InstantSellStages.TRANSACTION_RECEIPT && (
            <div>Transaction receipt</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstantSell;
