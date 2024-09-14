import { useEffect, useState } from "react";
import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import Warning from "../icons/warning.tsx";
import { USER_NOTICE_ACCEPTED } from "../../../utils/constants.ts";

const UserNotice = () => {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    const userAccepted = localStorage.getItem(USER_NOTICE_ACCEPTED);
    if (!userAccepted) {
      setOpened(true);
    }
  }, []);

  const acceptNotice = () => {
    setOpened(false);
    localStorage.setItem(USER_NOTICE_ACCEPTED, "yes");
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened}
      title={
        <Group gap={8}>
          <Warning />
          <Text c="#101828" fw={600} fz={18}>
            Notice
          </Text>
        </Group>
      }
      centered
      size={494}
      withCloseButton={false}
      closeOnClickOutside={false}
    >
      <Stack mt={12}>
        <Text c="#667085" fz={14} fw={500} lh="20px">
          CashFast is a product built for the participation in Build As A
          Champion Hackathon on BNBChain. It allows you to send money to your
          friends & family using Stable coins in developing countries such as
          Nigeria.
          <br />
          <br />
          This application is live and support a capped amount to send as it is
          still in beta-stage and currently undergoing internal audit.
        </Text>

        <Button fullWidth onClick={acceptNotice}>
          I understand
        </Button>
      </Stack>
    </Modal>
  );
};

export default UserNotice;
