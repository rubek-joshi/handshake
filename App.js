import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Header, Title, Content, Button, Right, Body, Text, Accordion, Card, CardItem, Item, Input, Root, Toast } from "native-base";

const dataArray = [
  { title: 'Handshake Calculator', content: 'Calculate the minimum number of handshakes required for n number of people such that each people gets to handshake every other people in the scenario.'}
]

export default class Handshake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      handshakes: 2
    }
  }
  calculateHandshakes = () => {
    const n = parseInt(this.state.userInput);
    this.setState({
      handshakes: n*(n-1)/2
    });
  }
  handleChangedText(numberOfPeople){
    let n = numberOfPeople;
    if(n == ''){
      n = 0;
    }
    if (/^\d+$/.test(n.toString())) {
      this.setState({userInput: n}, () => {this.calculateHandshakes()});
    } else {
      Toast.show({
        text: 'Please enter numbers only',
        buttonText: 'Okay',
        type: 'danger',
        duration: 2000
      });
      this.setState({userInput: n});
    }
  }
  render(){
    return (
      <Root>
        <Container>
          <Header noLeft>
            <Body>
              <Title>Handshake App</Title>
            </Body>
            <Right>
              <Button transparent>
                <Text>Reset</Text>
              </Button>
            </Right>
          </Header>

          <Content padder>
            <Accordion dataArray={dataArray}/>
            
            <View style={{paddingVertical: 4}}/>
            
            <Card>
              <CardItem header bordered>
                <Text>Calculation Sheet</Text>
              </CardItem>
              <CardItem>
                <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View>
                    <Text style={{fontSize: 80}}>{this.state.handshakes}</Text>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <View style={{paddingVertical: 4}}/>

            <Item regular>
              <Input placeholder='Enter number of people'
                value={this.state.userInput}
                onChangeText={(value) => this.handleChangedText(value)}
                keyboardType='number-pad'
                maxLength={10}/>
            </Item>
          </Content>
        </Container>
      </Root>
    );
  }
}


const styles = StyleSheet.create({

});
