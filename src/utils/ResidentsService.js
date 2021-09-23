import APIClient from "./APIClient";

const ResidentsService = {
    
    forAccount: (accountId) =>
        APIClient.get('/residents/list/', {params: {'account_id':accountId}}),
    forCommunity: (rental_community_id) =>
        APIClient.get('/residents/list/', {params: {'community':rental_community_id}}),
    forRewardsCampaign: (rewards_campaign_sfid) =>
        APIClient.get('/residents/list/', {params: {'rewards_campaign_id':rewards_campaign_sfid}}),
    singleById: (resident_sfid) =>
        APIClient.get('/resident/', {params: {'sfid':resident_sfid}}),
    singleByPhone: (phone) =>
        APIClient.get('/resident/', {params: {'phone':phone}})
}

export default ResidentsService