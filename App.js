import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity,ImageBackground} from 'react-native';
import maxresdefault from './assets/maxresdefault.jpg'
export default class App extends Component {

  temp=0;
  temp1=0;
  state={
    random:['#000fff','#00ffff','#111111'],
    buttonColor:'black',
    pageColor:'black',
    padding:'40'
  };

  changeColor(){
    const ca= this.state.random;
    var currentColor = ca[this.temp];
    this.setState({buttonColor:currentColor});
    if(this.temp >3)
    {
      this.temp=0;
    }
    else
    {
      this.temp=this.temp+1;
    }

  }

  whatColor(){
    const ca= this.state.random;
    var currentColor = ca[this.temp1];
    this.setState({pageColor:currentColor});
    if(this.temp1 >3)
    {
      this.temp1=0;
    }
    else
    {
      this.temp1=this.temp1+1;
    }

  }

  backImage=()=>
  {
    const ca= this.state.random;
    var currentColor = ca[this.temp];
    this.setState({buttonColor:currentColor});
    let color1 = "'#000fff";
    let color2 = "#00ffff";
    let color3 = '#111111';
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
    this.setState({buttonColor3:color1});
    this.setState({buttonColor2:color2});
    this.setState({buttonColor4:color3});

  }

  render() {
    
    return (
      <TouchableOpacity style={{flex: 1,
        justifyContent:'center',alignItems:'center',
        backgroundColor: this.state.pageColor}}
        onPress={()=>this.whatColor()}>
          <View style={styles.backgroundContainer}>
          {this.state.show ? (
            <Image style={styles.backgroundImage} source={require('./assets/maxresdefault.jpg')} />):null}
          </View>
          <TouchableOpacity
              style={{backgroundColor:'black', padding: 35}}
              onPress={()=>this.whatColor()}
                >
            <Text style={styles.text}>Idiotic</Text>
          </TouchableOpacity> 
          <TouchableOpacity
              style={{backgroundColor:this.state.buttonColor, padding: 35}}
              onPress={()=>this.changeColor()}
                >
            <Text style={styles.text}>Whatever</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor:this.state.buttonColor, padding:35}}
          onPress={()=> {this.backImage()}}
          >         
          <View>
          <Text style={styles.text}>Stupid background</Text>
          </View>
          
          
          </TouchableOpacity>       
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    color:'red'
    },
    backgroundImage:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.3
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: null,
    height: null,
}, 

});