"use client";
import { Flex, TextField, Button, Text } from "@radix-ui/themes";
import {
  EnvelopeOpenIcon,
  LockOpen1Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";

function SignupForm() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const passwordValue = watch("password");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <label htmlFor="name">Nombre</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "El nombre es obligatorio",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
            maxLength: {
              value: 20,
              message: "El nombre no puede tener más de 20 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z ]+$/,
              message: "El nombre solo puede contener letras y espacios",
            },
          }}
          render={({ field }) => (
            <TextField.Root
              type="text"
              placeholder="Ingresa tu nombre"
              autoFocus
              {...field}
            >
              <TextField.Slot>
                <PersonIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />

        {errors.name && (
          <Text color="red" className="text-xs">
            {errors.name.message}
          </Text>
        )}

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
              {...field}
            >
              <TextField.Slot>
                <EnvelopeOpenIcon height="16" width="16" />
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
                <LockOpen1Icon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        {errors.password && (
          <Text color="red" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: {
              message: "La confirmación de la contraseña es obligatoria",
              value: true,
            },
            validate: (value) =>
              value === passwordValue || "Las contraseñas no coinciden",
          }}
          render={({ field }) => (
            <TextField.Root type="password" placeholder="*******" {...field}>
              <TextField.Slot>
                <LockOpen1Icon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        {errors.confirmPassword && (
          <Text color="red" className="text-xs">
            {errors.confirmPassword.message}
          </Text>
        )}

        <Button type="submit" mt="4">
          Registrarse
        </Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
