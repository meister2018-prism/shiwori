import React from "react";
import { Button,View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

//initial page
import WelcomeScreen from './screens/welcome/welcomeScreen';
import LoginScreen from './screens/welcome/loginScreen';
import TutorialScreen from './screens/welcome/tutorialScreen';

//home
import HomeScreen from './screens/home/homeScreen';
import EditScreen from './screens/home/editScreen';

//search
import SearchScreen from './screens/search/searchScreen';
import CodeScanScreen from './screens/search/codeScanScreen';
import CategoryScreen from './screens/search/categoryScreen';
import KeywordsScreen from './screens/search/keywordsScreen';

//mypage
import MyPageScreen from './screens/myPage/myPageScreen';
import BookMarkScreen from './screens/myPage/bookMarkScreen';

//hamburger
import HanbergerScreen from './screens/hamburger/hamburgerScreen';
import SettingsScreen from './screens/hamburger/settingsScreen';
import HelpScreen from './screens/hamburger/helpScreen';
import ContactScreen from './screens/hamburger/contactScreen';

//general screen
import RankingScreen from './screens/rankingScreen'
import BooksScreen from './screens/booksScreen'
import DetailsScreen from './screens/detailsScreen'


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Edit: EditScreen,
});

const SearchStack = createStackNavigator({
  Search: SearchScreen,
  Keyword: KeywordsScreen,
  Category: CategoryScreen,
  CodeScan: CodeScanScreen,
  Ranking: RankingScreen,
  Details: DetailsScreen,
});

const SubMenuesStack = createStackNavigator({
  Settings: SettingsScreen,
  Help: HelpScreen,
  Contact: ContactScreen,
});

const MyPageStack = createStackNavigator({
  MyPage: MyPageScreen,
  BookMark: BookMarkScreen,
  Books: BooksScreen,
})

const HamburgerStack = createStackNavigator({
  Hanberger: HanbergerScreen,
  Settings: SettingsScreen,
  Help: HelpScreen,
  Contact: ContactScreen,
})


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    MyPage: MyPageStack,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(TabNavigator);

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Search: SearchScreen,
//   },
//   {
//     initialRouteName: "Home"
//   }
// );