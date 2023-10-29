import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    uploadImageContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginBottom: '5%'
    },

    nutritionFactsContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        gap: 10
    },

    nutritionFacts: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        gap: 10
    },

    prepTimeContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },

    uploadImage: {
        width: '90%',
        height: 300,
        borderRadius: 20,
    },

    uploadButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: '5%'
    },

    inputTitle: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width:'33%'
    },

    inputPrepTime: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width:'1%'
    },

    containerStyle: {
        backgroundColor: 'white', 
        padding: 50, 
        width: '75%',
        marginLeft: '15%',
        borderRadius: 20,
        gap: 20
    },

    ingredients: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: '5%'
    }

})

export default styles