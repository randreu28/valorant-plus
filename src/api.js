import { state } from "./state";

const API_ROOT = "https://valorant-api.com/v1";

export const getAgents = async (id = '') => {
  const response = await fetch(`${API_ROOT}/agents/${id}`);
  const agents = await response.json();
  return agents.data;
};

export const getWeapons = async (id = '') => {
  const response = await fetch(`${API_ROOT}/weapons/${id}`);
  const agents = await response.json();
  return agents.data;
};

export const getMaps = async (id = '') => {
  const response = await fetch(`${API_ROOT}/maps/${id}`);
  const maps = await response.json();
  return maps.data;
};

export const getFavorites = async () => {
  const favoriteAgentId = state.getFavorite('agents');
  const favoriteWeaponId = state.getFavorite('weapons');
  const favoriteMapId = state.getFavorite('maps');

  let favoriteAgent; let favoriteWeapon; let favoriteMap

  if (favoriteAgentId) {
    favoriteAgent = await getAgents(favoriteAgentId);
  } else {
    favoriteAgent = { key: 'favoriteAgent', context: 'agent', uuid: 'favoriteAgent', displayName: 'Agent', displayIcon: '', background: '' }
  }

  if (favoriteWeaponId) {
    favoriteWeapon = await getWeapons(favoriteWeaponId);
  } else {
    favoriteWeapon = { key: 'favoriteWeapon', context: 'weapon', uuid: 'favoriteWeapon', displayName: 'Weapon', displayIcon: '', background: '' }
  }

  if (favoriteMapId) {
    favoriteMap = await getMaps(favoriteMapId);
  } else {
    favoriteMap = { key: 'favoriteMap', context: 'map', uuid: 'favoriteMap', displayName: 'Map', displayIcon: '', background: '' }
  }

  const favorites = [favoriteAgent, favoriteWeapon, favoriteMap];
  return favorites;
};

export const getDaily = async () => {

  const todayTimestamp = getTodayTimestamp();

  if (state.getDaily() && state.getDaily().timestamp === todayTimestamp) {
    const agents = await getAgents(state.dailyItems.ids[0]);
    const weapons = await getWeapons(state.dailyItems.ids[1]);
    const maps = await getMaps(state.dailyItems.ids[2]);
    return [agents, weapons, maps];
  } else {
    const agents = await getAgents();
    const weapons = await getWeapons();
    const maps = await getMaps();

    const agentsCount = agents.length - 1;
    const weaponsCount = weapons.length - 1;
    const mapsCount = maps.length - 1;
    
    const dailyItems = [
      agents[Math.floor(Math.random() * agentsCount)],
      weapons[Math.floor(Math.random() * weaponsCount)],
      maps[Math.floor(Math.random() * mapsCount)],
    ];

    state.setDaily(dailyItems, getTodayTimestamp());

    return dailyItems;
  }

}

export const getIntroSlides = async () => {
  const agents = await getAgents();
  const introSlides = [
    {
      displayName: "Welcome to Valorant+",
      displayIcon: agents[2].fullPortrait,
      background: agents[2].background,
    },
    {
      displayName:
        "In this app, you can find information about your favorite agents.",
      displayIcon: agents[3].fullPortrait,
      background: agents[3].background,
    },
    {
      displayName: "You can customize your profile in many ways.",
      displayIcon: agents[5].fullPortrait,
      background: agents[5].background,
    },
    {
      displayName: "You can see all the weapons and their skins.",
      displayIcon: agents[7].fullPortrait,
      background: agents[7].background,
    },
    {
      displayName: "And you can even see all the game maps.",
      displayIcon: agents[15].fullPortrait,
      background: agents[15].background,
    },
  ];
  return introSlides;
};

function getTodayTimestamp() {
  /* get current date in miliseconds */
  var now = new Date();
  var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return startOfDay.getTime();
}