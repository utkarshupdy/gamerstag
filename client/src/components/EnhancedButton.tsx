import { forwardRef, cloneElement, isValidElement } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useGameSounds } from '@/hooks/use-sound';
import { cn } from '@/lib/utils';

import { playClickSound } from "@/lib/sound-effects";

interface EnhancedButtonProps extends ButtonProps {
  soundEnabled?: boolean;
  glowEffect?: boolean;
  neonStyle?: boolean;
}

export const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, soundEnabled = true, glowEffect = true, neonStyle = false, onMouseEnter, onClick, children, asChild, ...props }, ref) => {
    const { buttonClick, buttonHover } = useGameSounds();

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (soundEnabled) buttonHover();
      onMouseEnter?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (soundEnabled) {
        buttonClick();
        playClickSound(); // Add the click sound effect
      }
      onClick?.(e);
    };

    if (asChild && isValidElement(children)) {
      const childElement = children as React.ReactElement<any>;
      return cloneElement(childElement, {
        ...childElement.props,
        className: cn(
          "rectangular-button relative overflow-visible font-bold group border-2",
          glowEffect && "hover:scale-[1.02] active:scale-[0.98]",
          neonStyle && "rectangular-button--red hover:shadow-[0_0_30px_rgba(229,4,47,0.6)]",
          className,
          childElement.props.className
        ),
        onMouseEnter: handleMouseEnter,
        onClick: handleClick,
        ref,
        ...props
      });
    }

    return (
      <Button
        ref={ref}
        className={cn(
          "rectangular-button relative overflow-visible font-bold group border-2",
          glowEffect && "hover:scale-[1.02] active:scale-[0.98]",
          neonStyle && "rectangular-button--red hover:shadow-[0_0_30px_rgba(229,4,47,0.6)]",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        {neonStyle && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        )}
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";