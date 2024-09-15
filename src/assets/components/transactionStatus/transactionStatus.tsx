import { Fragment } from "react";
import { Button, Group, Loader, Stack } from "@mantine/core";
import { TransactionStatusTypes } from "../../../types/enums.ts";
import { RecipientDetails } from "../../../types/types";
import Check from "../icons/check.tsx";
import Link from "../icons/link.tsx";
import "./transaction-status.scss";

interface TransactionStatusProps {
  status: TransactionStatusTypes;
  recipientDetails: RecipientDetails | null;
}

const TransactionStatus = ({
  status,
  recipientDetails,
}: TransactionStatusProps) => {
  const amount = "$500.00";

  const getSummaryTitle = () => {
    switch (status) {
      case TransactionStatusTypes.SUCCESS:
        return "Payment successful";
      case TransactionStatusTypes.PENDING:
        return "Payment pending";
      case TransactionStatusTypes.FAILED:
        return "Payment failed";
      default:
        return "";
    }
  };

  const getSummary = () => {
    if (!recipientDetails) return "";

    const { bankName, accountName, accountNumber } = recipientDetails;

    switch (status) {
      case TransactionStatusTypes.SUCCESS:
        return (
          <Fragment>
            Your payment of <span>{amount}</span> to <span>{accountName}</span>,{" "}
            <span>{accountNumber}</span> <span>{bankName}</span> is successful.
          </Fragment>
        );

      case TransactionStatusTypes.PENDING:
        return (
          <Fragment>
            Your payment of <span>{amount}</span> is on its way to{" "}
            <span>{accountName}</span>, <span>{accountNumber}</span>{" "}
            <span>{bankName}</span>.
          </Fragment>
        );

      case TransactionStatusTypes.FAILED:
        return (
          <Fragment>
            Your payment of <span>{amount}</span> to <span>{accountName}</span>,{" "}
            <span>{accountNumber}</span> <span>{bankName}</span> failed.
          </Fragment>
        );

      default:
        return "";
    }
  };

  return (
    <Fragment>
      <Stack className="transaction_status" align="center">
        {status === TransactionStatusTypes.PENDING && (
          <Loader color="#F79009" mt={24} />
        )}
        {status === TransactionStatusTypes.SUCCESS && <Check />}

        <div className="transaction_status__title">{getSummaryTitle()}</div>

        <div className="transaction_status_summary">{getSummary()}</div>
      </Stack>

      {status === TransactionStatusTypes.SUCCESS && (
        <Group grow>
          <Button variant="default" rightSection={<Link />}>
            View in explorer
          </Button>

          <Button>Download receipt</Button>
        </Group>
      )}
    </Fragment>
  );
};

export default TransactionStatus;
