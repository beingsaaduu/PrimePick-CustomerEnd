import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';


export type StackParamsList = {
    BottomTabNavigator: undefined
    CartScreen: undefined
    ChatScreen: undefined
    CheckOutScreen: undefined
    ForgotPasswordScreen: undefined
    IntroductionScreen: undefined
    LoginScreen: undefined
    ProductDetailsScreen: undefined
    SearchScreen: undefined
    SignUpScreen: undefined
}

export type BottomTabNavigatorProps = NativeStackScreenProps<StackParamsList, 'BottomTabNavigator'>;
export type CartScreenProps = NativeStackScreenProps<StackParamsList, 'CartScreen'>;
export type ChatScreenProps = NativeStackScreenProps<StackParamsList, 'ChatScreen'>;
export type CheckOutScreenProps = NativeStackScreenProps<StackParamsList, 'CheckOutScreen'>;
export type ForgotPasswordScreenProps = NativeStackScreenProps<StackParamsList, 'ForgotPasswordScreen'>;
export type IntroductionScreenProps = NativeStackScreenProps<StackParamsList, 'IntroductionScreen'>;
export type LoginScreenProps = NativeStackScreenProps<StackParamsList, 'LoginScreen'>;
export type ProductDetailsScreenProps = NativeStackScreenProps<StackParamsList, 'ProductDetailsScreen'>;
export type SearchScreenProps = NativeStackScreenProps<StackParamsList, 'SearchScreen'>;
export type SignUpScreenProps = NativeStackScreenProps<StackParamsList, 'SignUpScreen'>;

export type TabParamsList = {
    Home: undefined
    Products: undefined
    Chat: undefined
    Profile: undefined
}

export type HomeScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, 'Home'>,
    StackScreenProps<StackParamsList>
>;

export type ProductsScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, 'Products'>,
    StackScreenProps<StackParamsList>
>;

export type ChatListScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, 'Chat'>,
    StackScreenProps<StackParamsList>
>;

export type ProfileScreenProps = CompositeScreenProps<
    BottomTabScreenProps<TabParamsList, 'Profile'>,
    StackScreenProps<StackParamsList>
>;