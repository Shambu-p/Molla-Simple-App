import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskInputField from './InputField';
import TaskItem from './TaskItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allTasks, addTask, selectTask, deleteTask } from '../state_management/reducers/task';

export default function () {

    const dispatch = useDispatch();
    const tasks = useSelector(selectTask);
    useEffect(() => {
        dispatch(allTasks());
    }, []);

    const addTask = async (task) => {

        if (task == null) return;

        try {
            
            dispatch(addTask({
                name: task
            }));

        } catch (error) {
            alert(error.message);
        }
        // Keyboard.dismiss();
        
    }

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
            <TaskInputField addTask={addTask} />
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
