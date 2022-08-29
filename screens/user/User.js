import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./UserStyle";
import { SafeAreaView } from "react-native-safe-area-context";

import image from "../../assets/profileImage.jpeg";

function User() {
    return (
        <View style={styles.mainContainer}>
            <SafeAreaView />

            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={image} alt="user" />
                </View>
                <Text style={styles.title}>Adnan Gujjar</Text>
            </View>
            <View style={styles.flex}>
                <View style={styles.bgColor}>
                    <TouchableOpacity>
                        <Text style={{ color: "white" }}>Add to post</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bgColor1}>
                    <TouchableOpacity>
                        <Text>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.flex1}>

                <View style={styles.card}>
                    <Image style={styles.friendsImage} source={image} />
                    <Text style={styles.name}>Adnan</Text>
                </View>
                <View style={styles.card}>
                    <Image style={styles.friendsImage} source={image} />
                    <Text style={styles.name}>Zaman</Text>
                </View>
                <View style={styles.card}>
                    <Image style={styles.friendsImage} source={image} />
                    <Text style={styles.name}>Umair</Text>
                </View>
            </View>

        </View>
    );
}

export default User;
