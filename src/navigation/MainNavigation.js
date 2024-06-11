import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home/Home";
import CustomHeader from "../components/CustomHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favourite from "../screens/Favourite/Favourite";
import CustomTabBar from "../components/CustomTabBar";
import Layout from "../screens/Layout";
import Search from "../screens/Search/Search";
import Profile from "../screens/Profile/Profile";
import AuthDrawer from "../components/AuthDrawer";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
           
                <Stack.Navigator screenOptions={{
                    headerTransparent: true,
                    statusBarTranslucent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    header: (props) => <CustomHeader {...props} />,
                    headerShown: true
                }}>
                    <Stack.Screen name="MyTabs" component={MyTabs} />
                    <Stack.Screen
                        options={{headerShown: false,animation: 'fade'}}
                        name="Search" component={Search} />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name="Profile" component={Profile} />
                </Stack.Navigator>
                <AuthDrawer />
        </NavigationContainer>
    )
}
export default MainNavigation;

const MyTabs = () => {
    return (
        <Layout>
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen
                options={{ headerShown: false }}
                name="Home" component={Home} />
            <Tab.Screen
                options={{ headerShown: false }}
                name="Favourite" component={Favourite} />

        </Tab.Navigator>
        </Layout>
    )
}
