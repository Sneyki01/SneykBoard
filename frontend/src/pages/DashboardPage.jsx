import DashboardLayout from '../layouts/DashboardLayout'
import ProjectCard from '../components/dashboard/ProjectCard'
import SummaryCard from '../components/dashboard/SummaryCard'
import RecommendationCard from '../components/dashboard/RecommendationCard'
import AtRiskProjects from '../components/dashboard/AtRiskProjects'
import SearchBar from '../components/dashboard/SearchBar'
import { useEffect, useState } from 'react'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'
import ProjectDetails from '../components/projects/ProjectDetails'
import useProjectSearch from '../hooks/useProjectSearch'
import useProjectFilters from '../hooks/useProjectFilters'
import ProjectFilters from '../components/dashboard/ProjectFilters'
import useProjectSorting from '../hooks/useProjectSorting'
import ProjectSort from '../components/dashboard/ProjectSort'
import useToast from '../hooks/useToast'
import { 
    getProjects,
    getArchivedProjects,
    archiveProject,
    createProject,
    updateProject,
    restoreProject
    } from '../services/projectService'
import ProjectForm from '../components/projects/ProjectForm'
import ArchivedProjects from '../components/projects/ArchivedProjects'
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
    const [selectedProject, setSelectedProject] = useState(null)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [archivedProjects, setArchivedProjects] = useState([])
    const [isArchivedModalOpen, setIsArchivedModalOpen] = useState(false)
    const [archivedProjectsLoading, setArchivedProjectsLoading] = useState(false)
    const [archivedProjectsError, setArchivedProjectsError] = useState(null)
    const [restoringProjectId, setRestoringProjectId] = useState(null)
    const [projectDetails, setProjectDetails] = useState(null)
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [projectFilters, setProjectFilters] =useState({
        status: "ALL",
        priority: "ALL",
        type: "ALL",
    });
    const [sortOption, setSortOption] = useState("DEFAULT");
    const searchedProjects = useProjectSearch(projects, searchQuery);
    const filteredProjects = useProjectFilters(
        searchedProjects,
        projectFilters
    );
    const sortedProjects = useProjectSorting(
        filteredProjects,
        sortOption
    );
    const { showToast } = useToast();

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

            showToast({
                type: "success",
                title: "Project archived",
                message: "The project was moved to archived projects.",
            });

            await loadDashboardData();
                } catch (err) {

                    showToast({
                        type: "error",
                        title: "Unable to archive project",
                        message: err.message || "Please try again",
                    });
        }
    }

    async function handleCreateProject(projectData) {
        try {
            await createProject(projectData);
            
            setIsCreateModalOpen(false);

            showToast({
                type: "success",
                title: "Project created",
                message: "The project was created succesfully.",
            });

            await loadDashboardData()
        } catch (err) {
            showToast({
                type: "error",
                title: "Unable to create project",
                message: err.message || "Please try again.",
            });
        }
    }

    async function handleUpdateProject(projectData) {
        if (!selectedProject) {
            return;
        }

        try {
            await updateProject(selectedProject.id, projectData);

            handleCloseEditModal();

            showToast({
                type: "success",
                title: "Project updated",
                message: "The project changes were saved succesfully.",
            });

            await loadDashboardData()
        } catch (err) {
            showToast({
                type: "error",
                title: "Unable to update project",
                message: err.message || "Please try again",
            });
        }
    }

    function handleOpenEditModal (project) {
        setSelectedProject(project)
        setIsEditModalOpen(true)
    }

    function handleCloseEditModal() {
        setIsEditModalOpen(false)
        setSelectedProject(null)
    }

    async function loadArchivedProjects() {
        try {
            setArchivedProjectsLoading(true)
            setArchivedProjectsError(null)

            const data = await getArchivedProjects()

            setArchivedProjects(Array.isArray(data) ? data : [])
        } catch (err) {
            setArchivedProjectsError(
                err.message || 'Unable to load archived projects.',
            )
        } finally {
            setArchivedProjectsLoading(false)
        }
    }

    async function handleOpenArchivedModal() {
        setIsArchivedModalOpen(true)
        await loadArchivedProjects()
    }

    function handleCloseArchivedModal() {
        setIsArchivedModalOpen(false)
        setArchivedProjectsError(null)
    }

    async function handleRestoreProject(projectId) {
        try {
            setRestoringProjectId(projectId)
            setArchivedProjectsError(null)

            await restoreProject(projectId)

            setArchivedProjects((currentProjects) => 
            currentProjects.filter(
                (project) => project.id !== projectId
            )
        );

        showToast({
            type: "success",
            title: "Project restored",
            message: "The project is active again.",
        });

        await loadDashboardData()
        } catch (err) {
            showToast({
                type: "error",
                title: "Unable to restore project",
                message: err.message || "Please try again.",
            });

            setArchivedProjectsError(
                err.message || 'Unable to restore the project.',
            )
        } finally {
            setRestoringProjectId(null)
        }
    }

    function handleOpenDetails(project) {
        setProjectDetails(project);
        setIsDetailsModalOpen(true);
    }

    function handleCloseDetails() {
        setProjectDetails(null);
        setIsDetailsModalOpen(false);
    }

    function handleFilterChange(filterName, value) {
        setProjectFilters((currentFilters) => ({
            ...currentFilters,
            [filterName]: value,
        }));
    }

    function handleClearFilters( ) {
        setProjectFilters({
            status: "ALL",
            priority: "ALL",
            type: "ALL",
        });
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

            <div className='mt-8 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>

                <div className='flex flex-wrap items-center gap-3'>
                    <Button 
                        variant="primary"
                        onClick={() => setIsCreateModalOpen(true)}
                    >
                        New Project
                    </Button>

                    
                    <Button
                        variant="danger"
                        onClick={handleOpenArchivedModal}
                    >
                        Archived projects
                    </Button>
                </div>

                <div className='w-full lg:w-3xl xl:w-208'>
                    <div className='ml-auto w-full lg:max-w-lg'>
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            resultCount={filteredProjects.length}
                            />
                    </div>

                    <div className='
                        mt-3
                        flex flex-col gap-3
                        sm:flex-row
                        sm:flex-wrap
                        sm:items-center
                        lg:flex-nowrap
                        lg:justify-end'>
                        <ProjectFilters
                        projects={projects}
                        filters={projectFilters}
                        onChange={handleFilterChange}
                        onClear={handleClearFilters}
                        />

                        <ProjectSort
                        value={sortOption}
                        onChange={setSortOption}
                        />
                    </div>
                </div>
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
                {sortedProjects.map((project) => (
                    <ProjectCard 
                    key={project.id}
                    project={project}
                    onArchive={handleArchiveProject}
                    onEdit={handleOpenEditModal}
                    onDetails={handleOpenDetails}
                    />
                ))}
            </div>

            {/* Modal para crear nuevo proyecto */}
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
            
            {/* Modal para Editar proyecto */}
            <Modal
            isOpen={isEditModalOpen}
            title="Edit Project"
            onClose={handleCloseEditModal}
            >
                {selectedProject && (
                    <ProjectForm
                    mode="edit"
                    initialData={selectedProject}
                    onSubmit={handleUpdateProject}
                    onCancel={handleCloseEditModal}
                    />
                )}
            </Modal>

            {/* Modal para Detalles */}
            <Modal
            isOpen={isDetailsModalOpen}
            title="Project Details"
            onClose={handleCloseDetails}
            >
                {projectDetails && (
                    <ProjectDetails
                    project={projectDetails}
                    />
                )}
            </Modal>

            {/* Modal para Proyectos archivados */}
            <Modal
            isOpen={isArchivedModalOpen}
            title="Archived projects"
            onClose={handleCloseArchivedModal}
            >
                {archivedProjectsLoading && (
                    <div className="py-10 text-center">
                        <p className="text-text-secondary">
                            Loading archived projects...
                        </p>
                    </div>
                )}

                {!archivedProjectsLoading && archivedProjectsError && (
                    <div className="py-6 text-center">
                        <p className="text-sm text-red-400">
                            {archivedProjectsError}
                        </p>

                        <div className="mt-4">
                            <Button
                            variant="secondary"
                            size="sm"
                            onClick={loadArchivedProjects}
                            >
                                Try again
                            </Button>
                        </div>
                    </div>
                )}

                {!archivedProjectsLoading && !archivedProjectsError && (
                    <ArchivedProjects
                    projects={archivedProjects}
                    onRestore={handleRestoreProject}
                    restoringProjectId={restoringProjectId}
                    />
                )}
            </Modal>
        </DashboardLayout>
    )
}

export default DashboardPage