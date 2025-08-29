import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  PixelRatio,
  Dimensions,
  BackHandler,
  ScrollView,
  Pressable,
} from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type Screen1Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Screen1'>;
};

const Screen1 = ({ navigation }: Screen1Props) => {
  const [value, setValue] = useState(0);
  const interval = useRef<null | NodeJS.Timeout>(null);

  console.log('hello');
  console.log(Dimensions.get('screen'));

  const onPressIn = () => {
    interval.current = setInterval(() => {
      setValue(p => p + 1);
    }, 100);
  };

  const onPressOut = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  };

  useEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        console.log('back button pressed');
        return true;
      },
    );

    return () => {
      console.log('subscription removed');
      subscription.remove();
    };
  }, []);

  const deviceOrientation = useDeviceOrientation();

  console.log(deviceOrientation, 'deviceOrientation');

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar translucent={false} backgroundColor={'blue'} />
      <View
        style={{
          paddingTop:
            Platform.OS === 'android' ? StatusBar.currentHeight || 0 + 20 : 0,
          backgroundColor: 'red',
        }}
      >
        <Text>Platform specific code</Text>
      </View>

      <View
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: 1 / PixelRatio.get(),
          marginTop: 10,
        }}
      ></View>
      <Text numberOfLines={1} onPress={() => Alert.alert('Hi Sai!')}>
        Hi Sai Teja Shashank!. This is a very long text for testing
      </Text>
      <Image source={require('../assets/lego.webp')} />
      <Image
        source={{
          uri: 'https://imgs.search.brave.com/z_mLoUgT8cRgk3CFIdC2loJnqyx0e8tuE4bakn9G8NM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9EUXdNekkx/T1RrMk9WNUJNbDVC/YW5CblhrRnRaVGd3/TVRVM05USTJOak1A/LmpwZw',
        }}
        height={200}
        width={200}
        blurRadius={5}
        //onLoadEnd={() => Alert.alert('happy')}
      />
      <TouchableHighlight
        style={[
          {
            height: 50,
            width: 200,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          },
          { backgroundColor: 'pink' },
        ]}
        onPress={() => console.log('clicked')}
        onLongPress={() => console.log('long pressed')}
      >
        <Text>Touchable Highlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback
        style={{
          height: 50,
          width: 200,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() =>
          Alert.prompt('title', 'message', text => {
            //only works on IOS
            console.log(text);
          })
        }
      >
        <Text>Touchable Withoutfeedback</Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[
          {
            height: 50,
            width: 200,
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
          },
          { backgroundColor: 'yellow' },
        ]}
      >
        <Text>Touchable Opacity</Text>
      </TouchableOpacity>
      <Text>{value}</Text>
      <Button //does not has style prop
        title="Click Me"
        onPress={() => {
          Alert.alert('title', 'message', [
            {
              text: 'yes',
              onPress: () => {
                console.log('Yes clicked');
              },
            },
            {
              text: 'no',
              onPress: () => {
                console.log('No clicked');
              },
            },
          ]);
        }}
        color={'blue'}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          height: 500,
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{ backgroundColor: 'green', height: 20, width: 20 }}
          ></View>
          <View
            style={{ backgroundColor: 'pink', height: 20, width: 20 }}
          ></View>
        </View>
        <View
          style={{
            backgroundColor: 'black',
            height: 20,
            width: 20,
            margin: 'auto',
          }}
        ></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{ backgroundColor: 'yellow', height: 20, width: 20 }}
          ></View>
          <View
            style={{ backgroundColor: 'cyan', height: 20, width: 20 }}
          ></View>
        </View>
      </View>

      <Pressable
        style={{ height: 100, width: 100, backgroundColor: 'pink' }}
        onPress={() => {
          navigation.navigate('Screen2', { name: 'sai' });
        }}
      >
        <Text>Click to Go to next Screen</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
  },
});
