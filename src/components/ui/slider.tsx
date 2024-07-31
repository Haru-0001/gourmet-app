"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

//shadn/uiによって自動生成されたRadixのSliderコンポーネントをカスタマイズ

type ExtendedSliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  theme ?: { thumbTheme: string, ringTheme: string }
};

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  ExtendedSliderProps
>(({ className, onValueChange, theme, defaultValue, ...props }, ref) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleValueChange = (value: number[]) => {
    setValue(value)
    if (onValueChange) {
      onValueChange?.(value)
    }
  }
  const setTheme = theme || { thumbTheme: "bg-slate-800", ringTheme: "ring-offset-slate-600" }

  return (
  <SliderPrimitive.Root
    value = {value}
    onValueChange={ handleValueChange }
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-800/50">
      <SliderPrimitive.Range className="absolute h-full bg-slate-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={`block h-5 w-5 rounded-full border-2 border-slate-50 ${setTheme.thumbTheme} ${setTheme.ringTheme} transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-100 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`} />
  </SliderPrimitive.Root>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
