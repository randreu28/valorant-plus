const API_ROOT = "https://valorant-api.com/v1";

export const getAgents = async () => {
  const response = await fetch(`${API_ROOT}/agents`);
  const agents = await response.json();
  console.log(agents.data);
  return agents.data;
};

export const getWeapons = async () => {
  const response = await fetch(`${API_ROOT}/weapons`);
  const agents = await response.json();
  console.log(agents.data);
  return agents.data;
};

export const getIntroSlides = async () => {
  const agents = await getAgents();
  const introSlides = [
    {displayName: 'Welcome to Valorant+', displayIcon: agents[2].fullPortrait, background: agents[2].background},
    {displayName: 'In this app, you can find information about your favorite agents.', displayIcon: agents[3].fullPortrait, background: agents[3].background},
    {displayName: 'You can customize your profile in many ways.', displayIcon: agents[5].fullPortrait, background: agents[5].background},
    {displayName: 'You can see all the weapons and their skins.', displayIcon: agents[7].fullPortrait, background: agents[7].background},
    {displayName: 'And you can even see all the game maps.', displayIcon: agents[15].fullPortrait, background: agents[15].background},
  ]
  return introSlides;
};

export const getMaps = async () => {
  const response = await fetch(`${API_ROOT}/maps`);
  const maps = await response.json();
  console.log(maps.data);
  return maps.data;
};
