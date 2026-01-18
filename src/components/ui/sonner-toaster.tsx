"use client"

import { Toaster as Sonner } from "sonner"

export function SonnerToaster() {
  return (
    <Sonner
      position="top-right"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "bg-white border border-gray-200 shadow-lg",
          title: "text-gray-900 font-semibold",
          description: "text-gray-600",
          actionButton: "bg-emerald-600 hover:bg-emerald-700 text-white",
          cancelButton: "bg-gray-200 hover:bg-gray-300 text-gray-800",
        },
      }}
    />
  )
}
