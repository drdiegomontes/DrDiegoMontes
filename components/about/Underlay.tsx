export default function Underlay() {
  return (
    <div className="absolute inset-0 z-10">
      {/* Top Left */}
      <div className="absolute top-[6vw] left-[6vw] font-playfair font-bold text-[min(10vw,5em)] leading-[0.9em]">
        <i>Design</i>
        <br />
        Type
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-[6vw] left-[6vw] font-playfair font-black text-[min(15vw,20em)] leading-[0.9em]">
        B
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-[6vw] right-[6vw] font-inter font-normal text-xs leading-normal tracking-[-0.01em] text-right">
        2021
        <br />
        poimandres
        <br />
        dev collective
      </div>

      {/* Left Middle */}
      <div className="absolute bottom-1/2 right-[6vw] font-inter font-normal text-xs leading-normal tracking-[-0.01em] rotate-90 translate-x-1/2 origin-right">
        A flight of stairs
      </div>

      {/* Hamburger */}
      <div className="absolute top-[6vw] right-[6vw] flex flex-col">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-6 h-0.5 bg-[#252525] mb-1.5" />
        ))}
      </div>

      {/* Bars */}
      <div className="absolute top-1/2 left-0 w-[150px] h-[2px] bg-[#252525]" />
      <div className="absolute top-0 left-1/2 w-[2px] h-[150px] bg-[#252525]" />
    </div>
  )
}

