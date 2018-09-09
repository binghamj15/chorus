import * as React from 'react';
import './App.css';
import { IAnswerProps } from './components/answer';
import { DotNavigationBar } from './components/DotNavigationBar';
import { Question } from './components/question';

export interface IQuestionHostState {
  selectedKey?: string;
}

class App extends React.Component<any, IQuestionHostState> {
  constructor(props: any, context?: any) {
    super(props, context);
    this.state = {
      selectedKey: 'nothing'
    };
  }

  public render() {
    const options = [
      {
        key: 'Yes',
        label: 'Heck yeah!',
      } as IAnswerProps,
      {
        key: 'No',
        label: 'Uh...nope.'
      },
      {
        key: 'DontKnow',
        label: 'I dunno...'
      }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <DotNavigationBar currentStep={4} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Selected: {this.state.selectedKey ? this.state.selectedKey : 'nothing'}
        </p>
        <Question label="First things first. Are you registered to vote?" options={options} onChange={this._onChange} />
      </div>
    );
  }

  private _onChange = (ev: any, option: IAnswerProps): void => {
    this.setState({ selectedKey: option.key });
  }
}

export default App;
