import { Dimensions } from "react-native";

export const IS_WEB = Dimensions.get("window").width > 800;

export const WINDOW_WIDTH = Dimensions.get("window").width;

export const HALF_WINDOW_WIDTH = Dimensions.get("window").width / 2;

export const SCREEN_WIDTH = Dimensions.get("screen").width;

export const HALF_SCREEN_WIDTH = Dimensions.get("screen").width / 2;
