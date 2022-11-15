import React from 'react';
import { Link, useParams } from 'react-router-dom';

/*
https://api.github.com/users/<login>
id,
login,
name
company,
bio
*/

/*
echo "# react-basic-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:JaimeSalas/react-basic-app.git
git push -u origin main
*/

interface DetailApi {
  id: number;
  login: string;
  name: string;
  company: string;
  bio: string;
}

interface DetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

const mapDetailEntity = (detail: DetailApi): DetailEntity => ({
  ...detail,
  id: detail.id.toString()
});

const initDetail = (): DetailEntity => ({
  id: '',
  bio: '',
  company: '',
  login: '',
  name: '',
}); 

export const DetailPage: React.FC = () => {
  const { id } = useParams(); 
  const [detail, setDetail] = React.useState<DetailEntity>(initDetail);

  React.useEffect(() => {
    
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(mapDetailEntity)
      .then(setDetail)
      .catch(console.error);

  }, []);

  return (
      <>
        <h2>DETAIL PAGE</h2>
        <p>id: {detail.id}</p>
        <p>login: {detail.login}</p>
        <p>name: {detail.name}</p>
        <p>company: {detail.company}</p>
        <p>bio: {detail.bio}</p>
        <Link to='/list'>Back to list page</Link>
      </>
  );
};