const API_ROOT = "https://valorant-api.com/v1";

export const getAgents = async() => {
    const response = await fetch(`${API_ROOT}/agents`);
    const agents = await response.json();
    console.log(agents.data);
    return agents.data;
}
export const getWeapons = async() => {
    const response = await fetch(`${API_ROOT}/weapons`);
    const agents = await response.json();
    console.log(agents.data);
    return agents.data;
}