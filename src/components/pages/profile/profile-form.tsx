'use client';

import { FC, useState } from 'react';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/input';
import { Account, User } from '@prisma/client';
import { Button } from '../../ui/button';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface ProfileFormProps {
  user: User;
  account?: Account | null;
}

const ProfileSchema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('El email debe ser válido'),
});

const ProfileForm: FC<ProfileFormProps> = ({ user, account }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      email: user.email || '',
      name: user.name || '',
    },
  });

  const onSubmit = async () => {
    setIsLoading(true);
    axios
      .put(`/api/user/${user.id}`, form.getValues())
      .then(() => {
        toast.success('Perfil actualizado');
      })
      .catch(() => {
        toast.error('Error al actualizar el perfil');
      })
      .finally(() => {
        setIsLoading(false);
        router.refresh();
      });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Nombre" {...field} />
              </FormControl>
              <FormMessage />

              <FormDescription>
                Nombre completo, como aparece en tu documento de identidad.
              </FormDescription>
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electronico</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />

              <FormDescription>
                El correo electronico es necesario para enlazar con tu cuenta de
                google
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="lg:col-span-2 justify-self-end flex flex-col md:flex-row gap-4 mt-4">
          {account ? (
            <div className="flex items-center bg-white opacity-50 rounded-sm py-1 px-4 text-black">
              <FcGoogle className="mr-2" />
              Cuenta google enlazada
            </div>
          ) : (
            <Button
              type="button"
              disabled={!user.email}
              onClick={() => signIn('google')}
            >
              <FcGoogle className="mr-2 h-4 w-4" />
              Agregar cuenta google
            </Button>
          )}
          <Button type="submit">
            Actualizar
            {isLoading && <FaSpinner className="ml-2 h-4 w-4 animate-spin" />}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
