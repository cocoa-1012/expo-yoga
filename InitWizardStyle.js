import { Platform, StyleSheet } from "react-native";
import Colors from "./constants/Colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#264F4B',
        position: 'relative',
        height: '100%',
    },
    image: {
        width: 150,
        height: 50,
        marginTop: 30,
        marginLeft: 19
    },
    titleImage: {
        position: 'absolute',
        marginTop: 88,
        left: 0,
        zIndex: 99
    },
    description: {
        width: '80%',
        color: 'white',
        top: 22,
        left: 16,
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '400',
        zIndex: 9999
    },
    descriptionDiv: {
        marginTop: 280,
        height: 150,
        display: 'flex',
        justifyContent: 'space-between',
    },
    backgroundVideo: {
        position: 'absolute',
        right: 0,
        top: 120,
        width: '88%',
        height: 250,
        zIndex: 0
    },
    root: {
        display: 'flex',
        flex: 1,
    },
    containerText: {
        textAlign: 'center',
        top: "25%",
        left: 220,
        position: "absolute",
        width: "100%"
    },
    containerLastText: {
        textAlign: 'center',
        top: "15%",
        left: 220,
        position: "absolute",
        width: "100%"
    },
    buttonDiv1: {
        display: 'flex',
        width: 340,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        alignItems: 'center',
        zIndex: 5
    },
    buttonDiv2: {
        width: 320,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginTop: 10,
        zIndex: 5,
    },
    button1: {
        display: 'flex',
        marginTop: 10,
        backgroundColor: "#f5ede2",
        width: 120,
        height: 48,
        padding: 15,
    },
    button2: {
        marginTop: 5,
        marginBottom: 5,
        padding: 10,
        width: 343,
        height: 38,
        backgroundColor: '#f5ede2'
    },
    buttonText: {
        fontStyle: 'normal',
        flexGrow: 1,
        color: '#264f4b',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 24,
        fontWeight: '600'
    },
    hello: {
        width: "100%",
        color: Colors.white,
        fontSize: 38,
        lineHeight: Platform.OS !== 'ios' ? 55 : 48,
        paddingTop: Platform.OS !== 'ios' ? 0 : 15,
        textAlign: "center"
    },
    subtext: {
        width: "100%",
        backgroundColor: "transparent",
        color: Colors.white,
        fontSize: 22,
        lineHeight: Platform.OS !== 'ios' ? 37 : 32,
        paddingTop: Platform.OS !== 'ios' ? 0 : 5,
        textAlign: "center"
    },
    bkg: {
        width: '100%',
        height: '100%',
    },
    captionBottom: {
        textDecorationLine: 'underline',
        textDecorationColor: '#838383',
        color: "#ffffff",
        fontSize: 16,
        textAlign: 'center'
    },
    filling: {
        marginTop: 40,
        width: '60%',
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    point: {
        margin: 5,
        width: 7
    },

    genericRippleContainer: {
        paddingLeft: 60,
        paddingRight: 60
    }
});

export default styles;
