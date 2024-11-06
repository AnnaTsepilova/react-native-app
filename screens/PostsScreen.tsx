import { FC } from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../navigation/StackNavigator";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { styles } from "../styles/css";

type HomeScreenProps = NativeStackScreenProps<StackParamList, "PostsScreen">;

const PostsScreen: FC<HomeScreenProps> = (photoPost) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.innerScreenContainer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View>
          <Text style={styles.title}>PostsScreen</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default PostsScreen;
