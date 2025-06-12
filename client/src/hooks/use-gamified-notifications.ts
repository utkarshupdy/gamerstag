import { useState, useEffect } from 'react';

interface NotificationUser {
  id: string;
  name: string;
  gtId: string;
  avatar?: string;
  joinTime: string;
}

interface NotificationState {
  currentUser: NotificationUser | null;
}

export function useGamifiedNotifications() {
  const [notification, setNotification] = useState<NotificationState>({
    currentUser: null
  });

  // Mock users for demonstration
  const mockUsers: NotificationUser[] = [
    {
      id: '1',
      name: 'Alex Chen',
      gtId: 'GT_ALEX_2024',
      joinTime: 'now'
    },
    {
      id: '2', 
      name: 'Sarah Williams',
      gtId: 'GT_SARAH_ELITE',
      joinTime: '2 min ago'
    },
    {
      id: '3',
      name: 'Marcus Johnson',
      gtId: 'GT_MARCUS_PRO',
      joinTime: 'just now'
    },
    {
      id: '4',
      name: 'Elena Rodriguez',
      gtId: 'GT_ELENA_X',
      joinTime: '1 min ago'
    },
    {
      id: '5',
      name: 'Kevin Park',
      gtId: 'GT_KEVIN_BEAST',
      joinTime: 'moments ago'
    }
  ];

  useEffect(() => {
    // Show notifications every 15-25 seconds
    const showNotification = () => {
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)];
      setNotification({ currentUser: randomUser });
    };

    // Initial delay
    const initialTimer = setTimeout(showNotification, 3000);

    // Recurring notifications
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 10000 + 15000); // 15-25 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const closeNotification = () => {
    setNotification({ currentUser: null });
  };

  return {
    notification,
    closeNotification
  };
}