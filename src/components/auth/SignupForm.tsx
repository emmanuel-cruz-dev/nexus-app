"use client";
import { Flex, TextField, Button, Text, IconButton } from "@radix-ui/themes";
import {
  EnvelopeOpenIcon,
  EyeOpenIcon,
  EyeNoneIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

function SignupForm() {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const passwordValue = watch("password");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    const { confirmPassword, ...dataToSend } = data;

    if (confirmPassword !== data.password) {
      return;
    }

    console.log("Enviando", dataToSend);
    const res = await axios.post("/api/auth/register", dataToSend);
    console.log(res);
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
            <TextField.Root
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              {...field}
            >
              <TextField.Slot side="left">
                <IconButton
                  type="button"
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOpenIcon height={16} width={16} />
                  ) : (
                    <EyeNoneIcon height={16} width={16} />
                  )}
                </IconButton>
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
            <TextField.Root
              type={showConfirm ? "text" : "password"}
              placeholder="*******"
              {...field}
            >
              <TextField.Slot>
                <IconButton
                  type="button"
                  variant="ghost"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? (
                    <EyeOpenIcon height={16} width={16} />
                  ) : (
                    <EyeNoneIcon height={16} width={16} />
                  )}
                </IconButton>
              </TextField.Slot>
            </TextField.Root>
          )}
        />
        {errors.confirmPassword && (
          <Text color="red" className="text-xs">
            {errors.confirmPassword.message}
          </Text>
        )}

        <Button type="submit" mt="4" disabled={!isValid}>
          Registrarse
        </Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
