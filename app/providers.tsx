"use client"

import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

const hasKey = typeof window !== "undefined" && !!process.env.NEXT_PUBLIC_POSTHOG_KEY

// Inicializar PostHog del lado del cliente
if (hasKey) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    person_profiles: "identified_only", // 'identified_only' evita crear perfiles anónimos innecesarios
    capture_pageview: false, // Evita capturas dobles en SPAs
    capture_heatmaps: true,  // Habilita mapas de calor e interacciones
  })
}

// Componente para rastrear cambios de página en Next.js
function PostHogPageviewContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (hasKey && pathname) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture("$pageview", {
        $current_url: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Envoltura de Suspense para evitar deopts de pre-renderizado estático
export function PostHogPageview() {
  if (!hasKey) return null
  return (
    <Suspense fallback={null}>
      <PostHogPageviewContent />
    </Suspense>
  )
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  if (!hasKey) {
    return <>{children}</>
  }
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
