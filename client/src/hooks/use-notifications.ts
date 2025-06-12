import { useState, useEffect } from 'react';
import { notificationManager, NotificationState, NewUser } from '@/lib/notification-manager';

export function useNotifications() {
  const [notification, setNotification] = useState<NotificationState>(
    notificationManager.getCurrentState()
  );

  useEffect(() => {
    const unsubscribe = notificationManager.subscribe(setNotification);
    return unsubscribe;
  }, []);

  const closeNotification = () => {
    notificationManager.closeNotification();
  };

  const showNewUserLogin = (user: NewUser) => {
    notificationManager.showNewUserLogin(user);
  };

  return {
    notification,
    closeNotification,
    showNewUserLogin
  };
}