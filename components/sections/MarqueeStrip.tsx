const MARQUEE_TEXT =
  'STRAPPING ROLLS · BOPP TAPE ROLLS · PET STRAPS · STRETCH FILMS · TAPING MACHINES · 30 YEARS IN BUSINESS · MUMBAI BASED · B2B SPECIALISTS · '

export function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        backgroundColor: '#040e3a',
        borderTop: '1px solid rgba(243,207,45,0.15)',
        borderBottom: '1px solid rgba(243,207,45,0.15)',
      }}
      aria-hidden="true"
    >
      {/* Two copies — first copy animates to -50% then seamlessly loops */}
      <div className="flex whitespace-nowrap animate-marquee">
        <span
          className="text-sm font-bold uppercase tracking-[0.25em] pr-0"
          style={{ color: 'rgba(243,207,45,0.65)' }}
        >
          {MARQUEE_TEXT}
        </span>
        <span
          className="text-sm font-bold uppercase tracking-[0.25em]"
          style={{ color: 'rgba(243,207,45,0.65)' }}
        >
          {MARQUEE_TEXT}
        </span>
      </div>
    </div>
  )
}
