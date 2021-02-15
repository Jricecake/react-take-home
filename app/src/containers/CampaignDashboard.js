import React, { useState, useEffect } from 'react';
import Campaign from '../components/Campaign';
const API = 'https://www.plugco.in/public/take_home_sample_feed';

function CampaignDashboard(props) {
  const [campaigns, setCampaigns] = useState({ isLoading: false });
  async function fetchCampaignsAPI() {
    try {
      setCampaigns({ isLoading: true });
      fetch(API)
        .then((response) => response.json())
        .then((result) => setCampaigns({ isLoading: false, ...result }));
    } catch (e) {
      setCampaigns({ isLoading: false });
      console.log(e);
    }
  }
  useEffect(() => {
    fetchCampaignsAPI();
  }, []);

  return (
    <div>
      {campaigns.campaigns ? (
        campaigns.campaigns.map((campaign) => <Campaign key={campaign.id} campaign={campaign} />)
      ) : (
        <h1>No current campaigns!</h1>
      )}
    </div>
  );
}

export default CampaignDashboard;
