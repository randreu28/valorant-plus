import { useEffect, useState } from "react";

async function fetcher(setData, setIsLoading, setError, url) {
  setIsLoading(true);
  try {
    const response = await fetch("https://valorant-api.com/v1" + url);
    const data = await response.json();
    setData(data.data);
  } catch (e) {
    setError(e);
  }
  setIsLoading(false);
}

/**
 * A generic multipurpose fetcher hook to the valorant API
 * @link https://valorant-api.com
 * @param {string} url
 */
export function useValorantApi(url) {
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [data, setData] = useState();
  /**
   * @type {[boolean, React.Dispatch<boolean>]} state
   */
  const [isLoading, setIsLoading] = useState(true);
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [error, setError] = useState();

  useEffect(() => {
    fetcher(setData, setIsLoading, setError, url);
  }, [url]);

  return { data, isLoading, error };
}

/**
 * A fetcher hook of the valorant API to only gets the agents
 * @link https://dash.valorant-api.com/endpoints/agents
 * @param {number} [uuid]
 */
export function useAgents(uuid) {
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [data, setData] = useState();
  /**
   * @type {[boolean, React.Dispatch<boolean>]} state
   */
  const [isLoading, setIsLoading] = useState(true);
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [error, setError] = useState();

  useEffect(() => {
    fetcher(
      setData,
      setIsLoading,
      setError,
      uuid ? `/agents/${uuid}` : "/agents?isPlayableCharacter=true"
    );
  }, [uuid]);

  return { data, isLoading, error };
}

/**
 * A fetcher hook of the valorant API to only gets the weapons
 * @link https://dash.valorant-api.com/endpoints/weapons
 * @param {number} [uuid]
 */
export function useWeapons(uuid) {
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [data, setData] = useState();
  /**
   * @type {[boolean, React.Dispatch<boolean>]} state
   */
  const [isLoading, setIsLoading] = useState(true);
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [error, setError] = useState();

  useEffect(() => {
    fetcher(
      setData,
      setIsLoading,
      setError,
      uuid ? `/weapons/${uuid}` : "/weapons"
    );
  }, [uuid]);

  return { data, isLoading, error };
}

/**
 * A fetcher hook of the valorant API to only gets the maps
 * @link https://dash.valorant-api.com/endpoints/maps
 * @param {number} [uuid]
 */
export function useMaps(uuid) {
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [data, setData] = useState();
  /**
   * @type {[boolean, React.Dispatch<boolean>]} state
   */
  const [isLoading, setIsLoading] = useState(true);
  /**
   * @type {[any, React.Dispatch<any>]} state
   */
  const [error, setError] = useState();

  useEffect(() => {
    fetcher(setData, setIsLoading, setError, uuid ? `/maps/${uuid}` : "/maps");
  }, [uuid]);

  return { data, isLoading, error };
}

/**
 * A fetcher hook of the valorant API to only gets the maps
 * @link https://dash.valorant-api.com/endpoints/maps
 */
export function useIntroSlides() {
  const { data: agents, error, isLoading } = useAgents();

  const data = [
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

  return { data, isLoading, error };
}
