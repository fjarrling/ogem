import * as React from "react"

import {cn} from "@/lib/utils"

function Input({className, type, ...props}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Основа: кастомные отступы, высота и фон
        "flex w-full min-w-0 rounded-md border bg-white px-[12px] py-[11px] text-base leading-[24px] shadow-none transition-[color,box-shadow] outline-none",
        // Обработка состояния файлового input
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        // Обработка placeholder'а, выделения и отключённого состояния
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // Состояния фокуса и валидации
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        // Поддержка тёмной темы
        "dark:bg-input/30 border-input",
        className
      )}
      {...props}
    />
  )
}

export {Input}
