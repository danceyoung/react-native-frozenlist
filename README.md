# React Native FrozenList

A List that just be composited by more ScrollView supports freezing columns, horizontal or vertical scrolling together.


## Example running in iOS (captured by GIPHY CAPTURE)

![enter image description here](https://github.com/danceyoung/react-native-frozenlist/blob/master/screenCapture/screencapture.gif?raw=true)

## View Hierarchy
![enter image description here](https://github.com/danceyoung/react-native-frozenlist/blob/master/screenCapture/viewhierarchy.png?raw=true)

## Running demo env

 - "react": "16.0.0",
 - "react-native": "0.51.0"

## Why using ScrollView
The `FlatList` or `SectionList` does not support the method `scrollTo`, so it does not work well for two List horizotal or vertical scrolling together through pure React-Native code. But `ScrollView` simply renders all child components at a once, so the `FrozenList` does not support render items lazily and has a performance downside.

## Why iOS only
Because `ScrollView` on Andorid supports vertical scrolling only.

## Features

 - ListHeader
 - SectionHeader
 - RenderItem
 - vertical scrolling together
 - horizontal scrolling together

## Installation

cd your project root direction

    $ npm install react-native-frozenlist --save

## Usage

code example
[App.js](https://github.com/danceyoung/react-native-frozenlist/blob/master/App.js)
