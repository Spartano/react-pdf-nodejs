import { Document, Image, Page, StyleSheet, Text, View, Svg, Path, G } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    padding: "32px 24px 48px 24px",
  },
});

export const ImageDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 12, textAlign: "left", marginLeft: "16px" }}>Images</Text>

            <Image
              debug={true}
              style={{ width: 24, height: 24 }}
              source={{
                uri: "https://i.imgur.com/TrAnhbd.png",
                method: "GET",
              }}
            />

            <Image
              debug={true}
              style={{ width: 24, height: 24 }}
              source={"https://i.imgur.com/TrAnhbd.png"}
            />
            <Image
              debug={true}
              style={{ width: 24, height: 24 }}
              source={__dirname + "/images/facebook.png"}
            />
          </View>
        </View>
      </Page>
    </Document>
  );
};
