import Input from '../ui/Input'
import TextArea from '../ui/TextArea'
import Select from '../ui/Select'
import { useState } from 'react'
import Button from '../ui/Button'

const initialForm = {
    title: '',
    description: '',
    status: '',
    priority: '',
    type: '',
    progress: 0,
}

const priorityOptions = [
    { value: 'LOW', label: 'Low' },
    { value: 'MEDIUM', label: 'Medium' },
    { value: 'HIGH', label: 'High' },
    { value: 'CRITICAL', label: 'Critical' },
]

const statusOptions = [
    { value: 'IDEA', label: 'Idea' },
    { value: 'PLANNED', label: 'Planned' },
    { value: 'IN_PROGRESS', label: 'In Progress' },
    { value: 'BLOCKED', label: 'Blocked' },
    { value: 'COMPLETED', label: 'Completed' },
    { value: 'ABANDONED', label: 'Abandoned' },
]

const projectTypeOptions = [
    { value: 'BACKEND', label: 'Backend' },
    { value: 'FRONTEND', label: 'Frontend' },
    { value: 'FULLSTACK', label: 'Fullstack' },
    { value: 'QA', label: 'QA' },
    { value: 'AUTOMATION', label: 'Automation' },
    { value: 'PERSONAL', label: 'Personal' },
]




function CreateProjectForm({ onSubmit, onCancel }) {
    const [formData, setFormData] = useState(initialForm)
    const [errors, setErrors] = useState({})
    
    function handleChange(event) {
        const { name, value } = event.target
        
        setFormData((currentForm) => ({
            ...currentForm,
            [name]: name === 'progress' ? Number(value) : value,
        }))
    }
    //Validacion provicional
    function validateForm() {
        const nextErrors = {}
        
        if (!formData.title.trim()) {
            nextErrors.title = 'Project title is required'
        }
        
        if (!formData.description.trim()) {
            nextErrors.description = 'Description is required'
        }
        
        if (!formData.status) {
            nextErrors.status = 'Status is required'
        }
        
        if (!formData.priority) {
            nextErrors.priority = 'Priority is required'
        }
        
        if (!formData.type) {
            nextErrors.type = 'Project type is required'
        }
        
        if (formData.progress < 0 || formData.progress > 100) {
            nextErrors.progress = 'Progress must be between 0 and 100'
        }
        
        setErrors(nextErrors)
        
        return Object.keys(nextErrors).length === 0
    }
    
    async function handleSubmit(event) {
        event.preventDefault()
        
        if (!validateForm()) {
            return
        }
        
        await onSubmit(formData)
    }
    
    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <Input
                id="project-title"
                name="title"
                label="Project Title"
                placeholder="Enter project title"
                value={formData.title}
                onChange={handleChange}
                error={errors.title}
                />

            <TextArea
                id="project-description"
                name="description"
                label="Description"
                placeholder="Describe your project..."
                value={formData.description}
                onChange={handleChange}
                error={errors.description}
            />

            <Select
                id="project-status"
                name="status"
                label="Status"
                options={statusOptions}
                placeholder="Select project status"
                value={formData.status}
                onChange={handleChange}
                error={errors.status}
            />

            <Select
                id="project-priority"
                name="priority"
                label="Priority"
                options={priorityOptions}
                placeholder="Select project priority"
                value={formData.priority}
                onChange={handleChange}
                error={errors.priority}
            />

            <Select
                id="project-type"
                name="type"
                label="Project Type"
                options={projectTypeOptions}
                placeholder="Select project type"
                value={formData.type}
                onChange={handleChange}
                error={errors.type}
            />

            <Input
                id="project-progress"
                name="progress"
                label="Progress"
                type="number"
                min="0"
                max="100"
                placeholder="0"
                value={formData.progress}
                onChange={handleChange}
                error={errors.progress}
            />

            <div className="flex flex-wrap justify-end gap-3 pt-4">
                <Button type="button" variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>

                <Button type="submit">
                    Create Project
                </Button>
            </div>
        </form>
    )
}

export default CreateProjectForm