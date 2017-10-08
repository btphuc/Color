/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Slider,
  TextInput
} from 'react-native';

class ColorController extends Component {
    
    HandelChangeSliderValue = (v) => {
        this.props.onValueChanged(Math.round(v));
        this.setState({value : Math.round(v)});
    }

    constructor(props) {
      super(props);
    
      this.state = {
        value: this.props.value,
      };
    }
    render(){
        return(
            <View style={{flex: 1 ,flexDirection: 'row', justifyContent: 'center' , alignItems: 'center'}}>
                <Text>{this.props.title}</Text>
                <Slider 
                    minimumValue={0} 
                    maximumValue={255} 
                    value={0} 
                    onValueChange={(v) => {
                        this.HandelChangeSliderValue(v);
                    }}
                    style={{width : 200}}
                />
                <TextInput 
                    value={this.state.value.toString()}  
                    style={{paddingBottom: 6, width : 30}}
                />   
            </View>
        )
    }
}

export default class App extends Component<{}> {
    
    
    constructor(props) {
      super(props);
    
      this.state = {
        R: 0,
        Red : 0,
        G: 0,
        Green: 0,
        B: 0,
        Blue : 0
      };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topbar}>
                    <Text style={styles.topbarText}>
                        Color Picker
                    </Text>
                </View>
                {/* Flex nến có sẵn 1 phần tử cùng cấp thì sẽ tràn hết phần còn lại */}
                <View style={{flex : 1 , justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{height: 400 , width: 300}}>
                        <View style={{flex:1 }}>
                            <ColorController title='R' value={this.state.R} onValueChanged={(value) => {this.setState({Red : value})}}/>
                            <ColorController title='G' value={this.state.G} onValueChanged={(value) => {this.setState({Green : value})}}/>
                            <ColorController title='B' value={this.state.B} onValueChanged={(value) => {this.setState({Blue : value})}}/>
                        </View>
                        
                        <View style={{flex:1 , backgroundColor: `rgb( ${this.state.Red},${this.state.Green},${this.state.Blue} )` , elevation: 3}}>
                            
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    },
    topbar: {
    height : 50,
    backgroundColor: '#2962FF',
    alignItems: 'center',
    justifyContent: 'center',
    elevation : 5,
    },
    topbarText : {
    color : "#FFFFFF",
    fontSize : 15
    }
});
