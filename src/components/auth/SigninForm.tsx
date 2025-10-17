"use client";
import { Flex, TextField, Button, Text, IconButton } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  EyeOpenIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    values: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!res?.ok) {
      console.log(res);
    }

    router.push("/dashboard");
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

        <Button type="submit" mt="4" disabled={!isValid}>
          Iniciar sesión
        </Button>
      </Flex>
    </form>
  );
}
export default SigninForm;
