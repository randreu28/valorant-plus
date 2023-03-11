import { useState, useEffect } from "react";

function App() {
  const [agents, setAgents] = useState(null);

  async function getAgents() {
    const rawData = await fetch("https://valorant-api.com/v1/agents");
    const data = await rawData.json();

    setAgents(data);
  }
  useEffect(() => {
    getAgents();
  }, []);

  if (agents === null) {
    return <p>Cargando...</p>;
  }

  console.log(agents);

  return (
    <div>
      <pre>{JSON.stringify(agents.data[0], null, 2)}</pre>
    </div>
  );
}

export default App;
