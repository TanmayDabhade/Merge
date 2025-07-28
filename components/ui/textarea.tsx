import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60 dark:focus-visible:ring-primary/80 dark:focus-visible:border-primary/80 dark:placeholder:text-zinc-400 dark:bg-zinc-900/80 flex field-sizing-content min-h-16 w-full rounded-xl border bg-zinc-900 px-4 py-3 text-base shadow-md transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export default Textarea
