export = {
    serverPort: process.env.SERVER_PORT || 3000,
    mongodb: {
        url: process.env.MONGO_URL || "mongodb://172.17.0.1:27017/test_db"
    },
}