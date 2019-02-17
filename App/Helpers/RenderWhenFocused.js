import React, {Component} from 'react';
import {withNavigationFocus} from 'react-navigation';
import hoistNonReactStatics from 'hoist-non-react-statics';

export default Comp => {
	const Hoc = class extends Component {
		shouldComponentUpdate(nextProps) {
			return nextProps.isFocused;
		}
		render() {
			return <Comp {...this.props} />;
		}
	};
	return hoistNonReactStatics(withNavigationFocus(Hoc), Comp);
};