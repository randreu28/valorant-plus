import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable, runInAction } from "mobx";

class State {
  isIntroDone;
  view = {
    agents: "slide",
    weapons: "slide",
  };
  favorites = {};
  profileEditable = false;

  constructor() {
    makeAutoObservable(this);
  }

  async load() {
    const introData = await AsyncStorage.getItem("isIntroDone");
    const viewData = await AsyncStorage.getItem("view");
    const favoritesData = await AsyncStorage.getItem("favorites");
    const isProfileEditableData = false;
    
    if (introData !== null) {
      this.isIntroDone = JSON.parse(introData);
    }
    if (viewData !== null) {
      this.view = JSON.parse(viewData);
    }
    if (favoritesData !== null) {
      this.favorites = JSON.parse(favoritesData);
    }
    this.profileEditable = JSON.parse(isProfileEditableData);
    AsyncStorage.setItem("profileEditable", JSON.stringify(this.profileEditable));
  }

  getIsIntroDone() {
    if (this.isIntroDone === true) {
      return true;
    } else {
      return false;
    }
  }

  setIntroDone(value) {
    this.isIntroDone = value;
    AsyncStorage.setItem("isIntroDone", JSON.stringify(this.isIntroDone));
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
      this.profileEditable = !this.profileEditable;
    });

    AsyncStorage.setItem("profileEditable", JSON.stringify(this.profileEditable));
  }
  isEditable() {
    return this.profileEditable;
  }
}

export const state = new State();
