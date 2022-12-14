import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableHighlight } from "react-native-web";

export default function SearchBar() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        padding: 12,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#F4F4F4",
          paddingStart: 10,
          paddingEnd: 10,
          paddingTop: 3,
          width: "75%",
          paddingBottom: 3,
          borderRadius: "30px",
        }}
      >
        <EvilIcons name="search" color={"#999999"} size={30} />
        <TextInput
          style={{
            padding: 10,
            paddingStart: 0,
            width: "75%",
            color: "#999999",
          }}
          placeholder="খোঁজ"
        />
      </View>
      <View style={{ flexDirection: "row", width: "auto" }}>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 50,
            backgroundColor: "#eee",
            marginLeft: 5,
            marginRight: 5,
          }}
        >
          <FontAwesome name="sliders" size={22} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10, borderRadius: 50, backgroundColor: "#eee" }}
        >
          <AntDesign name="eyeo" size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
