import * as React from 'react';
import * as ReactCSSTransitionReplace from 'react-css-transition-replace';
import { connect } from 'react-redux';

import './App.css';
import { Plan, Survey } from './components';
import { AppView, IConnectedReduxProps, IQuestionAndAnswer, IQuestionnaireState } from './store';
import { getTransitionName } from './transitionNames';

interface IPropsFromState {
	currentView: AppView,
	answers: IQuestionAndAnswer[],
	transitionName: string,
}

class App extends React.Component<IConnectedReduxProps & IPropsFromState> {
	public render(): JSX.Element {
		return (
			<ReactCSSTransitionReplace
				transitionName={this.props.transitionName}
				transitionEnterTimeout={1000}
				transitionLeaveTimeout={400} >
				{this.renderViewSpecificContent()}
			</ReactCSSTransitionReplace>
		);
	}

	private renderViewSpecificContent(): JSX.Element {
		const { currentView } = this.props;

		switch (currentView) {
			case AppView.Questionnaire: {
				return (<Survey key="survey" {...this.props} />);
			}

			case AppView.Plan: {
				return (<Plan key="plan" answers={this.props.answers} />);
			}

			default: {
				throw new Error("Unrecognized AppView.");
			}
		}
	}
}

const mapStateToProps = (state: IQuestionnaireState) => ({
	currentView: state.currentView,
	answers: state.answers,
	transitionName: getTransitionName(state.mostRecentTransition),
})

export default connect(mapStateToProps)(App);