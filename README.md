# Features
- Get 20 most-liked posts for a location on Instagram
- Store fetched data in a json file 
- Data stored includes the following: media code, date, comments count, likes count
- No access token needed (Uses instagram public api, not the official one)

# Usage
1. npm install
2. Setup (view below)
3. node crawler.js // start crawling
4. node top20.js // list out top 20 most-liked posts
5. To view the post, open the url 'https://www.instagram.com/p/MEDIA_CODE'


# Setup
Edit crawler.js
1. Set the value of the variable 'location_id' to the Location ID
2. Set the value of the variable 'max_id' to the maximum id (the highest id to start fetching posts from, data with a high id will be fetched first)

## Dependencies
- node-json-db: ^0.7.3
- request: ^2.83.0

