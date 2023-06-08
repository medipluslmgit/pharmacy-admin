'use client';

import * as React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/Form';

import { zodResolver } from '@hookform/resolvers/zod';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { EyeIcon } from 'lucide-react';
import { FaSpinner } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiArrowToRight } from 'react-icons/bi';

const formSchema = z.object({
  userName: z
    .string()
    .min(3, 'El usuario debe tener al menos 3 caracteres')
    .max(100, 'El usuario debe tener menos de 100 caracteres'),
  password: z
    .string()
    .min(3, 'La contraseña debe tener al menos 3 caracteres')
    .max(100, 'La contraseña debe tener menos de 100 caracteres'),
});

export function AuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleTogglePassword = React.useCallback(() => {
    setShowPassword((old) => !old);
  }, [setShowPassword]);

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    signIn('credentials', data);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      password: '',
    },
  });

  return (
    <div className="grid grap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="jhondoe@gmail.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <div className="flex gap-1">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="************"
                      {...field}
                    />
                    <Button
                      title="Ver contraseña"
                      type="button"
                      variant="outline"
                      onClick={handleTogglePassword}
                    >
                      <EyeIcon />
                    </Button>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Entrar
            {isLoading ? (
              <FaSpinner className="ml-2 h-4 w-4 animate-spin" />
            ) : (
              <BiArrowToRight className="ml-2 h-4 w-4" />
            )}
          </Button>
        </form>
      </Form>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        onClick={() => signIn('google')}
        type="button"
        disabled={isLoading}
      >
        <FcGoogle className="mr-2 h-4 w-4" />
        Google
      </Button>
    </div>
  );
}
