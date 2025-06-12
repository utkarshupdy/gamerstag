import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { playClickSound } from "@/lib/sound-effects"

const buttonVariants = cva(
  "rectangular-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5042F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-visible border-2",
  {
    variants: {
      variant: {
        // Red button style - primary gaming action
        default: "rectangular-button--red",
        // White button style - secondary action  
        outline: "rectangular-button--white",
        // Dark outlined variant - for special cases
        secondary: "bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]",
        // Destructive variant
        destructive: "rectangular-button--red",
        // Ghost variant
        ghost: "bg-transparent text-white hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]",
        // Link variant
        link: "text-[#E5042F] underline-offset-4 hover:underline hover:text-[#E5042F]/80",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 py-1 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      playClickSound();
      onClick?.(e);
    };
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
