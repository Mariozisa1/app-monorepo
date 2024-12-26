import { PrivyProvider as PrivyProviderBase } from '@privy-io/react-auth';

export function PrivyProvider({ children }: { children: React.ReactNode }) {
  const appId = process.env.PRIVY_APP_ID ?? '';
  if (!appId) {
    throw new Error('PRIVY_APP_ID is not set');
  }

  // TODO: ext error
  // Embedded wallet is only available over HTTPS
  return (
    <PrivyProviderBase
      appId={appId}
      config={{
        loginMethods: [
          'email',
          // 'apple', 'google', 'facebook', 'github'
        ],
      }}
    >
      {children}
    </PrivyProviderBase>
  );
}

export function PrivyProviderNoop({ children }: { children: React.ReactNode }) {
  return children;
}
