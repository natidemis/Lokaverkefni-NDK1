import {ImageBackground}  from 'react-native';
import React from 'react';
import styles from '../../Styles';
const image = require('../../Images/gym.jpg')

export function BackgroundImage(props){
    return(
      <ImageBackground style={styles.container} source={image}>
          {props.children}
      </ImageBackground>
    )
}

//export class BackgroundImage extends React.Component{
//    image: any;
//    constructor(props){
//      super(props)
//    }
//  
//    componentDidMount(){
//      this.image = (<ImageBackground style={styles.container} source={image}></ImageBackground>)
//    }
//  
//    render(){
//      return this.image
//    }
//  }


