// utils/getSessionUser.js

import { getServerSession } from 'next-auth/next';
import { authOptions } from './AuthOptions';

export const getSessionUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return null;
  }

  return {
    user: session.user,
    userId: session.user.id,
  };
};
