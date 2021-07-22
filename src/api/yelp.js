import axios from "axios";

export default axios.create({
    baseURL: `https://api.yelp.com/v3/businesses`,
    headers: {
        Authorization: 'Bearer 5-fDbw4JAx1dwzhkj4O_omcFOPqVoifEP6kQksyKpnDmsOGhur8zTFOXRHOzG3iys0qBBkK6PxAuSbxLFqRM9EH87PQWhgJ2LOZX67sjV__NEMsFWPfqkWKIZc35YHYx'
    }
})
