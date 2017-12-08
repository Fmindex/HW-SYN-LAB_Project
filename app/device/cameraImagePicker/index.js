import { Button, Image, View } from 'react-native';
import { CameraRoll, ImagePicker } from 'expo';

import React from 'react';
import axios from 'axios';

export default class ImagePickerExample extends React.Component {
  static navigationOptions = ({ screenProps }) => ({
     title: 'Camera',
     headerRight: <Button title="Edit" onPress={()=>{}}/>,
   
   });
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Take Photo from camera roll"
          onPress={this._pickImage}
        />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      </View>
    );
  }

  _postData (url, fileURL) {
    let data = new FormData();
    if (fileURL) {
      data.append('image', {uri: fileURL, name: 'image.jpg', type: 'image/jpg'})
    }
    // _.each(params, (value, key) => {
    //   if (value instanceof Date) {
    //     data.append(key, value.toISOString())
    //   } else {
    //     data.append(key, String(value))
    //   }
    // })
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'application/octet-stream',
        'Content-Type': 'multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d',
        // 'Content-Language': React.NativeModules.RNI18n.locale,
        'Authorization': 'Basic cGVhaGl2ZToyOFNlcDE5NjA=',
      },
      body: data,
    };
    return fetch(url, config)
      .then(response => { console.log(response); return response.json();})
      .then(responseData => {console.log(responseData); return responseData;})
      .catch(err => {
        console.log("fetch error" + err);
      });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({});
    // let result = CameraRoll.saveToCameraRoll((await Expo.ImagePicker.launchCameraAsync({})).uri);
    
    this.setState({ image: result.uri });

    // let config = {
    //   headers: {
    //     'Authorization': 'Basic cGVhaGl2ZToyOFNlcDE5NjA=',
    //     "Content-Type": "application/octet-stream",
    //   }
    // };
    let body = result.uri;

    // axios.post('http://192.168.1.17:8000/api/custom_vision/', body, config).then((data) => {
    //   console.log('post');
    //   console.log(body.message);
    // }, (error) => {
    //   console.log('post error'+error);
    // });

    this._postData('http://192.168.1.17:8000/api/custom_vision/', result.uri)

  };
}

  // _pickImage = async () => {
  //   CameraRoll.saveToCameraRoll((await Expo.ImagePicker.launchCameraAsync({})).uri);
  //   // let result = await ImagePicker.launchImageLibraryAsync({
  //   //   allowsEditing: true,
  //   //   aspect: [4, 3],
  //   });