import * as React from "react";
import { Image, View, SafeAreaView, ScrollView } from "react-native";
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text category="h1">Uhh idk</Text>
  </Layout>
);

const AnimeScreen = () => {
  return (
    <List
      style={{ flex: 1 }}
      data={data}
      renderItem={() => (
        <Layout style={{ flex: 1, marginVertical: 10 }}>
          <Text style={{ backgroundColor: undefined }} category="h4">
            Seasonal Anime
          </Text>
          <List
            style={{ width: "100%" }}
            data={data}
            horizontal
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.image }}
                style={{
                  marginHorizontal: 5,
                  paddingBottom: 0,
                  marginVertical: 0,
                  height: 150,
                  width: 100,
                }}
              />
            )}
          />
        </Layout>
      )}
    />
  );
};

const HomeScreen = () => {
  const ItemImage = (props: any) => (
    <Avatar
      {...props}
      style={[props.style, { tintColor: null }]}
      source={props.image}
    />
  );

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
      <List style={{ width: "100%" }} data={data} renderItem={renderItem} />
    </Layout>
  );
};

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Layout
            style={{
              flex: 1,
            }}
          />
        ),
        headerTitle: "",
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const AnimeStack = createStackNavigator();

function AnimeStackScreen() {
  return (
    <AnimeStack.Navigator
      screenOptions={{
        headerBackground: () => (
          <Layout
            style={{
              flex: 1,
            }}
          />
        ),
        headerTitle: "",
      }}
    >
      <AnimeStack.Screen name="Anime" component={AnimeScreen} />
    </AnimeStack.Navigator>
  );
}

const BottomTabBar = ({ navigation, state }: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HOME" />
    <BottomNavigationTab title="ANIME" />
    <BottomNavigationTab title="ORDERS" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Anime" component={AnimeStackScreen} />
    <Tab.Screen name="Orders" component={OrdersScreen} />
  </Tab.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;
