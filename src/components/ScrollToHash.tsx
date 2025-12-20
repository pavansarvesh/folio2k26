import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    const { hash } = location

    // Allow the new route to render before trying to scroll.
    requestAnimationFrame(() => {
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }, [location])

  return null
}
