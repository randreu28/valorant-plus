import { state } from "./state";
import { useValorantApi } from "./lib/hooks";

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

export const getPlayerCard = async (id = '') => {
  const response = await fetch(`${API_ROOT}/playercards/${id}`);
  const playercards = await response.json();
  return playercards.data;
};

export const getRanks = async (id = '') => {
  const response = await fetch(`${API_ROOT}/competitivetiers/`);
  const ranks = await response.json();
  if (id) {
    return ranks.data[4].tiers.find(rank => rank.tier === id);
  } else {
    return ranks.data[4];
  }
};

export const getFavorites = async () => {
  const favoriteAgentId = state.getFavorite('agents');
  const favoriteWeaponId = state.getFavorite('weapons');
  const favoriteMapId = state.getFavorite('maps');
  const favoritePlayerCardId = state.getFavorite('playerCard');
  const favoriteRankId = state.getFavorite('rank');

  let favoriteAgent; let favoriteWeapon; let favoriteMap; let favoritePlayerCard; let favoriteRank;

  if (favoriteAgentId) {
    favoriteAgent = await getAgents(favoriteAgentId);
    favoriteAgent.context = "agents";
  } else {
    favoriteAgent = { key: 'favoriteAgent', context: 'agent', uuid: 'favoriteAgent', displayName: 'Agent', displayIcon: '', background: '' }
  }

  if (favoriteWeaponId) {
    favoriteWeapon = await getWeapons(favoriteWeaponId);
    favoriteWeapon.context = "weapons";
    favoriteWeapon.imageType = "center";
  } else {
    favoriteWeapon = { key: 'favoriteWeapon', context: 'weapon', uuid: 'favoriteWeapon', displayName: 'Weapon', displayIcon: '', background: '' }
  }

  if (favoriteMapId) {
    favoriteMap = await getMaps(favoriteMapId);
    favoriteMap.context = "maps";
    favoriteMap.imageType = "center";
  } else {
    favoriteMap = { key: 'favoriteMap', context: 'map', uuid: 'favoriteMap', displayName: 'Map', displayIcon: '', background: '' }
  }

  if (favoritePlayerCardId) {
    favoritePlayerCard = await getPlayerCard(favoritePlayerCardId);
    favoritePlayerCard.context = "playerCard";
  } else {
    favoritePlayerCard = { key: 'favoritePlayerCard', context: 'playerCard', uuid: 'favoritePlayerCard', displayName: 'Player Card', displayIcon: '', background: '' }
  }

  if (favoriteRankId) {
    favoriteRank = await getRanks(favoriteRankId);
    favoriteRank.context = "rankFavorite";
    favoriteRank.uuid = favoriteRank.tier;
  } else {
    favoriteRank = { key: 'favoriteRank', context: 'emptyRank', uuid: 'favoriteRank', displayName: 'Rank', displayIcon: '', background: '' }
  }

  const favorites = [favoriteAgent, favoriteWeapon, favoriteMap, favoritePlayerCard, favoriteRank];
  return favorites;
};

export const getDaily = async () => {

  const todayTimestamp = getTodayTimestamp();

  if (state.getDaily() && state.getDaily().timestamp === todayTimestamp) {
    const agents = await getAgents(state.dailyItems.ids[0]);
    const weapons = await getWeapons(state.dailyItems.ids[1]);
    const maps = await getMaps(state.dailyItems.ids[2]);
    const playercard = await getPlayerCard(state.dailyItems.ids[3]);
    const rank = await getRanks(state.dailyItems.ids[4]);
    agents.context = "agents";
    weapons.context = "weapons";
    maps.context = "maps";
    playercard.context = "playerCard";
    rank.context = "rank";
    return [agents, weapons, maps, playercard, rank];
  } else {
    const agents = await getAgents();
    const weapons = await getWeapons();
    const maps = await getMaps();
    const playercard = await getPlayerCard();
    const rank = await getRanks();

    const agentsCount = agents.length - 1;
    const weaponsCount = weapons.length - 1;
    const mapsCount = maps.length - 1;
    const playercardCount = playercard.length - 1;
    const rankCount = rank.tiers.length - 1;

    const dailyItems = [
      agents[Math.floor(Math.random() * agentsCount)],
      weapons[Math.floor(Math.random() * weaponsCount)],
      maps[Math.floor(Math.random() * mapsCount)],
      playercard[Math.floor(Math.random() * playercardCount)],
      rank.tiers[Math.floor(Math.random() * rankCount)],
    ];

    dailyItems[0].context = "agents";
    dailyItems[1].context = "weapons";
    dailyItems[2].context = "maps";
    dailyItems[3].context = "playerCard";
    dailyItems[4].context = "rank";
    dailyItems[4].uuid = dailyItems[4].tier;

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