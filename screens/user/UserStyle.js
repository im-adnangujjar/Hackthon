
import { colors } from "../../components/colors";

export const style={
    doctorProfilePicContainer:{
        minWidth: '100%',
        height: 375,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: colors.darkBlue,
        shadowOffset: { width: 0, height: 16 },
        shadowOpacity: 1,
        shadowRadius: 100,  
        elevation: 18
    },
    doctorProfilePic:{
        width: '100%',
        height: '100%',
    },
    doctorProfileImageStyle:{
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    doctorProfileBack:{
        marginTop: 42,
        marginLeft: 21,
    },
    doctorContactButton:{
        flexDirection: 'row',
        marginTop: 220,
        marginLeft: "22%",
        width: "60%",
        justifyContent: 'space-between',
    },
    doctorProfileContainer:{
        marginTop:21,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // marginRight: "22%",
    },
    doctorRating:{
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: "5%",
    },
    doctorMainContainer:{
        marginLeft: "6%",
        minWidth: '100%',
    },
    doctorName:{
        fontSize: 22,
        fontWeight: '600',
    },
    doctorReview:{
        fontSize: 13,
        color: colors.lightGrey,
        marginTop: 5,
        marginLeft: "5%",   
    },
    doctorDetailText:{
        fontSize: 15,
        width: '70%',
        marginTop: 9,
        color: colors.lightGrey,
    },
    doctorServiceContainer:{
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: "10%",
    },
    verticalLine:{
        width: 1,
        height: 64,
        backgroundColor: colors.lightGrey,
    },
    serviceText:{
        fontSize: 18,
        color:colors.blackBlue,
        fontWeight: '500',
    },
    serviceValue:{
        color: colors.black,
        fontSize: 20,
        fontWeight: '700',
    },
    doctorSheduleText:{
        fontSize:22,
        fontWeight: '600',
    },
    doctorShedule:{
        marginTop: 22,
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    sheduleDate:{
        fontSize:18,
        marginRight: "10%",
        color: colors.lightGrey,
    },
    sheduleDay:{
        marginTop:14,
        height:70
    },
    visitingHourHeading:{
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 10,
        
    },
    sheduleDayContainer:{
        height:110
    },
    visitingHourContainer:{
        height:90
    },
    bookAppointmentContainer:{
        marginTop: 31,
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        width: '100%',
    }
}