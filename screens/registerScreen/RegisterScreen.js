import React from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet, Image, ImageBackground, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import { style } from "./RegisterScreenStyle"
import axios from 'axios'

function RegisterScreen({ navigation }) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const handleRegister = async () => {
    try {
      alert("start")
      
      const res=await axios.post('http://192.168.153.190:8000/auth/signup/', {
        name:name,
        email:email,
        password:password,
        password_confirmation:password,
        tc:true
      })
      alert(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
         <View
      style={styles.container}>
      <View style={style.headingContainer}>

        <Text
          style={style.heading}>Lets Buy Land</Text>
      </View>
      <View style={style.loginContainer} >
          <View style={{
            alignItems: 'center',
          }}>
          <Text style={style.loginHeading}>Register to Continue</Text>

          <View style={style.loginSep}></View>
          </View>
          <View style={style.inputContainer}>
            <Text style={style.inputLabel}>
              Username
            </Text>
            <TextInput
              style={style.input}
              placeholder="Enter Username"
              placeholderTextColor="#000"
              secureTextEntry={false}
              keyboardType="default"
              value={name}
              onChangeText={(e) => setName(e)}
            ></TextInput>
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

          >
            <Text style={style.registerButtonText} onPress={handleRegister}>

              REGISTER
            </Text>
          </TouchableOpacity>
          <View style={style.loginSepContainer}>
            <Text style={style.loginSepText}>
              Already have an account?
            </Text>

            <TouchableOpacity
              style={style.loginSepButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={{...style.loginSepText, textDecorationLine:"underline"}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>





      </View>

    </View>
        </ScrollView>

  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});