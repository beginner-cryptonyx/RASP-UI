export interface StarsProps {
    stars: number
    numberOfReviews?: number|string
    displayExactStarCount?: boolean
}

const MAX_STARS = 5

function Star({ fill }: { fill: number }) {
    // fill: 0 (empty) → 1 (full); partial values render a partially filled star
    const id = `star-${Math.random().toString(36).slice(2, 9)}`
    const percent = Math.max(0, Math.min(1, fill)) * 100

    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
        >
            <defs>
                <linearGradient id={id}>
                    <stop offset={`${percent}%`} stopColor="#f5b301" />
                    <stop offset={`${percent}%`} stopColor="#d1d5db" />
                </linearGradient>
            </defs>
            <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={`url(#${id})`}
            />
        </svg>
    )
}

export default function Stars({
    stars,
    numberOfReviews,
    displayExactStarCount = false,
}: StarsProps) {
    const rating = Math.max(0, Math.min(MAX_STARS, stars))

    const label = `${rating.toFixed(1)} out of ${MAX_STARS} stars${
        numberOfReviews !== undefined ? `, ${numberOfReviews} reviews` : ""
    }`

    return (
        <div
            role="img"
            aria-label={label}
            className="inline-flex items-center gap-1.5"
        >
            <div className="inline-flex gap-0.5">
                {Array.from({ length: MAX_STARS }, (_, i) => (
                    <Star key={i} fill={rating - i} />
                ))}
            </div>

            {displayExactStarCount && (
                <span className="text-sm font-semibold text-textPrimary">
                    {rating.toFixed(1)}
                </span>
            )}

            {numberOfReviews !== undefined && (
                <span className="text-xs text-textSecondary">
                    ({numberOfReviews.toLocaleString()})
                </span>
            )}
        </div>
    )
}