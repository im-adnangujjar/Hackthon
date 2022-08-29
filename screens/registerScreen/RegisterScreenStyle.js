import patternImage from "../../assets/loginPagePattern.png";
export const style = {
    heading: {

        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10,
        paddingTop: 25,

    },
    headingContainer: {
      flex:4,
    },
    loginContainer: {
        flex: 7,
        backgroundColor: '#4D89FD',
        minWidth: "100%",
        marginTop:70,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems: 'center',

    },
    loginHeading: {
        marginTop: 70,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    loginSep: {
        width: 40,
        backgroundColor: '#fff',
        height: 4,
        marginTop: 12,
    },
    inputLabel: {
        fontSize: 18,
        color: '#fff',

    },
    inputContainer: {
        width: 300,
        marginTop: 28,

    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 19,
        paddingLeft: 20,
    },
    registerButton: {
        width: 300,
        height: 50,
        backgroundColor: "#002992",
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 26,
    },
    registerButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: "#fff",
    },
    loginSepContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: 300,
        marginTop: 25,
    },
    loginSepText:{
        fontSize:14,
        color:'#fff'
    }
}