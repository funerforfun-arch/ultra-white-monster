import React, { useState } from "react";
import {
  SafeAreaView, View, Text, StyleSheet, Pressable, StatusBar,
  ScrollView, Platform
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [answer, setAnswer] = useState(null);
  const [streak, setStreak] = useState(0);

  const choose = (value) => {
    setAnswer(value);
    if (value === "yes") setStreak((current) => current + 1);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#050706" />
      <LinearGradient
        colors={["#101712", "#070a08", "#020302"]}
        locations={[0, 0.48, 1]}
        style={StyleSheet.absoluteFill}
      />
      <View pointerEvents="none" style={styles.glowOne} />
      <View pointerEvents="none" style={styles.glowTwo} />

      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.topRow}>
            <Text style={styles.eyebrow}>PERSONAL ENERGY CHECK</Text>
            <View style={styles.liveDot} />
          </View>

          <View style={styles.hero}>
            <Text style={styles.edition}>ULTRA</Text>
            <Text style={styles.white}>WHITE</Text>
            <View style={styles.rule} />
            <Text style={styles.energy}>ENERGY / DAILY LOG</Text>

            <View style={styles.clawWrap}>
              <Text style={styles.claw}>M</Text>
              <Text style={styles.clawCaption}>MONSTER MODE</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>TODAY'S CHECK-IN</Text>
            <Text style={styles.question}>Did you drink{"\n"}Monster today?</Text>
            <Text style={styles.sub}>A little daily check from Yohan.</Text>

            <View style={styles.actions}>
              <Pressable
                accessibilityRole="button"
                onPress={() => choose("yes")}
                style={({ pressed }) => [styles.yesButton, pressed && styles.pressed]}
              >
                <Text style={styles.yesText}>YES, I DID</Text>
              </Pressable>
              <Pressable
                accessibilityRole="button"
                onPress={() => choose("no")}
                style={({ pressed }) => [styles.noButton, pressed && styles.pressed]}
              >
                <Text style={styles.noText}>NOT TODAY</Text>
              </Pressable>
            </View>

            {answer && (
              <View style={styles.response}>
                <Text style={styles.responseTitle}>
                  {answer === "yes" ? "CHECKED IN." : "NO WORRIES."}
                </Text>
                <Text style={styles.responseBody}>
                  {answer === "yes"
                    ? "Your daily Monster check is logged on this screen."
                    : "Take it easy. Your check-in is saved for this session."}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerName}>YOHAN</Text>
            <Text style={styles.footerMeta}>ULTRA WHITE // PERSONAL FAN CONCEPT</Text>
          </View>
          <Text style={styles.disclaimer}>
            Independent personal fan concept. Not affiliated with or endorsed by Monster Energy.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#050706" },
  safe: { flex: 1 },
  content: { flexGrow: 1, paddingHorizontal: 25, paddingTop: Platform.OS === "android" ? 22 : 12, paddingBottom: 28 },
  glowOne: { position: "absolute", width: 280, height: 280, borderRadius: 140, backgroundColor: "#b8d8c0", opacity: 0.055, top: 95, right: -130 },
  glowTwo: { position: "absolute", width: 230, height: 230, borderRadius: 115, backgroundColor: "#6d8f77", opacity: 0.07, bottom: 60, left: -130 },
  topRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  eyebrow: { color: "#829087", fontSize: 10, letterSpacing: 3, fontWeight: "700" },
  liveDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: "#d9eee0" },
  hero: { alignItems: "center", paddingTop: 43, paddingBottom: 28 },
  edition: { color: "#d8e2da", fontSize: 17, letterSpacing: 12, fontWeight: "300", marginLeft: 12 },
  white: { color: "#f3f5f2", fontSize: 59, lineHeight: 68, letterSpacing: 7, fontWeight: "900" },
  rule: { width: 72, height: 2, backgroundColor: "#b8c9bc", marginTop: 13, marginBottom: 10 },
  energy: { color: "#829087", fontSize: 9, letterSpacing: 4, fontWeight: "700" },
  clawWrap: { marginTop: 27, alignItems: "center" },
  claw: { color: "#e5ece6", fontSize: 83, lineHeight: 91, fontWeight: "900", letterSpacing: -8, textShadowColor: "#a8c3ad", textShadowRadius: 18 },
  clawCaption: { color: "#758278", fontSize: 8, letterSpacing: 4, marginTop: -3 },
  card: { borderWidth: 1, borderColor: "rgba(220,238,225,0.16)", backgroundColor: "rgba(15,22,17,0.88)", borderRadius: 20, padding: 22, marginTop: 8 },
  cardLabel: { color: "#a8b8ac", fontSize: 9, letterSpacing: 3, fontWeight: "800" },
  question: { color: "#f3f5f2", fontSize: 31, lineHeight: 37, fontWeight: "800", marginTop: 17, letterSpacing: -0.8 },
  sub: { color: "#8d9a90", fontSize: 12, marginTop: 10, letterSpacing: 0.2 },
  actions: { flexDirection: "row", gap: 10, marginTop: 25 },
  yesButton: { flex: 1, minHeight: 51, backgroundColor: "#e9f0ea", borderRadius: 10, alignItems: "center", justifyContent: "center" },
  yesText: { color: "#101711", fontSize: 11, letterSpacing: 1.8, fontWeight: "900" },
  noButton: { flex: 1, minHeight: 51, borderWidth: 1, borderColor: "rgba(230,241,232,0.35)", borderRadius: 10, alignItems: "center", justifyContent: "center" },
  noText: { color: "#dce5de", fontSize: 11, letterSpacing: 1.8, fontWeight: "800" },
  pressed: { opacity: 0.72, transform: [{ scale: 0.98 }] },
  response: { borderTopWidth: 1, borderTopColor: "rgba(220,238,225,0.13)", marginTop: 20, paddingTop: 16 },
  responseTitle: { color: "#e8f0e9", fontSize: 11, fontWeight: "900", letterSpacing: 2 },
  responseBody: { color: "#9eaaa1", fontSize: 12, lineHeight: 18, marginTop: 6 },
  footer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 28 },
  footerName: { color: "#e5ece6", fontSize: 12, fontWeight: "900", letterSpacing: 4 },
  footerMeta: { color: "#69756d", fontSize: 7, letterSpacing: 1.1 },
  disclaimer: { color: "#566159", fontSize: 8, lineHeight: 13, textAlign: "center", marginTop: 16, paddingHorizontal: 12 }
});
