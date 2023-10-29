import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    mainBody: {
        width: "100%",
        height: "100%",
        backgroundColor: '#F7F7F7',
    },
    header: {
        margin: '5%',
        marginTop: '10%',
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    headerFont: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    headerLogo:{
        width: 60,
        height: 60,
        borderRadius: 15
    },

    mainContainer: {
        padding: 50,
    },

    text: {
        color: 'black'
    },

    textBox: {
        backgroundColor: 'white',
    },

    loginContainer: {
        marginTop: '30%',
        display: 'flex',
        alignContent:'center',
        gap: 10
    },

    mainFooter: {
        marginTop: '5%',
        display: 'flex',
        flexDirection: "row",
        alignContent:'center', 
    },

    pressableText: {
        color: 'blue',
        textDecorationLine: 'underline'
    }

})

export default styles