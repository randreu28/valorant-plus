import React from "react";
import Title from "../../components/Title";
import WeaponStats from "../../components/WeaponStats";

export default function WeaponsMainScreen() {
  return (
    <>
      <Title subtitle="WEAPONS">SHERIFF</Title>

      {/* ... */}

      <Title subtitle="STATIS TICS"> </Title>
      <WeaponStats head={182} body={95} legs={55} />
    </>
  );
}
