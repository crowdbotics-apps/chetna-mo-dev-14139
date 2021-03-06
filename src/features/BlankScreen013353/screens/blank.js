import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    CheckBox_3: true,
    DateTimePicker_11: new Date(""),
    CheckBox_30: true,
    Switch_36: true
  }

  render = () => (
    <View>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <DateTimePicker
        date={this.state.DateTimePicker_11}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_11: selectedDate })
        }
      />
      <Slider value={50} minimumValue={0} maximumValue={100} />
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_30}
        onPress={nextChecked => this.setState({ CheckBox_30: nextChecked })}
      />
      <Icon name="star" />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        value={this.state.Switch_36}
        onValueChange={nextChecked => this.setState({ Switch_36: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  CheckBox_3: {},
  View_1: {},
  CheckBox_3: {},
  Text_5: {},
  View_1: {},
  CheckBox_3: {},
  Text_5: {},
  TextInput_7: {},
  Button_9: {},
  DateTimePicker_11: {},
  TextInput_13: {},
  TextInput_15: {},
  Slider_27: {},
  CheckBox_30: {},
  Icon_33: {},
  View_1: {},
  CheckBox_3: {},
  Text_5: {},
  TextInput_7: {},
  Button_9: {},
  DateTimePicker_11: {},
  TextInput_13: {},
  TextInput_15: {},
  Slider_27: {},
  CheckBox_30: {},
  Icon_33: {},
  Switch_36: {},
  View_1: {},
  CheckBox_3: {},
  Text_5: {},
  Button_9: {},
  DateTimePicker_11: {},
  Slider_27: {},
  CheckBox_30: {},
  Icon_33: {},
  Switch_36: {},
  View_1: {},
  CheckBox_3: {},
  DateTimePicker_11: {},
  Slider_27: {},
  CheckBox_30: {},
  Icon_33: {},
  Switch_36: {}
})
