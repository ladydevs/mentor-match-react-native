import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  StyleProvider,
  Content,
  H1, H2, H3,
  Text,
  Button,
  Footer
} from 'native-base/src';
import BrandedContainer from './BrandedContainer';
// import { Button } from 'native-base/src/basic/Button';

export default class Home extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => ({
    title: 'LadyDevs Mentor Match',
  });

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isLoading: true
    };
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <BrandedContainer>
        <Content contentContainerStyle={styles.container}>
          <H1>LadyDevs Mentor Match</H1>
          <Text style={styles.description}>Connect with a dev mentor in your community.</Text>
        </Content>
        <Button block large style={styles.button}>
          <Text>Get Started</Text>
        </Button>
        <Button bordered block large style={styles.button}>
          <Text>I Already Have an Account</Text>
        </Button>
      </BrandedContainer>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 20
    },
    description: {
      textAlign: 'center',
      marginTop: 10
    },
    buttonContainer: {
      margin: 10,
      alignSelf: 'center'
    },
    footer: {
      backgroundColor: '#fff'
    },
    button: {
      marginBottom: 20
    }
  })
;
