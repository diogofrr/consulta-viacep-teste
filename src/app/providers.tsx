'use client'

import StatusProvider from "@/context/Status/StatusProvider"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <StatusProvider>
      {children}
    </StatusProvider>
  )
}