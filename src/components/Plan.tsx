import * as React from 'react';
import { connect} from 'react-redux';
import { PlanStep } from './PlanStep';
import { StartOverButton } from './StartOverButton';
import { ALL_QUESTION_IDS, IConnectedReduxProps, IQuestionAndAnswer, QuestionId } from '../store';

interface IPlanProps {
	answers: IQuestionAndAnswer[],
}

class InternalPlan extends React.Component<IPlanProps & IConnectedReduxProps, any> {
	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>This is your voting plan.</p>
				</header>

				<StartOverButton {...this.props} />

				<div>
					{ALL_QUESTION_IDS.map(
						(questionId: QuestionId) => {
							const answer = this.props.answers.find(qa => qa.questionId === questionId);

							if (answer !== undefined) {
								return <PlanStep questionId={questionId} answerId={answer!.answerId} />
							}
							else {
								return <div key={questionId} />
							}
						}
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = () => ({
});

export const Plan = connect(mapStateToProps)(InternalPlan);