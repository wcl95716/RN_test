import { Link } from "expo-router";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import {styles} from "./index.style";

interface Category {
  title: string;
  items: { label: string; href: string }[];
}

const categories:Category[] = [
  {
    title: "Chat",
    items: [
      //  Chatgpt2
      { label: "Chatgpt2", href: "/chat/Chatgpt2" },
      { label: "chattest", href: "/chat/chattest" },
      { label: "chattest2", href: "/chat/chattest2" },
    ],
  },
  {
    title: "Basic Components",
    items: [
      { label: "ButtonExample", href: "/examples/ButtonExample" },
      { label: "MultipleStylesExample", href: "/examples/MultipleStylesExample" },
      { label: "ItemList", href: "/examples/ItemList" },
      { label: "Flexbox", href: "/examples/Flexbox" },
      { label: "Flexbox2", href: "/examples/Flexbox2" },
    ],
  },
  {
    title: "redux",
    items: [
      { label: "Redux1", href: "/examples/Redux" },
      { label: "Modal", href: "/examples/Modal" },
      { label: "TipModal", href: "/examples/TipModal" },
      //AutoCloseModal 
      { label: "AutoCloseModal", href: "/examples/AutoCloseModal" },
    ],
  },
  {
    title: "chattest",
    items: [
      { label: "ChatTest", href: "/chattest/ChatTest" },
      { label: "ChatGpt", href: "/chattest/ChatGpt" },
      //  Chatgpt2
      { label: "Chatgpt2", href: "/chattest/Chatgpt2" },
      { label: "ChatGptMD", href: "/chattest/ChatGptMD" },
      // Chatgpt3
      { label: "Chatgpt3", href: "/chattest/Chatgpt3" },
    ],
  },

];

const Category = ({ title, items }: { title: string, items: { label: string, href: string }[] }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.cardContainer}>
      {items.map((item, index) => (
        // <TouchableOpacity key={index} style={styles.card}>
          <Link key={index} href={item.href} style={[styles.link,styles.card]}>
            <Text style={styles.cardText}>{item.label}</Text>
          </Link>
        // </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>React Native Demos</Text>
      {categories.map((category, index) => (
        <Category key={index} title={category.title} items={category.items} />
      ))}
    </ScrollView>
  );
}
