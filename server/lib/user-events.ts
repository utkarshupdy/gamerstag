// Backend user event management for GAMERS TAG notification system
export interface UserLoginEvent {
  id: string;
  name: string;
  gtId: string;
  avatar?: string;
  joinedAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

export class UserEventManager {
  private static instance: UserEventManager;
  private eventHandlers: Set<(event: UserLoginEvent) => void> = new Set();
  private recentUsers: UserLoginEvent[] = [];

  static getInstance(): UserEventManager {
    if (!UserEventManager.instance) {
      UserEventManager.instance = new UserEventManager();
    }
    return UserEventManager.instance;
  }

  // Register event handler for new user logins
  onUserLogin(handler: (event: UserLoginEvent) => void) {
    this.eventHandlers.add(handler);
    return () => this.eventHandlers.delete(handler);
  }

  // Emit user login event
  emitUserLogin(user: UserLoginEvent) {
    this.recentUsers.unshift(user);
    // Keep only last 50 recent users
    if (this.recentUsers.length > 50) {
      this.recentUsers = this.recentUsers.slice(0, 50);
    }
    
    // Notify all handlers
    this.eventHandlers.forEach(handler => {
      try {
        handler(user);
      } catch (error) {
        console.error('Error in user login handler:', error);
      }
    });
  }

  // Get recent user logins since timestamp
  getRecentUsers(since?: Date): UserLoginEvent[] {
    if (!since) return this.recentUsers;
    
    return this.recentUsers.filter(user => 
      user.joinedAt > since
    );
  }

  // Simulate user login for demo (remove in production)
  simulateUserLogin() {
    const demoUsers = [
      {
        id: crypto.randomUUID(),
        name: 'Alex Thunder',
        gtId: 'GT' + Math.random().toString().slice(2, 8),
        avatar: '/images/demo-avatars/alex.jpg',
        joinedAt: new Date()
      },
      {
        id: crypto.randomUUID(),
        name: 'Sarah Storm', 
        gtId: 'GT' + Math.random().toString().slice(2, 8),
        avatar: '/images/demo-avatars/sarah.jpg',
        joinedAt: new Date()
      }
    ];

    const randomUser = demoUsers[Math.floor(Math.random() * demoUsers.length)];
    this.emitUserLogin(randomUser);
  }
}

// Export singleton instance
export const userEventManager = UserEventManager.getInstance();