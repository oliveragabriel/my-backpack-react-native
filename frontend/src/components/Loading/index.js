import React from "react";
import { View, Text } from "react-native";

export const Loading = () => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, textAlign: "center", color: "#ffffff"}}>
                Loading...
            </Text>
        </View>
    );
};