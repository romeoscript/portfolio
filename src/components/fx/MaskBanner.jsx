import SectionLabel from './SectionLabel';

/**
 * A solid panel with the word knocked out of it, revealing a drifting
 * light field underneath.
 */
const MaskBanner = ({ word = 'BUILD' }) => (
  <section className="relative h-[46vh] sm:h-[62vh] w-full overflow-hidden bg-black border-t border-white/[0.06]">
    <SectionLabel index="07" title="Impact" />

    <div className="absolute inset-0 mesh-drift" aria-hidden="true" />

    <div className="absolute inset-0 z-10 w-full h-full" aria-hidden="true">
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <mask id="banner-text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="700"
              fontSize="19vw"
              letterSpacing="-0.03em"
              fill="black"
            >
              {word}
            </text>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="#050505" mask="url(#banner-text-mask)" />
      </svg>
    </div>

    <span className="sr-only">{word}</span>
  </section>
);

export default MaskBanner;
