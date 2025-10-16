"use client";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  console.log(errors);

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email no válido",
            },
            required: {
              value: true,
              message: "El email es obligatorio",
            },
          }}
          render={({ field }) => (
            <TextField.Root
              type="email"
              placeholder="email@domain.com"
              autoFocus
              {...field}
            >
              <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        {errors.email && (
          <Text color="red" className="text-xs">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">Contraseña</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              message: "La contraseña es obligatoria",
              value: true,
            },
            minLength: {
              message: "La contraseña debe tener al menos 6 caracteres",
              value: 6,
            },
          }}
          render={({ field }) => (
            <TextField.Root type="password" placeholder="*******" {...field}>
              <TextField.Slot>
                <LockClosedIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        {errors.password && (
          <Text color="red" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        <Button type="submit" mt="4">
          Iniciar sesión
        </Button>
      </Flex>
    </form>
  );
}
export default SigninForm;
