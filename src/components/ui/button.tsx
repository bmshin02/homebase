import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// HomeBase buttons (DESIGN.md section 4): pill-shaped, Nunito 800,
// 48px default height, pressed state nudges down 1px. No glow.
const buttonCva = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-extrabold whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-primary-tint focus-visible:border-primary active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Blue. One per view.
        default: "bg-primary text-primary-foreground hover:bg-primary-pressed",
        // Yellow with ink text. At most one per page, marketing CTAs only.
        sun: "bg-sun text-ink hover:bg-sun-pressed",
        // White with a 2px blue border.
        outline:
          "border-2 border-primary bg-card text-primary hover:bg-primary-tint aria-expanded:bg-primary-tint",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-sun-tint/70 aria-expanded:bg-secondary",
        ghost:
          "text-primary hover:bg-primary-tint aria-expanded:bg-primary-tint",
        destructive:
          "bg-error-tint text-destructive hover:bg-destructive/15 focus-visible:ring-destructive/20",
        link: "rounded-none text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-12 gap-2 px-6 text-base has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        xs: "h-8 gap-1 px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-1.5 px-4 text-sm has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-13 gap-2 px-7 text-base has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-12",
        "icon-xs": "size-8 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10",
        "icon-lg": "size-13",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// cva only concatenates classes; run the result through cn (tailwind-merge)
// so variant classes like border-primary override base ones like
// border-transparent even when used directly on links.
function buttonVariants(...args: Parameters<typeof buttonCva>) {
  return cn(buttonCva(...args))
}

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonCva>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
