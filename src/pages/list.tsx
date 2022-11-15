import React from 'react';
import { Link, generatePath } from 'react-router-dom';

// API Model
interface MemberApi {
  id: number,
  login:string,
  avatar_url: string,
}

// View Model
interface MemberEntity {
  id: string;
  login: string;
  avatarUrl: string; 
}

const entityMap = (member: MemberApi): MemberEntity => {
  return {
    id: member.id.toString(),
    login: member.login,
    avatarUrl: member.avatar_url
  }
}; 

const entitiesMap = (members: MemberApi[]): MemberEntity[] => (
  // members.map(entityMap)
  // members.map((m) => entityMap(m))
  members.map((memberApi) => {
    return entityMap(memberApi)
  })
)

export const ListPage: React.FC = () => {
    const [members, setMembers] = React.useState<MemberEntity[]>([]);

    React.useEffect(() => {
      fetch(`https://api.github.com/orgs/roche/members`)
        .then((response) => {
          if (response.ok) {
            return response.json() // Api Entities
          }
        })
        .then((apiMembers) => {
          return entitiesMap(apiMembers); // VM Entities
        })
        .then((members) => {
          setMembers(members);
        });
    }, []);
    
    return (
        <>
          <h2>LIST PAGE</h2>
          {/* { members.map((m) => <span key={m.id}>{`${m.login} `}</span>) } */}
          <div className='user-list-container'>
            <span className='list-header'>Avatar</span>
            <span className='list-header'>Id</span>
            <span className='list-header'>Login</span>
            { members.map((m) => (
              <React.Fragment key={m.id}>
                <img src={m.avatarUrl} />
                <span>{m.id}</span>
                {/* <span>{m.login}</span> */}
                {/* <Link to={`/detail/${m.login}`}>{m.login}</Link> */}
                <Link to={generatePath('/detail/:id', {id: m.login})}>{m.login}</Link>
              </React.Fragment>
            ))}
          </div>
        </>
    );
};