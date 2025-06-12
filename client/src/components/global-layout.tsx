import { ReactNode } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import PageBackground from './page-background';
import { GamifiedNotification } from './GamifiedNotification';
import { useGamifiedNotifications } from '@/hooks/use-gamified-notifications';
// import { UserLoginNotification } from './UserLoginNotification';
// import { useNotifications } from '@/hooks/use-notifications';

interface GlobalLayoutProps {
  children: ReactNode;
  variant?: 'default' | 'hero' | 'dark';
}

export function GlobalLayout({ children, variant = 'default' }: GlobalLayoutProps) {
  const { notification, closeNotification } = useGamifiedNotifications();
  // const { notification, closeNotification } = useNotifications();

  return (
    <PageBackground variant={variant}>
      <Navigation />
      {children}
      <Footer />
      
      {/* New Gamified HUD Notification System */}
      <GamifiedNotification
        user={notification.currentUser}
        onClose={closeNotification}
      />
      
      {/* HUD-style notification system for new user logins - DISABLED */}
      {/* <UserLoginNotification
        newUser={notification.newUser}
        onClose={closeNotification}
      /> */}
    </PageBackground>
  );
}

export default GlobalLayout;