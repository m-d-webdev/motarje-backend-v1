import { connect } from 'mongoose'

export const MONGODB_CONNECT = async () => {
    try {
        const mongodb_url = process.env.MONGO_DATABASE_URL
        await connect(mongodb_url);
        console.log();
        console.log(" --- ✅  mongodb connected ");
        console.log();
    } catch (error) {
        console.log();
        console.log(" --- ❌ mongodb connection failed  ");
        console.log();
    }
}