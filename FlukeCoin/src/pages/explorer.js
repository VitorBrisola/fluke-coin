/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    Button,
    FlatList,
    View,
    Text,
} from 'react-native';

import TabRender from './utils'

const DATA = [
    {id: '5', name: 'Flukeco'},
    {id: '0', name: 'Bitcoin'},
    {id: '1', name: 'Ethereum'}, 
    {id: '2', name: 'Litecoin'}, 
    {id: '3', name: 'Zcash'}, 
    {id: '4', name: 'Dash'},

];


function Item({ data }){
    return(
        <View 
            style={styles.dualContainer}>
            <View style={styles.coinContainer}><Text>{data}</Text></View>
            <View style={styles.coinContainer}><Text>{data}</Text></View>         
        </View>

    );
};



//const App: () => React$Node = () => {
export default class ExplorerScreen extends Component {

    state = {
        data: [],
    };

    componentDidMount(){
        this.loadData();
    };

    //loadData = async ( startDate = new Date()) => {};
    loadData = () => {
        this.setState({data:DATA})
    };

    render() {
        return (
            <SafeAreaView 
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Item data={item.name} />}
                    keyExtractor={item => item.id}
                />
                <View>
                    {TabRender(this.props)}
                </View>
                
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // make the container fill the screen
        backgroundColor: 'darkgreen',
        //marginTop: Constants.statusBarHeight,
    },
    dualContainer: {
        height: 100,
        padding: 20,
        marginHorizontal: 0,
        marginVertical: 15,
        flexDirection:"row",
    },
    coinContainer: {
        height: 75,
        width: 140,
        padding: 0,
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 0,
        backgroundColor: '#FFFF', 
        borderWidth: 2, 
        borderColor: 'green',
        borderRadius: 5,
    },
});

//export default App;