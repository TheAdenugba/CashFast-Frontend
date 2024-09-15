import { useForm } from "@mantine/form";
import { RecipientDetails } from "../../../types/types";
import {
  Button,
  Checkbox,
  NumberInput,
  Select,
  Stack,
  TextInput,
} from "@mantine/core";
import { useEffect } from "react";

interface AddRecipientDetailsProps {
  submit: (values: RecipientDetails) => void;
  initialValues: RecipientDetails | null;
}

const AddRecipientDetails = ({
  submit,
  initialValues,
}: AddRecipientDetailsProps) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      accountName: "",
      accountNumber: "",
      bankName: "",
    },
  });

  useEffect(() => {
    if (initialValues) {
      form.setValues(initialValues);
    }
  }, [initialValues]);

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
    submit(values);
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Stack>
        <Select
          required
          withAsterisk={false}
          label="Bank"
          placeholder="Select bank"
          data={[
            { value: "gtb", label: "GTBank" },
            { value: "uba", label: "UBA" },
            { value: "access", label: "Access Bank" },
          ]}
          key={form.key("bankName")}
          {...form.getInputProps("bankName")}
        />

        <NumberInput
          required
          withAsterisk={false}
          label="Account Number"
          placeholder="Account Number"
          key={form.key("accountNumber")}
          {...form.getInputProps("accountNumber")}
          hideControls
          maxLength={10}
        />

        <TextInput
          required
          withAsterisk={false}
          label="Account Name"
          placeholder="Account Name"
          key={form.key("accountName")}
          {...form.getInputProps("accountName")}
        />

        <Checkbox radius="sm" label="Set as default payment method" />

        <Button fullWidth type="submit">
          Done
        </Button>
      </Stack>
    </form>
  );
};

export default AddRecipientDetails;
