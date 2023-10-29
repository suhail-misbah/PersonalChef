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
    searchBarMain: {
        margin: '5%',
    },
    searchBar: {
        backgroundColor: '#fff',
        height: 50,
        padding: 10,
        borderRadius: 50
    },
    categoriesMain: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    RecipesMain: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },

    categories: {
        backgroundColor: '#FF9F43',
        width: 80,
        height: 80,
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    categoriesDetails: {
        margin: 5,
        
    },

    categoriesImageContainer: {
        backgroundColor: '#f9eebaa1',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,

    },


    categoriesImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    categoriesText: {
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
        
    },
    recommended: {
        marginTop: '5%',
       
    },
    recommendedHeader: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: '3%',
        margin: '5%',
        
    },
    recommendedBody: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",

    },
    recommendedImageContainer: {
        margin: 5
    }, 
    recommendedImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 5
    },
    ImageTextMain: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },

    ImageTextSub: {
        color: '#000',
        fontSize: 10,
    },
    ImageTextUser: {
        marginVertical: 5,
        color: '#000',
        fontSize: 13,
        fontWeight: 'bold'
    },
    
    recipes: {
        marginTop: '5%',
        margin: '5%',
    },

    recipesHeader: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: '3%', 
    },

    recipesContainer: {
        flexDirection: 'row',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },

    recipesTextContainer: {
        margin: '2%',
        marginLeft: '5%',
        justifyContent: 'space-between'
    },

    recipesImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 5
    },

    mainImage: {
        width: '100%',
        height: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    dishDetailsMain: {
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: '5%',
        padding: '2%',
        shadowColor: '#f9eebaa1',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    dishDetailsHeader: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: '2%'
    },

    dishDetailsSubHeader:{
        fontSize: 12,
        textAlign: 'center',
        color: '#6c6b6b'
    },

    dishDetailsSub: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: '2%',
    },

    dishDetails: {
        fontSize: 12,
        color: '#6c6b6b'
    },

    creatorMain: {
        flexDirection: 'row',
        marginVertical: '3%',
        marginHorizontal: '5%',
        alignItems: 'center'
    },

    creatorText: {
        marginLeft: 10
    },

    creatorSubTitle: {
        fontSize: 10
    },

    creatorName: {
        textAlign: 'center',
        fontSize: 15,
    },

    creatorLogo: {
        width: 40,
        height: 40,
        borderRadius: 15
    },

    ingredientsMain: {
        margin: '5%',
    },

    ingredientsHeader:{
        fontSize: 25,
        fontWeight: 'bold'
    },

    ingredientsBody: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    ingredients: {
        backgroundColor: '#FF9F43',
        width: 80,
        height: 80,
        borderRadius: 10,
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    ingredientsDetails: {
        margin: 5,
    },

    ingredientsImageContainer: {
        backgroundColor: '#f9eebaa1',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,

    },

    ingredientsImage: {
        width: 60,
        height: 60,
        
    },

    ingredientsText: {
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left'
        
    },
    ingredientsSubText: {
        color: '#6c6b6b',
        textAlign: 'left'
    },

    instructionMain: {
        margin: '5%'
    },

    instructionHeader:{
        fontSize: 25,
        fontWeight: 'bold'
    },

    instructionBody: {
        margin: '2%'
    },

    instructionCard: {
        padding: '5%',
        borderRadius: 10
    },
    instructionCardHeader: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: '2%'
    },



  
})

export default styles