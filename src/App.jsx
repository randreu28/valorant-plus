import { useState, useEffect } from "react";
import ApiTest from "./components/ApiTest";
import fetcher from "./utils/fetcher";

function App() {
  const [agents, setAgents] = useState(null);
  const [maps, setMaps] = useState(null);
  const [weapons, setWeapons] = useState(null);
  const [gamemodes, setGamemodes] = useState(null);
  const [playerCard, setPlayerCard] = useState(null);
  const [competitiveTiers, setCompetitiveTiers] = useState(null);

  const [bundles, setBundles] = useState(null);
  const [buddies, setBuddies] = useState(null);
  const [playerTitles, setPlayerTitles] = useState(null);
  const [sprays, setSprays] = useState(null);

  useEffect(() => {
    fetcher("https://valorant-api.com/v1/agents", setAgents);
    fetcher("https://valorant-api.com/v1/maps", setMaps);
    fetcher("https://valorant-api.com/v1/weapons", setWeapons);
    fetcher("https://valorant-api.com/v1/gamemodes", setGamemodes);
    fetcher("https://valorant-api.com/v1/playercards", setPlayerCard);
    fetcher(
      "https://valorant-api.com/v1/competitivetiers",
      setCompetitiveTiers
    );

    fetcher("https://valorant-api.com/v1/bundles", setBundles);
    fetcher("https://valorant-api.com/v1/buddies", setBuddies);
    fetcher("https://valorant-api.com/v1/playertitles", setPlayerTitles);
    fetcher("https://valorant-api.com/v1/sprays", setSprays);
  }, []);

  if (
    agents === null ||
    maps === null ||
    weapons === null ||
    gamemodes === null ||
    playerCard === null ||
    competitiveTiers === null ||
    /*  */
    bundles === null ||
    buddies === null ||
    playerTitles === null ||
    sprays === null
  ) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="text-center p-5 space-y-3">
        <h1 className="text-5xl">Valorant API</h1>
        <div className="text-gray-500">
          <p className="text-xl">La mafia</p>
          <br />
          <li>Álex Coronado</li>
          <li>Marc Cerrrato</li>
          <li>Jordi López</li>
          <li>Eva Albà</li>
          <li>Rubén Chiquin</li>
        </div>
      </div>
      <ApiTest
        json={agents.data}
        description="Este endpoint muestra a los diferentes personajes del juego con su información específica de cada uno y sus habilidades, además de algo de arte de cada personaje y su voz. Lo usariamos para hacer un “visualizador” de los diferentes agentes que hay en el juego y para así documentar al usuario con información del juego sobre estos."
        title={"Agentes"}
        doc="https://dash.valorant-api.com/endpoints/agents"
        endpoint="/v1/agents"
      />

      <ApiTest
        json={weapons.data}
        description="Este endpoint muestra las diferentes armas del juego con el daño que hacen, su coste  y sus estadísticas, además de la extensa customización que se le puede poner al arma."
        title={"Weapons"}
        doc="https://dash.valorant-api.com/endpoints/weapons"
        endpoint="/v1/weapons"
      />

      <ApiTest
        json={gamemodes.data}
        description="Este endpoint muestra los modos de juego y su tiempo estimado de duración que se usaría con el fin de crear un filtro de tiempo para que el usuario pueda saber qué modo se ajusta más a su disponibilidad"
        title={"Modos de juego"}
        doc="https://dash.valorant-api.com/endpoints/gamemodes"
        endpoint="v1/gamemodes"
      />

      <ApiTest
        json={maps.data}
        description="Este endpoint proporciona el nombre, las coordenadas, un display visual del mapa en vista cenital, un splash art del mapa en cuestión y los callouts de cada región del mapa. Lo que nos permitirá mostrar los mapas y tratar de informar al usuario de las localizaciones más importantes."
        title={"Selector de Mapas"}
        doc="https://dash.valorant-api.com/endpoints/maps"
        endpoint="/endpoints/maps"
      />

      <ApiTest
        json={playerCard.data}
        description="Este endpoint muestra los diferentes iconos que hay en el juego y que se pueden incluir en el perfil de cada usuario. Lo incluimos para que el usuario pueda decidir cuál añadir a su perfil inventado."
        title={"Perfil - Player cards"}
        doc="https://dash.valorant-api.com/endpoints/playercards"
        endpoint="/v1/playercards"
      />

      <ApiTest
        json={competitiveTiers.data}
        description="Este endpoint muestra los diferentes rangos que hay dentro del juego, se utilizará para mostrar al usuario de manera imaginaria el rango que tiene en ese momento en su perfil."
        title={"Perfil - Competitive tiers"}
        doc="https://dash.valorant-api.com/endpoints/competitivetiers"
        endpoint="/v1/competitivetiers"
      />

      <div className="p-5 text-center space-y-3 max-w-3xl m-auto py-32 my-32">
        <h1 className="text-2xl">Extra</h1>
        <p className="text-gray-500">
          Los siguientes endpoints son extras y se elaborarán en caso de
          necesitar más contenido en alguna de las pantallas futuras.
        </p>
      </div>

      <ApiTest
        json={bundles.data}
        description="Este endpoint va en complementación a las weapons, muestra los sets de customización de las diferentes armas."
        title={"Bundles"}
        doc="https://dash.valorant-api.com/endpoints/bundles"
        endpoint="/v1/bundles"
        isOptional
      />

      <ApiTest
        json={buddies.data}
        description="Este endpoint va en complementación a las weapons, se trata de un accesorio para el arma. Aparecerá a la hora de seleccionar o previsualizar un arma."
        title={"Colgantes de arma"}
        doc="https://dash.valorant-api.com/endpoints/buddies"
        endpoint="/v1/buddies"
        isOptional
      />

      <ApiTest
        json={playerTitles.data}
        description="Este endpoint muestra una lista con todos los títulos existentes dentro del juego que se pueden asignar para cada jugador en el  perfil."
        title={"Player titles"}
        doc="https://dash.valorant-api.com/endpoints/playertitles"
        endpoint="/v1/playertitles"
        isOptional
      />

      <ApiTest
        json={sprays.data}
        description="Este endpoint muestra los sprays que puede adquirir el jugador para pintar durante el juego, són un complemento meramente estético pero llamativo para aquel tipo de usuario con afán de coleccionar."
        title={"Sprays"}
        doc="https://dash.valorant-api.com/endpoints/sprays"
        endpoint="/v1/sprays"
        isOptional
      />
    </>
  );
}

export default App;
