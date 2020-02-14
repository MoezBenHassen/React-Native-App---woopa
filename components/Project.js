import React from 'react'
import styled from 'styled-components'
import {StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
//import {BoxShadow} from 'react-native-shadow';

class Project extends React.Component {
    
    render (){
        return (
           <Container style={styles.containerStyle}>
               <Cover>
                   <Image source={this.props.image}/>
                   <Title>{this.props.title}</Title>
               </Cover>
               <Text>{this.props.text}</Text>
           </Container>
        )
    }
}

export default Project 

const styles = StyleSheet.create({
    containerStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        
    }
})
const Container = styled.View`
    width: 315px;
    height: 460px;
    border-radius: 14px;
    background-color: white;
    box-shadow: 0 10px 20px yellow;
    elevation: 10
`;

const Cover = styled.View`
    height: 290px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 100%;
    height: 90%;
`;
const Title = styled.Text`
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: bold;
    color:#FFFFFF;
    width: 300px;
`;
const Text = styled.Text`
    font-size: 17px;
    margin: 20px;
    line-height: 26px;
`;