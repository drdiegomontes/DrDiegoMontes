export default function HeroContent() {
  return (
    <div className="relative z-20 min-h-screen">
      {/* Top Left Title */}
      <div className="absolute top-[6vw] left-[6vw]">
        <div className="text-[min(10vw,5em)] leading-[0.9] font-playfair">
          <span className="italic">About</span>
          <br />
          Our Practice
        </div>
      </div>

      {/* Bottom Left Text */}
      <div className="absolute bottom-[6vw] left-[6vw]">
        <div className="text-[min(15vw,20em)] leading-[0.9] font-playfair font-black">B</div>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-[6vw] right-[6vw] text-right text-sm leading-relaxed">
        <div>2025</div>
        <div>Wellness</div>
        <div>Practice</div>
      </div>

      {/* Right Middle Text */}
      <div className="absolute top-1/2 right-[6vw] -translate-y-1/2 origin-right rotate-90 text-sm">
        A flight of wellness
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/2 left-0 w-[150px] h-[2px] bg-black/10" />
      <div className="absolute top-0 left-1/2 w-[2px] h-[150px] bg-black/10" />
    </div>
  )
}

