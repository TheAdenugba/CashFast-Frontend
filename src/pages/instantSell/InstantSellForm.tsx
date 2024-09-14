import {
  Button,
  Group,
  InputDescription,
  InputLabel,
  NumberInput,
  Stack,
  Text,
} from "@mantine/core";
import Usdt from "../../assets/components/icons/usdt.tsx";
import Ngn from "../../assets/components/icons/ngn.tsx";
import Google from "../../assets/components/icons/google.tsx";
import Mail from "../../assets/components/icons/mail.tsx";
import { useForm } from "@mantine/form";

interface InstantSellFormProps {
  nextStage: () => void;
}

const InstantSellForm = ({ nextStage }: InstantSellFormProps) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      sendValue: "",
      estimatedReceiveValue: "",
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    nextStage();
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack className="instant_sell_main" gap={24}>
        <Stack gap={4}>
          <Group justify="space-between">
            <InputLabel>Amount to send</InputLabel>
            <InputDescription>Balance: 500.00 USDT</InputDescription>
          </Group>

          <NumberInput
            required
            withAsterisk={false}
            hideControls
            placeholder="0.00"
            key={form.key("sendValue")}
            {...form.getInputProps("sendValue")}
            rightSection={
              <Group gap={6}>
                <Usdt />
                <Text c="#101828" fz={13} fw={500}>
                  USDT
                </Text>
              </Group>
            }
            rightSectionWidth={90}
            thousandSeparator=","
            prefix="$ "
          />

          <Group justify="space-between">
            <InputDescription>1.00 USDT = ₦1,498.00</InputDescription>
            <InputDescription>Network: BEP20</InputDescription>
          </Group>
        </Stack>

        <NumberInput
          label="Recipient receives"
          withAsterisk={false}
          hideControls
          placeholder="0.00"
          readOnly
          key={form.key("sendValue")}
          {...form.getInputProps("sendValue")}
          rightSection={
            <Group gap={6}>
              <Ngn />
              <Text c="#101828" fz={13} fw={500}>
                NGN
              </Text>
            </Group>
          }
          rightSectionWidth={80}
        />

        <Button fullWidth type="submit">
          Connect Wallet
        </Button>

        <Group className="oauth_buttons">
          <Button variant="default" leftSection={<Google />}>
            Continue with Google
          </Button>

          <Button variant="default" leftSection={<Mail />}>
            Continue with Email
          </Button>
        </Group>

        <div className="powered_by">
          © {new Date().getFullYear()} Powered by DexPay
        </div>
      </Stack>
    </form>
  );
};

export default InstantSellForm;
