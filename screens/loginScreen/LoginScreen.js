import React from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet, Image, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { style } from "./LoginScreenStyle"
import axios from 'axios'

function LoginScreen({navigation}) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async () => {
      try {
        // alert("start")
        // const res=await axios.post('http://192.168.153.190:8000/auth/login/', {
        //   email:email,
        //   password:password,
        // })
        // alert(res.data.message)
      } catch (error) {
        console.log(error)
      }
      navigation.navigate('Dashboard')
    }

  return (
        <ScrollView>

    <View
      style={style.container}>
      <View style={style.headingContainer}>

        <Text
          style={style.heading}>Lets Buy Land</Text>
      </View>
      <View style={style.loginContainer} >



          <View style={{
            alignItems: 'center',
          }}>
            <Text style={style.loginHeading}>Welcome</Text>

            <View style={style.loginSep}></View>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputLabel}>
              Email ID
            </Text>
            <TextInput
              style={style.input}
              placeholder="Enter Email"
              placeholderTextColor="#000"
              secureTextEntry={false}
              keyboardType="default"
              value={email}
              onChangeText={(e) => setEmail(e)}
            ></TextInput>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputLabel}>
              Password
            </Text>
            <TextInput
              style={style.input}
              placeholder="Enter Password"
              placeholderTextColor="#000"
              secureTextEntry={true}
              value={password}
              onChangeText={(e) => setPassword(e)}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={style.registerButton}
            onPress={handleLogin}
          >
            <Text style={style.registerButtonText}
           
            >
              Login
            </Text>
          </TouchableOpacity>
          <View style={style.continueSepContainer}>

            <View style={style.continueSep}>
            </View>
            <Text style={style.continueText}>
              or continue with
            </Text>
            <View style={style.continueSep}>
            </View>

          </View>
          <View style={style.loginCardContainer}>
            <View style={style.loginCard}>
              <Icon name="facebook-f" size={20} color="#3b5998" />
            </View>
            <View style={style.loginCard}>
              <Icon name="twitter" size={20} color="#3b5998" />
            </View>
            <View style={style.loginCard}>
              <Icon name="linkedin" size={20} color="#3b5998" />
            </View>
          
          </View>
          <View style={style.signUp}>
            <Text style={style.signUpSepText}>
              Don't have account?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={{...style.signUpSepText, textDecorationLine:"underline"}}>
                Sign Up
              </Text>
            </TouchableOpacity>
            
          </View>
      </View>

    </View>
        </ScrollView>

  )
}

export default LoginScreen


