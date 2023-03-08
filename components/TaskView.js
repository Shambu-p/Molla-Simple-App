import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskInputField from './InputField';
import TaskItem from './TaskItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTasks, addTask, selectTask } from '../state_management/reducers/task';

export default function () {

    const dispatch = useDispatch();
    const tasks = useSelector(selectTask);
    useEffect(() => {
        dispatch(allTasks());
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Task List</Text>
            <ScrollView style={styles.scrollView}>
                {
                    tasks ? tasks.map((task, index) => {
                        return (
                            <View key={index} style={styles.taskContainer}>
                                <TaskItem index={index + 1} task={task.name} indx={index} />
                            </View>
                        );
                    }) : null
                }
            </ScrollView>
            <TaskInputField />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
    },
    scrollView: {
        marginBottom: 70,
    },
    taskContainer: {
        marginTop: 20,
    }
});
