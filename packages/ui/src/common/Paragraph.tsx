import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

export interface ParagraphProps extends TextProps {
  children?: React.ReactNode;
}

const Paragraph = ({ children, style, ...props }: ParagraphProps) => (
  <Text {...props} style={[styles.paragraph, style]}>
    {children}
  </Text>
);

export default Paragraph;

const styles = StyleSheet.create({
  paragraph: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: 20,
    marginVertical: 2,
  },
});
