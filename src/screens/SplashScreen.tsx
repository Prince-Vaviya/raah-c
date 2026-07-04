import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import RaahLogo from '../../assets/raah_logo.svg';

type SplashScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

export default function SplashScreen({ navigation }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <RaahLogo width={width * 0.6} height={width * 0.6} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // assuming white background for the logo
    alignItems: 'center',
    justifyContent: 'center',
  },
});
