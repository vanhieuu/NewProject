import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon} from "react-native-elements";
interface Props {
  icon: string;
  color: string;
  
}

const Account = ({icon, color}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: color}]}>
      <Icon style={styles.accIcon} name={icon} type='simple-line-icon' tvParallaxProperties={undefined}/>
    </TouchableOpacity>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 45,
    height: 45,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 99,
    justifyContent: "center",
    
  },
  accIcon: {
    color: 'white',
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
