/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-04-04 10:59:34 
 * @Last Modified by: Young
 * @Last Modified time: 2018-04-04 15:48:08
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
import FrozenList from './libraries/FrozenList'

const SCREEN_WIDTH = Dimensions.get('window').width;
const bgColor = '#0D1014'
const textColor = '#D3D3D3'
const iosBlueColor = '#007AFF'

export default class App extends Component {
  constructor(args) {
    super(args);
    this.state = {
      rowHeight: 40,
      columnWidth: 80,
      allColumnWidth: 80 * 13,
      rightHeader: ['价格', '涨幅', '涨跌', '总手', '换手', '量比', '昨收', '开盘', '最高', '最低', '振幅', '市盈率', '市现率'],
      favoriteItems: {
        exponents: [
          {
            favName: '上证指数',
            favCode: '1001001',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '创业指板',
            favCode: '20012521',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          }
        ],
        stocks: [
          {
            favName: '格力空调',
            favCode: '12511',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '11450004',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '格力空调',
            favCode: '30090125',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '4008251',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '格力空调',
            favCode: '1402911',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '1140084',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '格力空调',
            favCode: '3010165',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '4001261',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '格力空调',
            favCode: '10222011',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '1120004',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '格力空调',
            favCode: '3000125',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '4000251',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '格力空调',
            favCode: '1002911',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '1120084',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: '格力空调',
            favCode: '3000165',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
          {
            favName: 'NETQIN',
            favCode: '4000261',
            price: '396',
            rise: '+1.38',
            risefall: '47',
            allTrend: '123',
            switchTrend: '348',
            qatRate: '10.3',
            priorClose: '298',
            nowOpen: '300',
            maximum: '396',
            minimum: '311',
            vib: '19.1',
            peRatio: '21',
            pcfRatio: '36',
          },
        ],
      },
    }
  }

  _favLeftView(favItem, idx) {
    return (
      <TouchableHighlight
        key={favItem.favCode}>
        <View
          style={{ height: 40, marginLeft: 10, marginRight: 20, justifyContent: 'center', alignItems: 'flex-start' }}>
          <Text
            style={{ color: textColor, fontSize: 15 }}>
            {favItem.favName}
          </Text>
          <Text
            style={{ color: 'gray', fontSize: 10, top: 2 }}>
            {favItem.favCode}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _favRightView(favItem, idx) {
    // Alert.alert("fav right view "+ JSON.stringify(favItem))
    return (
      <TouchableHighlight
        key={favItem.favCode}>
        <View
          style={{ flexDirection: 'row', height: this.state.rowHeight, alignItems: 'flex-start', top: 5 }}>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.price}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.rise}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.risefall}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.allTrend}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.switchTrend}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.qatRate}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.priorClose}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.nowOpen}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.maximum}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.minimum}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.vib}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.peRatio}
          </Text>
          <Text
            style={{ color: textColor, fontSize: 15, width: this.state.columnWidth }}>
            {favItem.pcfRatio}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }

  _favHeader() {
    return (
      this.state.rightHeader.map((title) =>
        <Text
          key={title}
          style={{ color: 'gray', fontSize: 15, width: this.state.columnWidth }}>
          {title}
        </Text>
      )
    )
  }

  render() {
    return (
      <View style={{marginTop:64, flex:1, backgroundColor: '#0D1014' }}>
        <FrozenList
          leftList={{
            listHeader: () => {
              return <View key={'leftscrollviewheader'}
                style={{ width: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor, height: 40 }}>
                <Text style={{ fontSize: 15, color: 'gray', }}>自选</Text>
              </View>
            },
            sectionHeader: (section, sectionIndex) => {
              if (sectionIndex === 0) {
                return (<View style={{ backgroundColor: bgColor, height: 25, justifyContent: 'center' }}>
                  <Text style={{ marginLeft: 10, color: iosBlueColor, fontSize: 15 }}>
                    指数
                </Text>
                </View>)
              } else if (sectionIndex === 1) {
                return (<View style={{ backgroundColor: bgColor, height: 25, justifyContent: 'center' }}>
                  <Text style={{ marginLeft: 10, color: iosBlueColor, fontSize: 15 }}>
                    股票
                </Text>
                </View>
                )
              }
            },
            renderItem: (section, sectionIndex, item, itemIndex) => {
              // console.log("renderLeftItem " + section.data.length + "-" + sectionIndex + "-" + item.favCode + "-" + itemIndex)
              if (sectionIndex === 0) {
                return this._favLeftView(item, '$sectionIndex_$itemIndex')
              } else if (sectionIndex === 1) {
                return this._favLeftView(item, '$sectionIndex_$itemIndex')
              }
            },
            sections: [
              { data: this.state.favoriteItems.exponents },
              { data: this.state.favoriteItems.stocks }
            ]
          }}
          rightList={{
            listHeader: () => {
              return <View style={{ flexDirection: 'row', alignItems: 'center', height: 43, backgroundColor: bgColor }}>
                {this._favHeader()}
              </View>
            },
            sectionHeader: (section, sectionIndex) => {
              return (<View style={{ backgroundColor: bgColor, height: 25, justifyContent: 'center' }}>
              </View>)
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
              { data: this.state.favoriteItems.exponents },
              { data: this.state.favoriteItems.stocks }
            ]
          }}
        />
      </View>
    );
  }
}
