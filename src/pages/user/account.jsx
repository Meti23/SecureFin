import React from 'react';
import './account.css';
import ProfileCard from '../../components/profileCard';
import ManagementCard from '../../components/ManagementCard';
import DangerZone from '../../components/dangerZone';

export default function Account(){
  return (
    <div  className="account">
      <div className="container">
      <div className="columnA">
        <ProfileCard />
      </div>
      <div className="columnB">
        <ManagementCard />
        <DangerZone />
      </div>
    </div>
    </div>
  );
}