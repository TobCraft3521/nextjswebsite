"use client"
import { useFeatureFlagEnabled } from "posthog-js/react"

export const dynamic = "force-dynamic" //dont cache

const ABTestComponent = () => {
  const flagEnabled = useFeatureFlagEnabled("my-flag-a")

  return (
    <div className="mx-auto flex justify-center">
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-center">
        AB TEST COMPONENT {flagEnabled ? "A" : "B"}
      </div>
    </div>
  )
}

export default ABTestComponent
