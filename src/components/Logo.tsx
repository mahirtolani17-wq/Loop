export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-baseline text-white">
        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter leading-none lowercase">l</span>
        <span className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full mx-[1px] inline-block"></span>
        <span className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full mx-[1px] inline-block"></span>
        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter leading-none lowercase">p</span>
        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter leading-none mx-1">/</span>
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full inline-block"></span>
      </div>
      <span className="text-[10px] md:text-xs font-sans tracking-[0.5em] lowercase mt-1 ml-1 text-white">salon</span>
    </div>
  );
}

export function LogoBlack({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-baseline text-black">
        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter leading-none lowercase">l</span>
        <span className="w-5 h-5 md:w-6 md:h-6 bg-black rounded-full mx-[1px] inline-block"></span>
        <span className="w-5 h-5 md:w-6 md:h-6 bg-black rounded-full mx-[1px] inline-block"></span>
        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter leading-none lowercase">p</span>
        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter leading-none mx-1">/</span>
        <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-black rounded-full inline-block"></span>
      </div>
      <span className="text-[10px] md:text-xs font-sans tracking-[0.5em] lowercase mt-1 ml-1 text-black">salon</span>
    </div>
  );
}
