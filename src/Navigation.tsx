import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Avatar,
  Button,
  ListItem,
  Layout,
  List,
  Text,
  BottomNavigation,
  BottomNavigationTab,
} from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const HomeScreen = () => {
  const ItemImage = (props: any) => (
    <Avatar
      {...props}
      style={[props.style, { tintColor: null }]}
      source={props.image}
    />
  );

  const data = [
    {
      title: "Re:zero",
      genre: "Isekai",
      score: 8.5,
      image: "https://cdn.myanimelist.net/images/anime/11/79410.jpg",
    },
    {
      title: "Haikyuu",
      genre: "Shonen",
      score: 8.59,
      image: "https://cdn.myanimelist.net/images/anime/7/76014.jpg",
    },
    {
      title: "My Hero Academia",
      genre: "Shonen",
      score: 8.25,
      image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
    {
      title: "My Hero Academia",
      genre: "Shonen",
      score: 8.25,
      image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
    {
      title: "My Hero Academia",
      genre: "Shonen",
      score: 8.25,
      image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
    {
      title: "My Hero Academia",
      genre: "Shonen",
      score: 8.25,
      image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
    {
      title: "My Hero Academia",
      genre: "Shonen",
      score: 8.25,
      image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
    {
      title: "My Hero Academia",
      genre: "Shonen",
      score: 8.25,
      image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
    {
      title: "My Hero Academia",
      genre: "Shonen",
      score: 8.25,
      image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
    },
  ];

  const InstallButton = (props: any) => (
    <Button size="tiny">{props.score}</Button>
  );

  const renderItem = ({ item }: any) => (
    <ListItem
      title={item.title}
      description={item.genre}
      accessoryLeft={() => <ItemImage image={item.image} />}
      accessoryRight={() => <InstallButton score={item.score.toFixed(2)} />}
    />
  );

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h1">Yes sir!</Text>
      <List data={data} renderItem={renderItem} />
    </Layout>
  );
};

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HOME" />
    <BottomNavigationTab title="ORDERS" />
    <BottomNavigationTab title="USERS" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Users" component={UsersScreen} />
    <Screen name="Orders" component={OrdersScreen} />
  </Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
