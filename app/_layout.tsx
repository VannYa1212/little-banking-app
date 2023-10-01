import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack,useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { setItem , getItem } from '../libs/storage';
NativeWindStyleSheet.setOutput({
  default: "native",
});

// setitem token to storage

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/Onboards',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(false);
  const [token, setToken] = useState(false);
  const router = useRouter();
  // check if user not token in storage push to login

  //  sync storage if user not token push to login
  useEffect(() => {
    getItem("token").then((res) => {
      if (!res) {
        router.push("/WelcomScreen");
      }
    });
  }, []);

  useEffect(() => {
    if (colorScheme === 'dark') {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
  }, [colorScheme])

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="modal" options={{ headerShown: false }} />
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(account)/Account' options={{ headerShown: false }} />
        <Stack.Screen name='(qr)/Qr' options={{ headerShown: false }} />
        <Stack.Screen name='Notifycations' options={{ headerShown: false }} />
        <Stack.Screen name='(cards)/Cards' options={{ headerShown: false }} />
        <Stack.Screen name='(transfer)/Transfers' options={{ headerShown: false }} />
        <Stack.Screen name='(deposit)/Deposites' options={{ headerShown: false }} />
        <Stack.Screen name='(withdraw)/Withdraws' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)/PassCodeV1' options={{ headerShown: false }} />
        <Stack.Screen name='WelcomScreen' options={{ headerShown: false }} />
        <Stack.Screen name='Onboards' options={{ headerShown: false }} />
        {/* auth */}
        <Stack.Screen name='(auth)/Login' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)/Register' options={{ headerShown: false }} />

      </Stack>
    </ThemeProvider>
  );
}
