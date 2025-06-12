// Notification management system for GAMERS TAG
export interface NewUser {
  id: string;
  name: string;
  gtId: string;
  avatar?: string;
  joinedAt: Date;
}

export interface NotificationState {
  newUser: NewUser | null;
  isVisible: boolean;
}

class NotificationManager {
  private listeners: Set<(notification: NotificationState) => void> = new Set();
  private currentNotification: NotificationState = { newUser: null, isVisible: false };
  private notificationQueue: NewUser[] = [];
  private isProcessingQueue = false;

  // Subscribe to notification updates
  subscribe(callback: (notification: NotificationState) => void) {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  // Notify all subscribers
  private notify() {
    this.listeners.forEach(callback => callback(this.currentNotification));
  }

  // Add notification to queue and process
  showNewUserLogin(user: NewUser) {
    this.notificationQueue.push(user);
    this.processQueue();
  }

  // Process notification queue (one at a time, 10-second intervals)
  private processQueue() {
    if (this.isProcessingQueue || this.currentNotification.isVisible) {
      return; // Don't process if already processing or notification is visible
    }

    if (this.notificationQueue.length === 0) {
      return; // No notifications to process
    }

    this.isProcessingQueue = true;
    const nextUser = this.notificationQueue.shift()!;

    this.currentNotification = {
      newUser: nextUser,
      isVisible: true
    };
    this.notify();

    // Auto-close after 2 seconds, then wait 8 seconds before next notification
    setTimeout(() => {
      this.closeNotification();
      
      // Wait 8 more seconds before processing next notification (total 10 seconds between notifications)
      setTimeout(() => {
        this.isProcessingQueue = false;
        this.processQueue(); // Process next notification if any
      }, 8000);
    }, 2000);
  }

  // Close current notification
  closeNotification() {
    this.currentNotification = {
      newUser: null,
      isVisible: false
    };
    this.notify();
  }

  // Get current notification state
  getCurrentState(): NotificationState {
    return this.currentNotification;
  }

  // Simulate new user logins for demo purposes with queue management
  // Note: In production, this would connect to real-time user authentication events
  startDemoMode() {
    const demoUsers: NewUser[] = [
      {
        id: '1',
        name: 'Alex Thunder',
        gtId: 'GT001234',
        avatar: '/images/demo-avatars/alex.jpg',
        joinedAt: new Date()
      },
      {
        id: '2', 
        name: 'Sarah Storm',
        gtId: 'GT005678',
        avatar: '/images/demo-avatars/sarah.jpg',
        joinedAt: new Date()
      },
      {
        id: '3',
        name: 'Mike Blazer',
        gtId: 'GT009012',
        avatar: '/images/demo-avatars/mike.jpg',
        joinedAt: new Date()
      },
      {
        id: '4',
        name: 'Luna Phoenix',
        gtId: 'GT003456',
        joinedAt: new Date()
      },
      {
        id: '5',
        name: 'Kai Shadow',
        gtId: 'GT007890',
        avatar: '/images/demo-avatars/kai.jpg',
        joinedAt: new Date()
      },
      {
        id: '6',
        name: 'Nova Strike',
        gtId: 'GT012345',
        joinedAt: new Date()
      },
      {
        id: '7',
        name: 'Zara Vortex',
        gtId: 'GT067891',
        avatar: '/images/demo-avatars/zara.jpg',
        joinedAt: new Date()
      },
      {
        id: '8',
        name: 'Raven Blitz',
        gtId: 'GT098765',
        joinedAt: new Date()
      }
    ];

    let currentIndex = 0;

    const showNextDemo = () => {
      // Only show notification if no current notification is visible
      if (!this.currentNotification.isVisible) {
        const user = demoUsers[currentIndex];
        user.joinedAt = new Date(); // Update timestamp for realism
        this.showNewUserLogin(user);
        
        currentIndex = (currentIndex + 1) % demoUsers.length;
      }
      
      // Continue showing notifications every 10 seconds
      setTimeout(showNextDemo, 10000);
    };

    // Start demo notifications after 5 seconds
    setTimeout(showNextDemo, 5000);
  }

  // Backend integration methods
  // Note: These methods provide the structure for real backend integration
  
  // Connect to WebSocket for real-time user login events
  connectToUserEvents(websocketUrl: string) {
    try {
      const ws = new WebSocket(websocketUrl);
      
      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'user_login' && data.user) {
            this.showNewUserLogin({
              id: data.user.id,
              name: data.user.name,
              gtId: data.user.gtId,
              avatar: data.user.avatar,
              joinedAt: new Date(data.user.joinedAt)
            });
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      return () => ws.close();
    } catch (error) {
      console.error('Failed to connect to user events:', error);
      return () => {};
    }
  }

  // Poll for new user logins via REST API
  startPollingForNewUsers(apiUrl: string, intervalMs: number = 30000) {
    let lastCheckTime = new Date();

    const poll = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users/recent?since=${lastCheckTime.toISOString()}`);
        if (response.ok) {
          const newUsers = await response.json();
          newUsers.forEach((user: any) => {
            this.showNewUserLogin({
              id: user.id,
              name: user.name,
              gtId: user.gtId,
              avatar: user.avatar,
              joinedAt: new Date(user.joinedAt)
            });
          });
          lastCheckTime = new Date();
        }
      } catch (error) {
        console.error('Error polling for new users:', error);
      }
    };

    const intervalId = setInterval(poll, intervalMs);
    return () => clearInterval(intervalId);
  }

  // Server-Sent Events for real-time notifications
  connectToSSE(sseUrl: string) {
    try {
      const eventSource = new EventSource(sseUrl);
      
      eventSource.addEventListener('user_login', (event) => {
        try {
          const user = JSON.parse(event.data);
          this.showNewUserLogin({
            id: user.id,
            name: user.name,
            gtId: user.gtId,
            avatar: user.avatar,
            joinedAt: new Date(user.joinedAt)
          });
        } catch (error) {
          console.error('Error parsing SSE data:', error);
        }
      });

      eventSource.onerror = (error) => {
        console.error('SSE error:', error);
      };

      return () => eventSource.close();
    } catch (error) {
      console.error('Failed to connect to SSE:', error);
      return () => {};
    }
  }
}

// Create singleton instance
export const notificationManager = new NotificationManager();

// Auto-start demo mode for development
if (typeof window !== 'undefined' && import.meta.env.MODE === 'development') {
  // Start demo mode after a short delay to ensure components are mounted
  setTimeout(() => {
    notificationManager.startDemoMode();
  }, 2000);
}