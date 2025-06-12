import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { 
  Zap, 
  Cpu, 
  Wifi, 
  Battery, 
  Signal, 
  Activity,
  Shield,
  Target,
  Radar
} from 'lucide-react';

interface CyberpunkHUDProps {
  className?: string;
  variant?: 'minimal' | 'full' | 'gaming' | 'tactical' | 'neon' | 'matrix' | 'radar' | 'terminal';
  animated?: boolean;
}

export function CyberpunkHUD({ 
  className, 
  variant = 'full',
  animated = true 
}: CyberpunkHUDProps) {
  const [systemStatus, setSystemStatus] = useState(100);
  const [networkSignal, setNetworkSignal] = useState(85);
  const [cpuUsage, setCpuUsage] = useState(45);

  useEffect(() => {
    if (!animated) return;

    const interval = setInterval(() => {
      setSystemStatus(prev => Math.max(85, Math.min(100, prev + (Math.random() - 0.5) * 10)));
      setNetworkSignal(prev => Math.max(70, Math.min(100, prev + (Math.random() - 0.5) * 15)));
      setCpuUsage(prev => Math.max(20, Math.min(80, prev + (Math.random() - 0.5) * 20)));
    }, 2000);

    return () => clearInterval(interval);
  }, [animated]);

  const getStatusColor = (value: number) => {
    if (value >= 80) return '#E5042F';
    if (value >= 60) return '#ff6b35';
    return '#ffd23f';
  };

  if (variant === 'minimal') {
    return (
      <div className={cn("fixed top-4 right-4 z-50", className)}>
        <div className="hud-panel p-3 rounded-lg">
          <div className="flex items-center gap-3 text-sm">
            <div className="cyber-icon">
              <Zap className="w-4 h-4 text-[#E5042F]" />
            </div>
            <div className="cyber-icon">
              <Wifi className="w-4 h-4 text-[#E5042F]" />
            </div>
            <div className="cyber-icon">
              <Battery className="w-4 h-4 text-[#E5042F]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'tactical') {
    return (
      <div className={cn("fixed top-4 left-4 z-50 space-y-4", className)}>
        {/* Tactical Grid */}
        <motion.div 
          className="bg-gradient-to-br from-[#171717]/95 to-black/90 border-2 border-[#E5042F]/60 p-4 rounded-none relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="absolute top-1 right-1 w-2 h-2 bg-[#E5042F] animate-pulse"></div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center">
              <Target className="w-5 h-5 mx-auto text-[#E5042F] mb-1" />
              <div className="text-white">TGT</div>
            </div>
            <div className="text-center">
              <Radar className="w-5 h-5 mx-auto text-[#E5042F] mb-1" />
              <div className="text-white">RAD</div>
            </div>
            <div className="text-center">
              <Shield className="w-5 h-5 mx-auto text-[#E5042F] mb-1" />
              <div className="text-white">DEF</div>
            </div>
          </div>
        </motion.div>

        {/* Tactical Status */}
        <motion.div 
          className="bg-black/80 border border-[#E5042F]/40 p-3 relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E5042F]/5 to-transparent"></div>
          <div className="relative">
            <div className="text-xs text-[#E5042F] mb-1">TACTICAL STATUS</div>
            <div className="text-white text-sm font-mono">ONLINE</div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'neon') {
    return (
      <div className={cn("fixed bottom-4 right-4 z-50 space-y-3", className)}>
        {/* Neon Power Core */}
        <motion.div 
          className="relative bg-black/90 border border-[#E5042F] p-4 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            boxShadow: '0 0 20px rgba(229, 4, 47, 0.5), inset 0 0 20px rgba(229, 4, 47, 0.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E5042F]/10 to-transparent rounded-lg"></div>
          <div className="relative text-center">
            <div className="w-12 h-12 mx-auto mb-2 relative">
              <div className="absolute inset-0 border-2 border-[#E5042F] rounded-full animate-spin"></div>
              <div className="absolute inset-2 bg-[#E5042F] rounded-full opacity-60 animate-pulse"></div>
            </div>
            <div className="text-[#E5042F] text-xs font-mono">POWER: {systemStatus.toFixed(0)}%</div>
          </div>
        </motion.div>

        {/* Neon Data Stream */}
        <motion.div 
          className="bg-black/80 border border-[#E5042F]/60 p-3 rounded relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#E5042F] to-transparent animate-pulse"></div>
          <div className="text-xs text-[#E5042F] mb-1">DATA STREAM</div>
          <div className="font-mono text-xs text-white">
            {new Date().toLocaleTimeString('en-US', { hour12: false })}
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'matrix') {
    return (
      <div className={cn("fixed top-1/2 left-4 transform -translate-y-1/2 z-50", className)}>
        <motion.div 
          className="bg-black/95 border-l-4 border-[#E5042F] p-4 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)'
          }}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#E5042F] animate-pulse"></div>
              <div className="text-xs text-[#E5042F] font-mono">SYS_STATUS</div>
            </div>
            <div className="text-white text-xs font-mono">
              CPU: {cpuUsage.toFixed(0)}%<br/>
              NET: {networkSignal.toFixed(0)}%<br/>
              PWR: {systemStatus.toFixed(0)}%
            </div>
          </div>
          
          {/* Matrix rain effect */}
          <div className="absolute right-2 top-0 bottom-0 w-1 overflow-hidden">
            <div 
              className="w-full h-4 bg-gradient-to-b from-[#E5042F] to-transparent"
              style={{
                animation: 'hudScan 2s linear infinite'
              }}
            ></div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'radar') {
    return (
      <div className={cn("fixed bottom-4 left-4 z-50", className)}>
        <motion.div 
          className="bg-black/90 border-2 border-[#E5042F]/60 p-4 rounded-full relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            width: '120px',
            height: '120px',
            boxShadow: '0 0 30px rgba(229, 4, 47, 0.4), inset 0 0 30px rgba(229, 4, 47, 0.1)'
          }}
        >
          {/* Radar Grid */}
          <div className="absolute inset-2 border border-[#E5042F]/30 rounded-full"></div>
          <div className="absolute inset-4 border border-[#E5042F]/20 rounded-full"></div>
          
          {/* Radar Sweep */}
          <div 
            className="absolute inset-2 rounded-full overflow-hidden"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(229, 4, 47, 0.3) 30deg, transparent 60deg)',
              animation: 'spin 3s linear infinite'
            }}
          ></div>
          
          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#E5042F] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
          
          {/* Blips */}
          <div className="absolute top-6 right-8 w-1 h-1 bg-[#E5042F] rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-6 w-1 h-1 bg-[#E5042F] rounded-full animate-pulse"></div>
          
          {/* Label */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#E5042F] font-mono">
            RADAR
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === 'terminal') {
    return (
      <div className={cn("fixed top-4 left-1/2 transform -translate-x-1/2 z-50", className)}>
        <motion.div 
          className="bg-black/95 border border-[#E5042F]/60 p-4 font-mono text-xs relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            minWidth: '300px',
            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
          }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#E5042F]/30">
            <div className="text-[#E5042F]">GAMERS_TAG_TERMINAL</div>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-[#E5042F] rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#E5042F]/50 rounded-full"></div>
              <div className="w-2 h-2 bg-[#E5042F]/30 rounded-full"></div>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="space-y-1 text-white">
            <div className="text-[#E5042F]">&gt; system_status --check</div>
            <div>STATUS: ONLINE</div>
            <div>USERS: {Math.floor(Math.random() * 1000) + 500}K</div>
            <div>UPTIME: 99.{Math.floor(Math.random() * 10)}%</div>
            <div className="text-[#E5042F] animate-pulse">&gt; _</div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={cn("fixed top-4 right-4 z-50 space-y-4", className)}>
      {/* Main Status Panel */}
      <motion.div 
        className="hud-panel p-4 rounded-lg min-w-[200px]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-3">
          {/* System Status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 cyber-icon" style={{ color: getStatusColor(systemStatus) }} />
              <span className="text-xs text-white/80">SYSTEM</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1 bg-[#171717] rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500"
                  style={{ 
                    width: `${systemStatus}%`,
                    backgroundColor: getStatusColor(systemStatus),
                    boxShadow: `0 0 4px ${getStatusColor(systemStatus)}`
                  }}
                />
              </div>
              <span className="text-xs text-white/60 min-w-[30px]">{systemStatus.toFixed(0)}%</span>
            </div>
          </div>

          {/* Network Signal */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Signal className="w-4 h-4 cyber-icon" style={{ color: getStatusColor(networkSignal) }} />
              <span className="text-xs text-white/80">NETWORK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1 bg-[#171717] rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500"
                  style={{ 
                    width: `${networkSignal}%`,
                    backgroundColor: getStatusColor(networkSignal),
                    boxShadow: `0 0 4px ${getStatusColor(networkSignal)}`
                  }}
                />
              </div>
              <span className="text-xs text-white/60 min-w-[30px]">{networkSignal.toFixed(0)}%</span>
            </div>
          </div>

          {/* CPU Usage */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 cyber-icon" style={{ color: getStatusColor(100 - cpuUsage) }} />
              <span className="text-xs text-white/80">CPU</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-16 h-1 bg-[#171717] rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-500"
                  style={{ 
                    width: `${cpuUsage}%`,
                    backgroundColor: getStatusColor(100 - cpuUsage),
                    boxShadow: `0 0 4px ${getStatusColor(100 - cpuUsage)}`
                  }}
                />
              </div>
              <span className="text-xs text-white/60 min-w-[30px]">{cpuUsage.toFixed(0)}%</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions Panel */}
      {variant === 'full' && (
        <motion.div 
          className="hud-panel p-3 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-3 gap-2">
            <button className="cyber-icon p-2 rounded bg-[#171717]/50 hover:bg-[#E5042F]/20 transition-colors">
              <Target className="w-4 h-4 text-[#E5042F]" />
            </button>
            <button className="cyber-icon p-2 rounded bg-[#171717]/50 hover:bg-[#E5042F]/20 transition-colors">
              <Activity className="w-4 h-4 text-[#E5042F]" />
            </button>
            <button className="cyber-icon p-2 rounded bg-[#171717]/50 hover:bg-[#E5042F]/20 transition-colors">
              <Radar className="w-4 h-4 text-[#E5042F]" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Time Display */}
      <motion.div 
        className="hud-panel p-3 rounded-lg text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-xs text-white/60 mb-1">LOCAL TIME</div>
        <div className="text-sm font-mono text-[#E5042F] neon-text">
          {new Date().toLocaleTimeString('en-US', { 
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default CyberpunkHUD;