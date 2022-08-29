import React from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { style } from "./OnBoardingStyle"

function OnBoarding({ navigation }) {
  return (
    <View
      style={styles.container}>

      <Text
        style={style.heading}>Lets Buy Land</Text>
      <View
        style={style.bodyContainer}>
        <Text
          style={style.sectionHeading}>
          Home for Curative
        </Text>
        <View
          style={style.sectionHeadingSep}></View>
        <Text
          style={style.sectionText}>
          There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered.
        </Text>
      </View>
      <View
        style={style.loginSection}>
        <Text
          style={style.loginHeading}>
          Let’s Get Started!
        </Text>
        <TouchableOpacity
          style={style.loginButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={style.loginButtonText}

          >

            REGISTER (OR) LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.continueButton}

        >
          <Text style={style.continueButtonText}>

            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});