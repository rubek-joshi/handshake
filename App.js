import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Body,
  Text,
  Card,
  CardItem,
  Item,
  Input,
  Root,
  Toast
} from "native-base";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Icon } from 'react-native-elements'

/* const dataArray = [
  {
    title: "Handshake Calculator",
    content:
      "Calculate the minimum number of handshakes required for n number of people such that each people gets to handshake every other people in the scenario."
  }
]; */

export default class Handshake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      handshakes: 0,
      collapsed: false
    };
  }
  calculateHandshakes = () => {
    const n = parseInt(this.state.userInput);
    this.setState({
      handshakes: (n * (n - 1)) / 2
    });
  };
  handleChangedText(numberOfPeople) {
    let n = numberOfPeople;
    if (n == "") {
      n = 0;
    }
    if (/^\d+$/.test(n.toString())) {
      this.setState({ userInput: n }, () => {
        this.calculateHandshakes();
      });
    } else {
      Toast.show({
        text: "Please enter numbers only",
        buttonText: "Okay",
        type: "danger",
        duration: 2000
      });
      this.setState({ userInput: n });
    }
  }
  renderNumpad() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "7" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>7</Text>
          </Button>

          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "8" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>8</Text>
          </Button>

          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "9" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>9</Text>
          </Button>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "4" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>4</Text>
          </Button>

          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "5" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>5</Text>
          </Button>

          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "6" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>6</Text>
          </Button>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "1" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>1</Text>
          </Button>

          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "2" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>2</Text>
          </Button>

          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "3" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>3</Text>
          </Button>
        </View>

        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-around"
          }}
        >
          <Button
            danger
            rounded
            large
            style={styles.numpadBtn}
            onPress={() => this.setState({ userInput: "", handshakes: 0 })}
          >
            <Text>CLR</Text>
          </Button>

          <Button
            rounded
            large
            style={styles.numpadBtn}
            onPress={() =>
              this.setState({ userInput: this.state.userInput + "0" }, () => {this.calculateHandshakes()})
            }
          >
            <Text>0</Text>
          </Button>

          <View style={{width: 90}}/>
        </View>
      </View>
    );
  }
  render() {
    return (
      <Root>
        <Container>
          <Header noLeft>
            <Body>
              <Title>Handshake App</Title>
            </Body>
          </Header>

          <View style={{ padding: 8, flex: 1 }}>
            {/* <Accordion dataArray={dataArray}/> */}

            <Collapse style={{padding: 8}}
              isCollapsed={this.state.collapsed}
              onToggle={(isCollapsed) => this.setState({collapsed: !this.state.collapsed})}>
              <CollapseHeader style={{flexDirection: 'row'}}>
                <Text>What does this app do?</Text>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  <Icon name={this.state.collapsed ? 'expand-less' : 'expand-more'}/>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text>
                Calculate the minimum number of handshakes required for n number of people such that each people gets to handshake every other people in the scenario.
                </Text>
              </CollapseBody>
            </Collapse>

            <View style={{ paddingVertical: 4}} />

            <Card>
              <CardItem header bordered>
                <Text>Calculation Sheet</Text>
              </CardItem>
              <CardItem>
                <Body
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <View>
                    <Text style={{ fontSize: 80 }}>
                      {this.state.handshakes}
                    </Text>
                  </View>
                </Body>
              </CardItem>
            </Card>

            <View style={{ paddingVertical: 4 }} />

            <Item regular>
              <Input
                placeholder="Enter number of people"
                value={this.state.userInput}
                onChangeText={value => this.handleChangedText(value)}
                keyboardType="number-pad"
                maxLength={10}
              />
            </Item>

            <View style={{ paddingVertical: 4 }} />

            {this.renderNumpad()}
          </View>
        </Container>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  numpadBtn: {
    marginVertical: 8,
    width: 90,
    justifyContent: "center"
  }
});
