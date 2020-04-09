import React, {Component} from 'react'
import {View, Text, ImageBackground, StyleSheet} from 'react-native'

import commonStyles from '../commonStyles'
import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'

export default class TaskList extends Component {
    render () {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Task desc="Comprar camarão seco" estimateAt={new Date()} doneAt={new Date()}></Task>
                    <Task desc="Comprar livro e ler" estimateAt={new Date()} ></Task>
                </View>   
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1
    },
    background: {
        flexGrow: 2
    },
    taskList: {
        flexGrow: 8
    },
    titleBar: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 50,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20    
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 30,
        color: commonStyles.colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    }

})