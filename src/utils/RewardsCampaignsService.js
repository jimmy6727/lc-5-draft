import APIClient from "./APIClient";

const RewardsCampaignsService = {
    
    forAccount: (accountId) =>
        APIClient.get('/rewards_campaign/list/', {params: {'account_id':accountId}}),
    forCommunity: (rental_community_id) =>
        APIClient.get('/rewards_campaign/list/', {params: {'rental_community_id':rental_community_id}}),
    singleById: (rewards_campaign_sfid) =>
        APIClient.get('/rewards_campaign/', {params: {'sfid':rewards_campaign_sfid}})
}

export default RewardsCampaignsService