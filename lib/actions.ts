import {GraphQLClient} from 'graphql-request'
const isProdution = process.env.NODE_ENV === 'production'
const apiUrl =isProdution ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL|| '':'http://127.0.0.1:4000/graphql';
const apikey =isProdution ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : '1234'
const serverUrl = isProdution ? process.env.NEXT_PUBLIC_SERVER_URL  : 'http://localhost:3000'
const client = new GraphQLClient(apiUrl);
const makeGraphQLRequest=async (query:string, variebles={}) => {
    try {
        return await client.request(query,variebles)
    } catch (error) {
        throw error;
    }
}

export const getuser =(email:string )=>{
    
}