import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable, runInAction } from "mobx";

class State {
  view = {
    agents: "slide",
    weapons: "slide",
  };
  favorites = {};
  editable = false;

  constructor() {
    makeAutoObservable(this);
  }

  async load() {
    const viewData = await AsyncStorage.getItem("view");
    const favoritesData = await AsyncStorage.getItem("favorites");
    const isEditableData = await AsyncStorage.getItem("editable");

    if (viewData !== null) {
      this.view = JSON.parse(viewData);
    }
    if (favoritesData !== null) {
      this.favorites = JSON.parse(favoritesData);
    }

    if (isEditableData !== null) {
      this.editable = JSON.parse(isEditableData);
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

  toggleEditable() {
    runInAction(() => {
      this.editable = !this.editable;
    });

    AsyncStorage.setItem("editable", JSON.stringify(this.editable));
  }
  isEditable() {
    return this.editable;
  }
}

export const state = new State();
