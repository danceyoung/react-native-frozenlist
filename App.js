/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-04-04 10:59:34 
 * @Last Modified by: Young
 * @Last Modified time: 2018-04-10 17:15:26
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Alert,
  RefreshControl,
  Dimensions
} from 'react-native';
import { FrozenList } from './index.js'

const SCREEN_WIDTH = Dimensions.get('window').width;
const bgColor = '#0D1014'
const textColor = '#D3D3D3'
const iosBlueColor = '#007AFF'

export default class App extends Component {
  constructor(args) {
    super(args)
    this.state = {
      rowHeight: 40,
      rightHeader: ['RATE', 'PRICE', 'SOFTWARE', 'WEIGHT', 'STORAGE', 'MEMORY', 'GRAPH', 'BATTERY', 'PROCESS', 'DISPLAY'],
      devices: {
        surfacePro: [
          {
            name: 'Surface Pro',
            code: '101',
            coreModel: 'Intel m3',
            rate: '60 stars',
            price: '$1,049.00',
            software: 'Win10 Pro',
            weight: '768g',
            storage: '128G',
            memory: '4G',
            graphics: 'IntelHD615',
            battery: '+13.5H',
            processor: 'core m3',
            display: '267PPI',
          },
          {
            name: 'Surface Pro',
            code: '102',
            coreModel: 'Intel i5',
            rate: '60 stars',
            price: '$1,299.00',
            software: 'Win10 Pro',
            weight: '770g',
            storage: '128G',
            memory: '4G',
            graphics: 'IntelHD615',
            battery: '+13.5H',
            processor: 'core i5',
            display: '267PPI',
          },
          {
            name: 'Surface Pro',
            code: '103',
            coreModel: 'Intel i5',
            rate: '60 stars',
            price: '$1,649.00',
            software: 'Win10 Pro',
            weight: '770g',
            storage: '256G',
            memory: '8G',
            graphics: 'IntelHD615',
            battery: '+13.5H',
            processor: 'core i5',
            display: '267PPI',
          },
          {
            name: 'Surface Pro',
            code: '104',
            coreModel: 'Intel i7',
            rate: '60 stars',
            price: '$1,999.00',
            software: 'Win10 Pro',
            weight: '784g',
            storage: '256G',
            memory: '8G',
            graphics: 'IntelHD615',
            battery: '+13.5H',
            processor: 'core i7',
            display: '267PPI',
          },
          {
            name: 'Surface Pro',
            code: '105',
            coreModel: 'Intel i7',
            rate: '60 stars',
            price: '$2,799.00',
            software: 'Win10 Pro',
            weight: '784g',
            storage: '512G',
            memory: '8G',
            graphics: 'IntelHD615',
            battery: '+13.5H',
            processor: 'core i7',
            display: '267PPI',
          },
        ],
        surfaceStudio: [
          {
            name: 'Surface Studio',
            code: '106',
            coreModel: 'Intel i5',
            rate: '32 stars',
            price: '$3,999.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '8G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i5',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '107',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$4,599.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '16G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '108',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$5,549.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '32G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
          },
          {
            name: 'Surface Studio',
            code: '109',
            coreModel: 'Intel i5',
            rate: '32 stars',
            price: '$3,999.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '8G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i5',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '110',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$4,599.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '16G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '111',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$5,549.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '32G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
          },
          {
            name: 'Surface Studio',
            code: '112',
            coreModel: 'Intel i5',
            rate: '32 stars',
            price: '$3,999.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '8G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i5',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '113',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$4,599.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '16G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '114',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$5,549.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '32G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
          },
          {
            name: 'Surface Studio',
            code: '115',
            coreModel: 'Intel i5',
            rate: '32 stars',
            price: '$3,999.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '8G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i5',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '116',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$4,599.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '16G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
            display: '192DPI',
          },
          {
            name: 'Surface Studio',
            code: '117',
            coreModel: 'Intel i7',
            rate: '32 stars',
            price: '$5,549.00',
            software: 'Win10 Pro',
            weight: '9.5KG',
            storage: '1T',
            memory: '32G',
            graphics: 'NVIDIA',
            battery: '+13.5H',
            processor: 'core i7',
          },
        ]
      }
    }
  }

  _favLeftView(device, idx) {
    return (
      <TouchableHighlight
        key={device.code}>
        <View
          style={{ height: 40, marginLeft: 10, marginRight: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text
            style={{ fontSize: 15, fontWeight: 'bold', color: 'gray' }}>
            {device.name}
          </Text>
          <Text
            style={{ color: 'gray', fontSize: 10, top: 2 }}>
            {device.coreModel}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _favRightView(device, idx) {
    // Alert.alert("fav right view "+ JSON.stringify(favItem))
    return (
      <TouchableHighlight
        key={device.code}>
        <View
          style={{ flexDirection: 'row', height: this.state.rowHeight, alignItems: 'flex-start', }}>
          <Text style={styles.text}>{device.rate}</Text>
          <Text style={styles.text}>{device.price}</Text>
          <Text style={styles.text}>{device.software}</Text>
          <Text style={styles.text}>{device.weight}</Text>
          <Text style={styles.text}>{device.storage}</Text>
          <Text style={styles.text}>{device.memory}</Text>
          <Text style={styles.text}>{device.graphics}</Text>
          <Text style={styles.text}>{device.battery}</Text>
          <Text style={styles.text}>{device.processor}</Text>
          <Text style={styles.text}>{device.display}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  _favHeader() {
    return (
      this.state.rightHeader.map((title) =>
        <Text
          key={title}
          style={[styles.headerText, { width: 100, marginLeft:0 }]}>
          {title}
        </Text>
      )
    )
  }

  render() {
    return (
      <View style={{ marginTop: 64, flex: 1, }}>
        <FrozenList
          leftList={{
            listHeader: () => {
              return <View key={'leftscrollviewheader'}
                style={{ justifyContent: 'center', height: 40 }}>
                <Text style={styles.headerText}>DEVICE</Text>
              </View>
            },
            sectionHeader: (section, sectionIndex) => {
              if (sectionIndex === 0) {
                return (
                  <View style={styles.sectionView}>
                    <Text style={{ marginLeft: 10, fontSize: 20 }}>
                      Surface Pro
                  </Text>
                  </View>
                )
              } else if (sectionIndex === 1) {
                return (
                  <View style={styles.sectionView}>
                    <Text style={{ marginLeft: 10, fontSize: 20 }}>
                      Surface Studio
                    </Text>
                  </View>
                )
              }
            },
            renderItem: (section, sectionIndex, item, itemIndex) => {
              if (sectionIndex === 0) {
                return this._favLeftView(item, '$sectionIndex_$itemIndex')
              } else if (sectionIndex === 1) {
                return this._favLeftView(item, '$sectionIndex_$itemIndex')
              }
            },
            sections: [
              { data: this.state.devices.surfacePro },
              { data: this.state.devices.surfaceStudio }
            ]
          }}
          rightList={{
            listHeader: () => {
              return <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, }}>
                {this._favHeader()}
              </View>
            },
            sectionHeader: (section, sectionIndex) => {
              return (
                <View style={styles.sectionView}>
                </View>
              )
            },
            renderItem: (section, sectionIndex, item, itemIndex) => {
              // console.log("renderLeftItem " + section.data.length + "-" + sectionIndex + "-" + item.favCode + "-" + itemIndex)
              if (sectionIndex === 0) {
                return this._favRightView(item, '$sectionIndex_$itemIndex')
              } else if (sectionIndex === 1) {
                return this._favRightView(item, '$sectionIndex_$itemIndex')
              }
            },
            sections: [
              { data: this.state.devices.surfacePro },
              { data: this.state.devices.surfaceStudio }
            ],
            contentContainerWidth: 1000
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    text: {
      fontSize: 15,
      width: 100,
      color:'gray'
    },
    headerText: {
      marginLeft: 10,
      fontSize: 18,
      fontWeight: 'bold',
      
    },
    sectionView: {
      height: 30,
      justifyContent: 'center',
      backgroundColor:'#F8F9F8'
    }
  }
)