/*
 * @Author: Young
 * DSHARP
 * @flow 
 * @Date: 2018-04-04 10:56:07 
 * @Last Modified by: Young
 * @Last Modified time: 2018-04-09 16:19:11
 */
import React, { Component } from 'react'
import {
  ScrollView,
  View,
  TouchableHighlight,
} from 'react-native'

import PropTypes from 'prop-types'

export default class FrozenList extends Component {

  static propTypes = {
    leftList: PropTypes.shape({
      listHeader: PropTypes.func,
      sectionHeader: PropTypes.func,
      renderItem: PropTypes.func.isRequired,
      sections: PropTypes.array.isRequired,
    }).isRequired,
    rightList: PropTypes.shape({
      listHeader: PropTypes.func,
      sectionHeader: PropTypes.func,
      renderItem: PropTypes.func.isRequired,
      sections: PropTypes.array.isRequired,
      contentContainerWidth: PropTypes.number.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    leftList: {
      listHeader: () => { return <View /> },
      sectionHeader: () => { return <View /> },
    },
    rightList: {
      listHeader: () => { return <View /> },
      sectionHeader: () => { return <View /> },
    }
  }

  constructor(props) {
    super(props)

    this.rightScrollViewOffsetX = 0
    this.rightScrollViewOffsetY = 0
    this.frozenScrollViewBeginDragging = false
    this.rightHeaderScrollViewBeginDragging = false

    this.state = {
      leftScrollView: null,
      rightScrollView: null,
      rightHeaderScrollView: null,

      leftStickyHeaderIndices: [],
      rightStickyHeaderIndices: [],

      leftSections: [],
      rightSections: []
    }
  }

  componentDidMount() {

    this.setState({ leftSections: this.props.leftList.sections })
    this.setState({ rightSections: this.props.rightList.sections })

    this.setState({ leftStickyHeaderIndices: this._createStickyHeaderIndices(this.props.leftList.sections) })
    this.setState({ rightStickyHeaderIndices: this._createStickyHeaderIndices(this.props.rightList.sections) })

  }

  _createStickyHeaderIndices(sections) {
    var indices = []
    for (idx = 0; idx < sections.length; idx++) {
      idx === 0 ? indices.push(idx) : indices.push(indices[idx - 1] + sections[idx - 1].data.length + 1)
    }
    return indices

  }

  render() {

    return (
      <View
        key={'favView'}
        style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
        <View>
          {this.props.leftList.listHeader()}
          <ScrollView
            scrollEventThrottle={16}
            key={'leftscrollview'}
            ref={(ref) => this.state.leftScrollView = ref}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={this.state.leftStickyHeaderIndices}
            onScrollBeginDrag={() => this.frozenScrollViewBeginDragging = true}
            onScroll={(event) => {
              if (this.frozenScrollViewBeginDragging) {
                this.state.rightScrollView.scrollTo({ x: this.rightScrollViewOffsetX, y: event.nativeEvent.contentOffset.y, animated: false });
              }
            }}
          >
            {this.state.leftSections.map((section, sectionIndex) => {
              var header = <TouchableHighlight key={sectionIndex}>
                {this.props.leftList.sectionHeader(section, sectionIndex)}
              </TouchableHighlight>
              var items = section.data.map((item, itemIndex) =>
                this.props.leftList.renderItem(section, sectionIndex, item, itemIndex)
              )
              // console.log("tempcomponents " + JSON.stringify([header, items]))
              return [header, items]
            }
            )}
          </ScrollView>
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <ScrollView
              horizontal={true}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ref={(ref) => this.state.rightHeaderScrollView = ref}
              onScrollBeginDrag={() => this.rightHeaderScrollViewBeginDragging = true}
              onScroll={(event) => {
                if (this.rightHeaderScrollViewBeginDragging) {
                  this.state.rightScrollView.scrollTo({ x: event.nativeEvent.contentOffset.x, y: this.rightScrollViewOffsetY, animated: false });
                }
              }}
            >
              {
                this.props.rightList.listHeader()
              }
            </ScrollView>
          </View>

          <ScrollView
            directionalLockEnabled={true}
            scrollEventThrottle={16}
            key={'rightscrollview'}
            ref={(ref) => this.state.rightScrollView = ref}
            showsHorizontalScrollIndicator={false}
            stickyHeaderIndices={this.state.rightStickyHeaderIndices}
            onScrollBeginDrag={() => {
              this.frozenScrollViewBeginDragging = false
              this.rightHeaderScrollViewBeginDragging = false
            }}
            onScroll={(event) => {
              if (!this.frozenScrollViewBeginDragging) {
                this.state.leftScrollView.scrollTo({ x: 0, y: event.nativeEvent.contentOffset.y, animated: false });
              }
              if (!this.rightHeaderScrollViewBeginDragging) {
                this.state.rightHeaderScrollView.scrollTo({ x: event.nativeEvent.contentOffset.x, y: 0, animated: false })
              }
              this.rightScrollViewOffsetX = event.nativeEvent.contentOffset.x
              this.rightScrollViewOffsetY = event.nativeEvent.contentOffset.y
            }}
            contentContainerStyle={{ width: this.props.rightList.contentContainerWidth }}>
            {
              this.state.rightSections.map((section, sectionIndex) => {
                var header = <TouchableHighlight key={sectionIndex}>
                  {this.props.rightList.sectionHeader(section, sectionIndex)}
                </TouchableHighlight>
                var items = section.data.map((item, itemIndex) =>
                  this.props.rightList.renderItem(section, sectionIndex, item, itemIndex)
                )
                return [header, items]
              }
              )
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}