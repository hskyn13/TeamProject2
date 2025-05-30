import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AuthStackParamList} from '@/navigations/stack/AuthStackNavigator';
import CustomButton from '@/components/common/CustomButton';
import {authNavigations, colors} from '@/constants';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <ImageBackground
      source={require('@/assets/image/BBP.jpg')}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.overlay} />

      <SafeAreaView style={styles.container}>
        <View style={styles.main}>
          <Image
            source={require('@/assets/image/1234.png')}
            style={styles.logo}
          />
          <View style={styles.header}>
            <Text style={styles.title}>맛집 로그</Text>
            <Text style={styles.subtitle}>기업연계2{'\n'}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            label="로그인하기"
            onPress={() => navigation.navigate(authNavigations.LOGIN)}
          />
          <CustomButton
            label="회원가입하기"
            variant="outlined"
            onPress={() => navigation.navigate(authNavigations.SIGNUP)}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },

  main: {
    alignItems: 'center',
    marginTop: 100, // ← 여기로 전체 블록을 아래로 내림
  },

  logo: {
    width: 128,
    height: 128,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 어두운 오버레이
  },

  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'BagelFatOne-Regular',
    color: colors.WHITE,
    fontSize: 60,
    //fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  subtitle: {
    fontFamily: 'BagelFatOne-Regular',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 40,
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    marginTop: 100,
  },
});

export default AuthHomeScreen;
