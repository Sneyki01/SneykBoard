import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

function RecommendationCard({ recommendation, onOpenProject }) {
    return (
        <Card variant="glow" className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-primary/5" />
            <div className="pointer-events-none absolute -right-22 -top-22 h-48 w-48 rounded-full bg-primary/25 blur-3xl" />

            <div className="relative">
                <p className="font-display text-xs uppercase tracking-[0.28em] text-primary-soft">
                    System Recommendation
                </p>

                <h2 className="mt-4 font-display text-2xl text-text-primary">
                    {recommendation.projectTitle || 'No urgent project'}
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-text-secondary">
                    {recommendation.message}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {recommendation.reason && (
                        <Badge variant="primary">
                            {recommendation.reason}
                        </Badge>
                    )}

                    {recommendation.projectId && (
                        <Button size="sm" variant="secondary" onClick={onOpenProject}>
                            Open Project
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    );
}

export default RecommendationCard;