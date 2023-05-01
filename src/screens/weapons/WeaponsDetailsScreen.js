import React from "react";
import Title from "../../components/Title";
import WeaponStats from "../../components/WeaponStats";

export default function WeaponsDetailsScreen() {
  return (
    <>
      <Title subtitle="WEAPONS">SHERIFF</Title>

      {/* ... */}

      <Title subtitle="STATISTICS"> </Title>
      <WeaponStats
        fireRate={4}
        magCapacity={30}
        reloadTime={4}
        head={182}
        body={95}
        legs={55}
      />
    </>
  );
}
