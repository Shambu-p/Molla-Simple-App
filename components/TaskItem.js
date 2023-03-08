import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { deleteTask } from '../state_management/reducers/task';
import { useDispatch } from 'react-redux';

export default TaskItem = (props) => {

    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(deleteTask({index: props.indx}));
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.indexContainer }>
                <Text style={ styles.index }>{ props.index }</Text>
            </View>
            <View style={ styles.taskContainer }>
                <Text style={ styles.task }>{ props.task }</Text>
                <TouchableOpacity onPress={ () => removeTask() }>
                    <MaterialIcons style={ styles.delete } name="delete" size={ 18 } color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#00e4d0',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#00e4d0',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
});


