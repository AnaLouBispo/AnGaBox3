import { ScrollView, StyleSheet } from "react-native";
import Header from "./src/Componentes/Header";
import Banner from "./src/Componentes/Banner";
import CardMovie from "./src/Componentes/CardMovie";
import Texts from "./src/Componentes/Text";
import CardVideo from "./src/Componentes/CardVideo";
import Footer from "./src/Componentes/Footer";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Header />
      <Banner />
      <Texts />

      {/* Horizontal Scroll for CardMovie */}
      <ScrollView
        horizontal
        style={styles.cardMovieContainer}
        showsHorizontalScrollIndicator={false}
      >
        {[...Array(4)].map((_, index) => (
          <CardMovie key={index} />
        ))}
      </ScrollView>

      <Texts />

      {/* Card Videos */}
      {[...Array(3)].map((_, index) => (
        <CardVideo key={index} />
      ))}
      {/* 
      <Footer /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingBottom: 20,
  },
  cardMovieContainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    paddingVertical: 5,
  },
});
