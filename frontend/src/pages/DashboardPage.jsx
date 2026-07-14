import DashboardLayout from '../layouts/DashboardLayout'
import ProjectCard from '../components/dashboard/ProjectCard'
import SummaryCard from '../components/dashboard/SummaryCard'
import RecommendationCard from '../components/dashboard/RecommendationCard'
import AtRiskProjects from '../components/dashboard/AtRiskProjects'
import { useEffect, useState } from 'react'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'
import { getProjects, archiveProject, createProject } from '../services/projectService'
import ProjectForm from '../components/projects/ProjectForm'
import {
    getDashboardSummary,
    getDashboardRecommendation,
    getAtRiskProjects,
} from '../services/dashboardService'


function DashboardPage() {
    const [summary, setSummary] = useState(null)
    const [recommendation, setRecommendation] = useState(null)
    const [atRiskProjects, setAtRiskProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [projects, setProjects] = useState([])
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    

    async function loadDashboardData() {
        try {
            setLoading(true)
            
            const [summaryData, recommendationData, atRiskData, projectsData] = 
            await Promise.all([
                getDashboardSummary(),
                getDashboardRecommendation(),
                getAtRiskProjects(),
                getProjects(),
            ])
            
            setSummary(summaryData)
            setRecommendation(recommendationData)
            setAtRiskProjects(Array.isArray(atRiskData) ? atRiskData : [])
            setProjects(Array.isArray(projectsData) ? projectsData : [])    
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        loadDashboardData()
    }, [])

    async function handleArchiveProject(projectId) {
        try {
            await archiveProject(projectId)
            await loadDashboardData()
                } catch (err) {
            setError(err.message)
        }
    }

    async function handleCreateProject(projectData) {
        try {
            await createProject(projectData)
            setIsCreateModalOpen(false)
            await loadDashboardData()
        } catch (err) {
            setError(err.message)
        }
    }

    if (loading) {
        return (
            <DashboardLayout>
                <p className='font-display text-primary'>Loading SneykBoard...</p>
            </DashboardLayout>
        )
    }

    if (error) {
        return (
            <DashboardLayout>
                <p className='font-display text-danger'>Error: {error}</p>
            </DashboardLayout>
        )
    }

    if (!summary || !recommendation) {
        return (
            <DashboardLayout>
                <p className='font-display text-warning'>No Dashboard Data Available.</p>
            </DashboardLayout>
        )
    }

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

            <div className="mt-8">
                <Button onClick={() => setIsCreateModalOpen(true)}>
                    New Project
                </Button>
            </div>

            
            <div className="mt-10 grid gap-6 md:grid-cols-4">
                <SummaryCard label="Total Projects" value={summary.totalProjects} helperText="Active projects" />
                <SummaryCard label="In Progress" value={summary.inProgress} variant="glow" helperText="Currently moving" />
                <SummaryCard label="Completed" value={summary.completed} variant="success" helperText="Mission complete" />
                <SummaryCard label="At Risk" value={summary.atRisk} variant="danger" helperText="Needs attention" />
            </div>

            <div className="mt-8">
                <RecommendationCard recommendation={recommendation} />
            </div>

            <div className="mt-8">
                <AtRiskProjects projects={atRiskProjects} />
            </div>

            <div className='mt-10 grid gap-6 lg:grid-cols-2'>
                {projects.map((project) => (
                    <ProjectCard key={project.id}
                    project={project}
                    onArchive={handleArchiveProject} 
                    />
                ))}
            </div>

            <Modal
                isOpen={isCreateModalOpen}
                title="Create New Project"
                onClose={() => setIsCreateModalOpen(false)}
            >
                <ProjectForm
                mode="create"
                onSubmit={handleCreateProject}
                onCancel={() => setIsCreateModalOpen(false)}
                />
            </Modal>
        </DashboardLayout>
    )
}

export default DashboardPage