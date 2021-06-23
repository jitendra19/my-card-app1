import React from 'react';
import Card from './card';

interface AppProps {
    profiles: [any];
}
interface AppState {}

export default class CardList extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }
  // code
  render() {
    // const profiles
    return (
      <div>
        {this.props.profiles.map(profile => (
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
}
