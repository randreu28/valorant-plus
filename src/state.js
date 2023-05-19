import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";

class State {
  view = {
    "agents": "slide",
    "weapons": "slide",
  };
  favorites = {};

  constructor() {
    makeAutoObservable(this);
  }

  async load() {
    const viewData = await AsyncStorage.getItem("view");
    const favoritesData = await AsyncStorage.getItem("favorites");

    if (viewData !== null) {
      this.view = JSON.parse(viewData);
    }
    if (favoritesData !== null) {
      this.favorites = JSON.parse(favoritesData);
    }
  }

  toggleView(view) {
    this.view[view] = this.view[view] === "slide" ? "grid" : "slide";
    AsyncStorage.setItem("view", JSON.stringify(this.view));
  }

  getView(view) {
    return this.view[view];
  }

  toggleFavorite(context, uuid) {
    console.log(context, uuid);
    this.favorites[context] = this.favorites[context] === uuid ? "" : uuid;
    AsyncStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  isFavorite(context, uuid) {
    return this.favorites[context] === uuid;
  }
}

export const state = new State();
