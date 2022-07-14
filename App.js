import React, { Component } from 'react';
import { View } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import moment from 'moment';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

class Calendars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: moment().format('YYYY-MM-DD')
        }
    }

    onSwipeMonths(months) {
        let { month, year, day } = months[0] ;
        let currentDate = moment(`${year}/${month}/${day}`).format('YYYY-MM-DD');
        this.setState({ currentDate });
    }

    render() {
        return (
            <View style={{height: 420}}>
                <CalendarList
                    current={this.state.currentDate}
                    firstDay={0}
                    horizontal={true}
                    hideArrows={false}
                    pagingEnabled={true}
                    calendarWidth={windowWidth}
                    calendarHeight={420}
                    onVisibleMonthsChange={months => this.onSwipeMonths(months)}
                />
            </View>
        );
    }
}

export default Calendars;
