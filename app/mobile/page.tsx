"use client"

import MobileHeader from "@/components/mobile/MobileHeader"
import MobileHero from "@/components/mobile/MobileHero"
import MobileFeaturedServices from "@/components/mobile/MobileFeaturedServices"
import MobileBeyondVisions from "@/components/mobile/MobileBeyondVisions"
import MobilePlayReel from "@/components/mobile/MobilePlayReel"
import MobileScrollingTestimonials from "@/components/mobile/MobileScrollingTestimonials"
import MobileProcessSteps from "@/components/mobile/MobileProcessSteps"
import MobileCallToAction from "@/components/mobile/MobileCallToAction"
import MobileLetsWorkTogether from "@/components/mobile/MobileLetsWorkTogether"

export default function MobileHomePage() {
  return (
    <div>
      <MobileHeader />
      <main>
        <MobileHero />
        <MobileFeaturedServices />
        <MobileBeyondVisions />
        <MobilePlayReel />
        <MobileScrollingTestimonials />
        <MobileProcessSteps />
        <MobileCallToAction />
        <MobileLetsWorkTogether />
        <div className="h-px bg-white"></div>
      </main>
    </div>
  )
}

