import { useState } from "react";
import {
  Alert,
  Button,
  Checkbox,
  Group,
  Modal,
  Stack,
  Switch,
  Textarea,
} from "@mantine/core";
import ReviewDetailItem from "../../assets/components/reviewDetailItem/reviewDetailItem.tsx";
import Usdt from "../../assets/components/icons/usdt.tsx";
import Bnb from "../../assets/components/icons/bnb.tsx";
import { RecipientDetails } from "../../types/types";
import AddRecipientDetails from "../../assets/components/addRecipientDetails/addRecipientDetails.tsx";
import Bank from "../../assets/components/icons/bank.tsx";
import AlertIcon from "../../assets/components/icons/alert.tsx";
import { TransactionStatusTypes } from "../../types/enums.ts";
import TransactionStatus from "../../assets/components/transactionStatus/transactionStatus.tsx";

interface ReviewTransactionProps {
  goBack: () => void;
}

const ReviewTransaction = ({ goBack }: ReviewTransactionProps) => {
  const [addRecipientModal, setAddRecipientModal] = useState<boolean>(false);
  const [transactionStatusModal, setTransactionStatusModal] =
    useState<TransactionStatusTypes | null>(null);
  const [recipientDetails, setRecipientDetails] =
    useState<RecipientDetails | null>(null);
  const [addNote, setAddNote] = useState<boolean>(false);

  const saveRecipientDetails = (values: RecipientDetails) => {
    console.log(values);
    setRecipientDetails(values);
    setAddRecipientModal(false);
  };

  return (
    <div>
      <Modal
        opened={addRecipientModal}
        onClose={() => setAddRecipientModal(false)}
        title="Add recipient details"
      >
        <AddRecipientDetails
          submit={saveRecipientDetails}
          initialValues={recipientDetails}
        />
      </Modal>

      <Modal
        opened={transactionStatusModal !== null}
        onClose={() => setTransactionStatusModal(null)}
        withCloseButton={
          transactionStatusModal === TransactionStatusTypes.SUCCESS
        }
      >
        {transactionStatusModal && (
          <TransactionStatus
            status={transactionStatusModal}
            recipientDetails={recipientDetails}
          />
        )}
      </Modal>

      <Stack gap={24} className="instant_sell_main review_transaction">
        <div className="review_transaction__header">
          <div className="review_transaction__title">Review Transaction</div>

          <div className="review_transaction__header__right">
            1.00 USDT = ₦1,498.78
          </div>
        </div>

        <Stack>
          <ReviewDetailItem
            label="Token amount"
            value={
              <Group gap={6}>
                <Usdt />
                <div>500.00 USDT</div>
              </Group>
            }
          />

          <ReviewDetailItem label="Amount to receive" value="NGN 500,000.00" />

          <ReviewDetailItem label="Sell from" value="0sE536....8292" />

          <ReviewDetailItem
            label="Network"
            value={
              <Group gap={6}>
                <Bnb />
                <div>BSC (BRC-20)</div>
              </Group>
            }
          />

          <ReviewDetailItem label="Fee" value="0.90 USDT" />
        </Stack>

        {!recipientDetails && (
          <Group justify="center">
            <Button
              variant="outline"
              onClick={() => setAddRecipientModal(true)}
            >
              Add Recipient Details
            </Button>
          </Group>
        )}

        {recipientDetails && (
          <div className="recipient_details">
            <Group justify="space-between">
              <div className="recipient_details__title">Recipient Details</div>
              <Button
                variant="transparent"
                onClick={() => setAddRecipientModal(true)}
              >
                Change recipient
              </Button>
            </Group>

            <div className="recipient_details__content">
              <Bank />

              <Stack gap={2} className="recipient_details__content__details">
                <div className="recipient_details__content__details__bank">
                  {recipientDetails.bankName}
                </div>

                <div className="recipient_details__content__details__account">
                  <span>{recipientDetails.accountNumber}</span>{" "}
                  {recipientDetails.accountName}
                </div>
              </Stack>
            </div>
          </div>
        )}

        <Stack gap={8}>
          <Switch
            checked={addNote}
            onChange={(event) => setAddNote(event.currentTarget.checked)}
            label="Add Note/Memo"
          />

          {addNote && (
            <Textarea
              label="Note/Memo"
              placeholder="Enter your note/memo"
              autosize
              minRows={2}
            />
          )}
        </Stack>

        <Alert
          variant="light"
          color="yellow"
          title="You'll need to confirm two (2) wallet transactions"
          icon={<AlertIcon />}
        >
          <Group>
            <Checkbox radius="sm" label="Approve token for transfer" />
            <Checkbox radius="sm" label="Confirm transaction" />
          </Group>
        </Alert>

        <Group grow>
          <Button variant="default" onClick={goBack}>
            Back
          </Button>

          <Button
            onClick={() =>
              setTransactionStatusModal(TransactionStatusTypes.SUCCESS)
            }
          >
            Approve USDT
          </Button>
        </Group>
      </Stack>
    </div>
  );
};

export default ReviewTransaction;
