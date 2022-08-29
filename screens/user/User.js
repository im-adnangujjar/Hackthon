import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import doctorProfilePic from '../../assets/doctorProfilePic.png'
import Icon from 'react-native-vector-icons/Ionicons';
import { style } from "./DoctorDetailScreenStyle"
import Icons from 'react-native-vector-icons/FontAwesome';
import SimIcons from 'react-native-vector-icons/SimpleLineIcons';
import OctiIcons from 'react-native-vector-icons/Octicons';
import { colors } from "../../components/colors"
import CustomButton from "../../components/buttons/CustomButton"
import DoctorContactButton from '../../components/doctorContactButton/DoctorContactButton';
import SheduleButton from '../../components/sheduleButton/SheduleButton';
import HoursButton from '../../components/hoursButton/HoursButton';
function DoctorDetailScreen({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.doctorProfilePicContainer}>
        <ImageBackground
          source={doctorProfilePic}
          style={style.doctorProfilePic}
          imageStyle={style.doctorProfileImageStyle}
        >

          <Icon name="arrow-back" size={24} color={colors.darkBlue} style={style.doctorProfileBack} />
          <View style={style.doctorContactButton}>

            <DoctorContactButton
              backgroundColor={colors.lightGreen}
              iconName="phone-call"
            />
            <DoctorContactButton
              backgroundColor={colors.yellow}
              iconName="message-square"
              onPress={()=>
                navigation.navigate("DoctorMessage")
              }
            />
            <DoctorContactButton
              backgroundColor={colors.red}
              iconName="video"

            />
          </View>
        </ImageBackground>
      </View>
      <View style={style.doctorMainContainer}>
        <View style={style.doctorProfileContainer}>
          <Text style={style.doctorName}>Dr. John Doe</Text>
          <View style={style.doctorRating}>
            <Icons name="star" size={16} color="#FFC444" />
            <Icons name="star" size={16} color="#FFC444" />
            <Icons name="star" size={16} color="#FFC444" />
            <Icons name="star" size={16} color="#FFC444" />
            <Icons name="star-o" size={16} color="#FFC444" />

          </View>
          <Text style={style.doctorReview}>(122 reviews)</Text>

        </View>
        <View style={style.doctorDetail}>
          <Text style={style.doctorDetailText}>
            Dentist (MDS . Orthodontics and Dentofacial
            Orthopaedics, BDS)
          </Text>
        </View>

        <View style={style.doctorServiceContainer}>
          <View style={style.experience}>
            <SimIcons name="energy" size={20} color={colors.blue} />
            <Text style={style.serviceText}>Experience</Text>
            <Text style={style.serviceValue}>15+</Text>
          </View>
          <View style={style.verticalLine}></View>
          <View style={style.patients}>
            <OctiIcons name="person-add" size={20} color={colors.blue} />
            <Text style={style.serviceText}>Patients</Text>
            <Text style={style.serviceValue}>18K</Text>
          </View>
          <View style={style.verticalLine}></View>
          <View style={style.certification}>

            <Icon name="shield-outline" size={20} color={colors.blue} />
            <Text style={style.serviceText}>Certification</Text>
            <Text style={style.serviceValue}>
              20
            </Text>
          </View>

        </View>

        <View style={style.doctorShedule}>
          <Text style={style.doctorSheduleText}>
            Schedule
          </Text>

          <Text style={style.sheduleDate}>
            June 2022
          </Text>
        </View>
        <View style={style.sheduleDayContainer}>
        
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={style.sheduleDay}>
              <SheduleButton day={"Thu"} hour={10} />
              <SheduleButton day={"Fri"} hour={11} />
              <SheduleButton current={true} day={"Thu"} hour={12} />
              <SheduleButton day={"Sat"} hour={13} />
              <SheduleButton day={"Sun"} hour={14} />
              <SheduleButton day={"Mon"} hour={15} />
              <SheduleButton day={"Tue"} hour={16} />
          </ScrollView>
        </View>
        <View style={style.visitingHourContainer}>
          <Text style={style.visitingHourHeading}>
            Visiting Hours
          </Text>
          <ScrollView horizontal>
            <HoursButton time={"8:00AM"}/>
            <HoursButton time={"9:00AM"}/>
            <HoursButton time={"10:00AM"} current/>
            <HoursButton time={"11:00AM"}/>
            <HoursButton time={"12:00PM"}/>
            <HoursButton time={"1:00PM"}/>
            <HoursButton time={"2:00PM"}/>
            <HoursButton time={"3:00PM"}/>
            <HoursButton time={"4:00PM"}/>
            <HoursButton time={"5:00PM"}/>
          </ScrollView>
        </View>
      </View>
        <View style={style.bookAppointmentContainer}>
        <CustomButton 
        title={"MAKE APPOINTMENT"} 
        btnWidth={"80%"} 
        btnHeight={50} 
        backgroundColor={colors.darkBlue} 
        color={colors.white}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={8}
        onPress={()=>navigation.navigate("DoctorMessage")}
        />
        </View>
    </View>
  )
}