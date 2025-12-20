import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location
    const scrollBehavior: ScrollBehavior =
      (location.state as { scrollBehavior?: ScrollBehavior } | null)?.scrollBehavior ?? "smooth"

    // Allow the new route to render before trying to scroll.
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: scrollBehavior, block: "start" })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: scrollBehavior })
    })
  }, [location])

  return null
}
