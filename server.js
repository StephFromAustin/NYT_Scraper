// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database 
let MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);
