import { MONGODB_CONNECT } from "../mongodb/SetUp.js";
import app from "./app.js"



// MONGODB_CONNECT();

app.listen(process.env.PORT ,'0.0.0.0', (error) => {

    if (error) {
        console.log();
        console.log(" --- ❌ server Failed ");
        console.log();
        return;
    }

    console.log();
    console.log(" --- ✅ server running on => ", process.env.PORT);
    console.log();
})
