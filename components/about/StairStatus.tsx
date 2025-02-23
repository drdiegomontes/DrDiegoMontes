interface StairStatusProps {
  activeCycle: number
}

export default function StairStatus({ activeCycle }: StairStatusProps) {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
      <div className="text-sm mr-2">stair-{activeCycle + 1}</div>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full ${i === activeCycle ? "bg-[#7FFFD4]" : "bg-black/10"}`} />
      ))}
    </div>
  )
}

