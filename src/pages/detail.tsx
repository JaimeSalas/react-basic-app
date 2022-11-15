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

export const DetailPage: React.FC = () => {
  const { id } = useParams(); 

  return (
      <>
        <h2>DETAIL PAGE</h2>
        <h3>User Id: {id}</h3>
        <Link to='/list'>Back to list page</Link>
      </>
  );
};