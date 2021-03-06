import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import Widget from './Widget';
import BackButton from './styles/BackButton';
import StyledText from './styles/StyledText';
import Header from './styles/Header';
import paragraphs from '../static/paragraphs';
import RNTaboolaView from '@taboola/rnt-dev';
import WidgetDark from "./WidgetDark";
//import { useDarkMode } from 'react-native-dark-mode'

const ArticleWithWidgetDark = props => {
	//const isDarkMode = useDarkMode();
	return (
		// <View style={{ backgroundColor: isDarkMode ? 'black' : 'white' }} >
		<View >
			<BackButton onPress={e => props.back()} title="Back" />

				<Header>Here's a Taboola Widget Dark</Header>
				{/*<StyledText>{paragraphs[0]}</StyledText>*/}
				<StyledText>{paragraphs[1]}</StyledText>
				{/*<StyledText>{paragraphs[2]}</StyledText>*/}
				<ScrollView><WidgetDark />
			</ScrollView>
			<StyledText>{paragraphs[0]}</StyledText>
		</View>
	);
};

ArticleWithWidgetDark.propTypes = { back: PropTypes.func.isRequired };

export default ArticleWithWidgetDark;
