import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import commonStyles from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'
import 'moment/locale/pt-br'

export default props => {

    const doneOrNotStyle = props.doneAt ? 
                     { textDecorationLine: 'line-through' } : {}

    const date = moment(props.estimateAt).locale('pt-br').format('ddd, D [de] MMMM [de] YYYY')

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>{getCheckView(props.doneAt)}</View>
            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{date}</Text>
                {/* <Text>{props.doneAt + ""}</Text> */}
            </View>
        </View>
    )
}

function getCheckView(doneAt) {
    if (doneAt) {
        return (
            <View style={styles.done}>
                <Icon name="check" size={20} color="#FFF"></Icon>
            </View>
        )
    } else {
        return (
            <View style={styles.pendding}></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        paddingVertical: 10,
        alignItems: 'center'
    },
    checkContainer: {
        width:"15%",
        alignItems: 'center', // Para alinhar no centro do eixo horizontal (padrão)
        justifyContent: 'center',
    },
    pendding: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
    },
    done: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#4D7031',
        alignItems: 'center',
    },
    desc: {
        fontSize: 18,
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
    },  
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
    }
})