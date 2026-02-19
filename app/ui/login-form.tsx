'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      <form
        action={formAction}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl space-y-6"
      >
        {/* Header */}
        <div className="text-center">
          <h1 className={`${lusitana.className} text-3xl font-semibold text-gray-900`}>
            Bienvenido
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Para ingresar usa las credenciales de prueba siguientes
          </p>
        </div>

        {/* Demo credentials */}
        <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600 border border-gray-100">
          <p><span className="font-medium">Email:</span> user@nextmail.com</p>
          <p><span className="font-medium">Password:</span> 123456</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <input
              className="peer w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <AtSymbolIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-gray-900" />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <input
              className="peer w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 outline-none transition"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              minLength={6}
            />
            <KeyIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 peer-focus:text-gray-900" />
          </div>
        </div>

        <input type="hidden" name="redirectTo" value={callbackUrl} />

        {/* Button */}
        <Button
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-gray-900 py-3 text-white text-sm font-medium hover:bg-black transition disabled:opacity-70"
          aria-disabled={isPending}
        >
          {isPending ? 'Logging in...' : 'Log in'}
          {!isPending && <ArrowRightIcon className="h-4 w-4" />}
        </Button>

        {/* Error */}
        {errorMessage && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100">
            <ExclamationCircleIcon className="h-5 w-5" />
            <p>{errorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
