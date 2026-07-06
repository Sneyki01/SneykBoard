import Card from '../ui/Card'
import Button from '../ui/Button'

function RecommendationCard({ recommendation }) {
    return (
        <Card variant="glow" className="relative overflow-hidden text-left">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="absolute right-[-90px] top-[-90px] h-48 w-48 rounded-full bg-primary/25 blur-3xl" />

            <div className="relative">
                <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">
                    System Recommendation
                </p>

                <h2 className="mt-4 font-display text-2xl text-text-primary">
                    {recommendation.projectTitle || 'No urgent project'}
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-text-secondary">
                    {recommendation.message}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-primary/50 bg-primary-dark/40 px-3 py-1 font-display text-xs uppercase tracking-[0.16em] text-primary">
                        {recommendation.reason}
                    </span>

                    {recommendation.projectId && (
                        <Button size="sm" variant="secondary">
                            Open Project
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    )
}

export default RecommendationCard