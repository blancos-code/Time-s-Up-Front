import {httpClient} from "../config/api/axios.ts";

export function getUserTeams() {
    return httpClient.get('teams')
}

export function getTeamById(teamId: number) {
    return httpClient.get(`teams/${teamId}/members`)
}

export function addTeamMember(teamId: number, userId: number) {
    return httpClient.postForm(`teams/${teamId}/members`, {userId: userId})
}

export function deleteTeamMember(teamId: number, userId: number) {
    return httpClient.delete(`teams/${teamId}/members`, {userId: userId})
}

export function createTeam(teamName: string) {
    return httpClient.postForm('teams', {name: teamName})
}

export function editTeam(teamName: string) {
    return httpClient.putForm('teams', {name: teamName})
}

export function deleteTeam(teamId: number) {
    return httpClient.delete(`teams/${teamId}`)
}