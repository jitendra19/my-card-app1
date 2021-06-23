import React from 'react';

interface AppProps {
    // profile: any;
    login?: string;
            id?: number;
            node_id?: string;
            avatar_url?: string;
            gravatar_id?: string;            
            url?: string;
            html_url?: string;
            followers_url?: string;
            following_url?: string;
            gists_url?: string;
            starred_url?: string;
            subscriptions_url?: string;
            organizations_url?: string;
            repos_url?: string;
            events_url?: string;
            received_events_url?: string;
            type?: string;
            site_admin?: boolean;
            name?: string;
            company?: string;
            blog?: string;            
            location?: string;
            email?: string
            hireable?: boolean;
            bio?: boolean;
            twitter_username?: boolean;
            public_repos?: number,
            public_gists?: number,
            followers?: number,
            following?: number,
            created_at?: string;
            updated_at?: string;
}
interface AppState {}

export default class Card extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }
  render() {
    const profile = this.props;
    return (
      <div className="githubProfile">
        <img src={profile.avatar_url} />
        <div className="info">
            <div>
                <h5 className="title" style={{display:'inline'}}>{profile.name}</h5>
                <h6 className="details" style={{display:'inline'}}>{profile.company || '@NotAvailable'}</h6>
            </div>
            <div>
                <h5 className="title" style={{display:'inline'}}>Public Repos - </h5>
                <h6 className="details" style={{display:'inline'}}>{profile.public_repos}</h6>
                <h3 className="details" style={{display:'inline'}}> | </h3>
                <h5 className="title" style={{display:'inline'}}>Public Gists - </h5>
                <h6 className="details" style={{display:'inline'}}>{profile.public_gists}</h6>
            </div>
            <div>
                <h5 className="title" style={{display:'inline'}}>Github URL - </h5>
                <div className="details" style={{display:'inline'}}>{profile.html_url}</div>
            </div>
            <div>
                <h5 className="title" style={{display:'inline'}}>Email - </h5>
                <div className="details" style={{display:'inline'}}>{profile.email || 'NotAvailable'}</div>
            </div>
        </div>
      </div>
    );
  }
}

// export default ({ name }) => <h1>Hello {name}!</h1>;
