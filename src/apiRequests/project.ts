import {httpClient} from "../config/api/axios.ts";

export function getUserProjects() {
    return httpClient.get('projects')
}

export function getProjectById(projectId: number) {
    return httpClient.get(`projects/${projectId}`)
}

export function getProjectTasks(projectId: number) {
    return httpClient.get(`projects/${projectId}/tasks`)
}

export function createTask(projectId: number, taskInfos: object) {
    return httpClient.postForm(`projects/${projectId}/tasks`, taskInfos)
}

export function deleteTask(projectId: number, taskId: number) {
    return httpClient.delete(`projects/${projectId}/tasks/${taskId}`)
}

export function updateTask(projectId: number, taskId: number, taskInfos: object) {
    return httpClient.putForm(`projects/${projectId}/tasks/${taskId}`, taskInfos)
}

export function createProject() {
    return httpClient.postForm(`projects`)
}

export function deleteProject(projectId: number) {
    return httpClient.delete(`projects/${projectId}`)
}

export function updateProject(projectId: number, projectData) {
    return httpClient.putForm(`projects/${projectId}`, projectData)
}

