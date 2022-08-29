import React from 'react'
import {View,Text,Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {styles} from './DashboardStyle'
import image from  '../../assets/home.jpg'
import image1 from  '../../assets/user1.png'

let data=[1,2,3,4,5,6]

function Dashboard() {
    return(
        
    <View style={styles.mainContainer}>
        <ScrollView>
            
        <SafeAreaView/>
        {data.map(()=>{
            return(
                <>
            <View style={styles.container}>

<View style={styles.bgColor} >
     <Image style={styles.image} source={image1} alt="image"/>
     </View>
<View>
    <Text style={styles.title}>Adnan Gujjar</Text>
<Text>12h ago</Text>
</View>
        </View>
<Text style={styles.text}>View</Text>
<View style={styles.imageContainer}>
    <Image source={image} alt="image" width={100}/>
    </View></>)
        })}
        </ScrollView>
    </View>
    )
}
export default Dashboard 