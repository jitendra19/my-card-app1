import React from 'react';

interface AppProps {
    // profile: any;
}
interface AppState {}

export default class Card extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }
  render() {
    const profile: any = this.props;
    return (
      <div className="githubProfile">
        <img src={profile.avatar_url} />
        <div className="info">
          <h5 className="name">{profile.name}</h5>
          <div className="details">{profile.company}</div>
        </div>
      </div>
    );
  }
}

// export default ({ name }) => <h1>Hello {name}!</h1>;
