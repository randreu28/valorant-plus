import { observer } from "mobx-react-lite";
import React from "react";
import { View } from "react-native";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import PlayerCard from "../../components/PlayerCard";
import Title from "../../components/Title";
import { useValorantApi } from "../../lib/hooks";
import { state } from "../../state";

const MainScreen = () => {
  const {
    data: playerTitle,
    error: playerTitleError,
    isLoading: isPlayerTitleLoading,
  } = useValorantApi("/playertitles/" + state.getFavorite("playerTitle"));

  const {
    data: playerCard,
    error: playerCardError,
    isLoading: isPlayerCardLoading,
  } = useValorantApi("/playercards/" + state.getFavorite("playerCard"));

  const {
    data: ranks,
    error: ranksError,
    isLoading: isRanksLoading,
  } = useValorantApi("/competitivetiers/");

  if (isPlayerTitleLoading || isPlayerCardLoading || isRanksLoading) {
    return <Loading />;
  }

  if (playerTitleError || playerCardError || ranksError) {
    return <Error />;
  }

  const rank = ranks[4].tiers.find(
    (rank) => rank.tier === state.getFavorite("rank")
  );

  return (
    <>
      <Title isHeader>PROFILE</Title>
      <View style={{ flex: 1 }}>
        <PlayerCard
          playerCard={playerCard?.largeArt}
          playerRank={rank?.largeIcon}
          playerTitle={playerTitle?.titleText}
          isEditable={state.isEditable()}
        />
      </View>
    </>
  );
};

export default observer(MainScreen);
