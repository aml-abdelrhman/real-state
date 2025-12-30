// components/ArrowButtons.tsx
export default function ArrowButtons({ onPrev, onNext }: { onPrev?: () => void; onNext?: () => void }) {
  return (
    <div className="flex gap-[10px] mt-4 md:mt-0">
      {/* Left */}
      <div
        onClick={onPrev}
        className="w-[61px] h-[61px] rounded-[40px] bg-[#4297A7] flex items-center justify-center text-[21px] font-light rotate-180 cursor-pointer transition duration-300 ease-out hover:scale-110"
      >
        →
      </div>

      {/* Right */}
      <div
        onClick={onNext}
        className="w-[61px] h-[61px] rounded-[40px] border border-white flex items-center justify-center text-[21px] font-light cursor-pointer transition duration-300 ease-out hover:scale-110"
      >
        →
      </div>
    </div>
  );
}
