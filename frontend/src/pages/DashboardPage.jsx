import DashboardLayout from '../layouts/DashboardLayout'
import ProjectCard from '../components/dashboard/ProjectCard'
import SummaryCard from '../components/dashboard/SummaryCard'
import RecommendationCard from '../components/dashboard/RecommendationCard'
import AtRiskProjects from '../components/dashboard/AtRiskProjects'
import {
    dashboardSummaryMock,
    demoProject,
    demoRecommendation,
    demoAtRiskProjects,
} from '../constants/dashboardMockData'

function DashboardPage() {
    return (
        <DashboardLayout>
            <p className="font-display text-sm uppercase tracking-[0.4em] text-primary">
                SneykDev Ecosystem
            </p>

            <h1 className="mt-4 font-display text-5xl font-black tracking-tight drop-shadow-[0_0_24px_rgba(118,38,218,0.75)]">
                SneykBoard
            </h1>

            <p className="mt-4 max-w-2xl text-text-secondary">
                Personal Dev & QA Mission Control
            </p>

            
            <div className="mt-10 grid gap-6 md:grid-cols-4">
                <SummaryCard label="Total Projects" value={12} helperText="Active projects" />
                <SummaryCard label="In Progress" value={4} variant="glow" helperText="Currently moving" />
                <SummaryCard label="Completed" value={7} variant="success" helperText="Mission complete" />
                <SummaryCard label="At Risk" value={2} variant="danger" helperText="Needs attention" />
            </div>

            <div className="mt-8">
                <RecommendationCard recommendation={demoRecommendation} />
            </div>

            <div className="mt-8">
                <AtRiskProjects projects={demoAtRiskProjects} />
            </div>

            <div className="mt-10 max-w-2xl">
                <ProjectCard project={demoProject} />
            </div>
        </DashboardLayout>
    )
}

export default DashboardPage