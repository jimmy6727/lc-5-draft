import APIClient from "./APIClient";

const CommunitiesService = {
    
    forAccount: (accountId) =>
        APIClient.get('/rental_community/list/', {params: {'account_id':accountId}}),
    singleById: (rental_community_sfid) =>
        APIClient.get('/rental_community/', {params: {'sfid':rental_community_sfid}})
}

export default CommunitiesService