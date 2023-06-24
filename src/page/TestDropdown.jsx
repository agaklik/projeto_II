import { 
    View, 
    StyleSheet,
    Text 
} from "react-native";

import React, { useState } from 'react';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';


const data = [
    { label: 'Quentão P' + '                     R$5,00', value: '1', key:'1' },
    { label: 'Quentão M' + '                     R$10,00', value: '2', key:'2' },
    { label: 'Quentão G' + '                     R$15,00', value: '3', key:'3' },
    { label: 'Pipoca P' + '                         R$3,00', value: '4', key:'4' },
    { label: 'Pipoca M' + '                         R$6,00', value: '5', key:'5' },
    { label: 'Pipoca G' + '                          R$9,00', value: '6', key:'6' },
    { label: 'Bolo' + '                                  R$4,00', value: '7', key:'7' },
    { label: 'Pé de moleque' + '                R$3,50', value: '8', key:'8' },
    { label: 'Cachorro quente' + '             R$6,50', value: '9', key:'9' },
   ];


export function TestDropdown () {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null

    }


      return (
        <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Selecione o item' : '...'}
            searchPlaceholder="Selecione o item..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
      marginTop: 150,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });