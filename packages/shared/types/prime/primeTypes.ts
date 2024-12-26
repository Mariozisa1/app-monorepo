export type IPrimeUserInfo = {
  isLoggedIn: boolean;
  email: string | undefined;
  primeSubscription:
    | {
        isActive: boolean;
        expiresAt: number;
        plan: string;
      }
    | undefined;
};
