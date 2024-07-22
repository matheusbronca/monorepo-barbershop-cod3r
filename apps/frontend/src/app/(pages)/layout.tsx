'use client';
import { UserProvider } from '../data/contexts/UserContext';
import Page from '../components/shared/Page';

export default function Layout({ children }: any) {
  return (
    <UserProvider>
      <Page>{children}</Page>
    </UserProvider>
  );
}
