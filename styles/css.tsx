import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from "../styles/global";
const { width: SCREEN_WIDTH } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  containerForKeyboard: {
    flex: 1,
    // height: "100%",
    //alignItems: "center",
    //justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  input: {
    padding: 16,
    height: 50,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.light_gray,
  },
  focused: {
    backgroundColor: colors.white,
    borderColor: colors.orange,
  },
  buttonContainer: {
    marginTop: 42,
  },
  formContainer: {
    width: SCREEN_WIDTH,
    //height: "60%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
  },
  formContainerLogin: {
    width: SCREEN_WIDTH,
    //height: "55%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -152,
    marginBottom: 32,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,
  },
  plusIcon: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  imageBg: {
    flex: 1,
    //justifyContent: "flex-end",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  innerScreenContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
  },
  passwordButtonText: {
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    textDecorationLine: "underline",
  },
  logoutBtn: {
    width: 24,
    height: 24,
  },
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: colors.underline_gray,
    height: 83,
    paddingTop: 9,
    paddingRight: 70,
    paddingLeft: 70,
  },
  tabHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.underline_gray,
  },
  tabHeaderTitle: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    color: colors.black_primary,
  },
  tabIcon: {
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  createPostsContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingTop: 32,
    paddingBottom: 34,
    paddingLeft: 16,
    paddingRight: 16,
  },

  cameraContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.black_primary,
    marginBottom: 8,
    overflow: "hidden",
  },

  camera: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    objectFit: "cover",

    justifyContent: "center",
    alignItems: "center",
  },

  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,

    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
  },

  photoBtnContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",

    width: 60,
    height: 60,
    borderRadius: 50,
  },

  textUploade: {
    marginBottom: 32,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.underline_gray,
  },

  // sendContainer: {
  //   justifyContent: "center",
  //   alignItems: "center",

  //   marginTop: 20,
  //   marginHorizontal: 30,
  //   height: 40,

  //   borderWidth: 2,
  //   borderColor: "green",
  //   borderRadius: 10,
  // },
  // sendLabel: {
  //   color: "green",
  //   fontSize: 20,
  // },
  createPostInput: {
    marginBottom: 32,
    paddingBottom: 15,

    borderBottomWidth: 1,
    borderBottomColor: colors.underline_gray,

    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: colors.black_primary,
  },
  locationIcon: {
    position: "absolute",
    ...Platform.select({
      ios: {
        top: -3,
      },
      android: {
        top: 3,
      },
    }),
  },
  createBtn: {
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
  createBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textAlign: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  resetBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: colors.light_gray,
    borderRadius: 20,
    marginHorizontal: "auto",
  },
});
