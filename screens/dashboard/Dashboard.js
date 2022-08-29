import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./DashboardStyle";
import image from "../../assets/home.jpg";
import image1 from "../../assets/user1.png";

let data = [1, 2, 3, 4, 5, 6];

function Dashboard({navigation}) {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <SafeAreaView />
        {data.map(() => {
          return (
            <>
              <View style={styles.container}>
                <Pressable style={styles.bgColor} onPress={() => navigation.navigate('User')} >
                  <Image style={styles.image} source={image1} alt="image" />
                </Pressable>
                <View>
                  <Text style={styles.title}>Adnan Gujjar</Text>
                  <Text style={styles.title}>12h ago</Text>
                </View>
              </View>
              <Text style={styles.button}>View</Text>
              <View style={styles.imageContainer}>
                <Image style={styles.image1} source={image} alt="image" />
              </View>
              <View style={styles.flex}>
                <Text style={styles.button}>Like</Text>
                <Text style={styles.button}>Comments</Text>
                <Text style={styles.button}>Share</Text>
              </View>
              
            </>
          );
        })}
      </View>
    </ScrollView>
  );
}
export default Dashboard;
