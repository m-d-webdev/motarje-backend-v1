import jwt from 'jsonwebtoken'


const CheckAccess = async (req, res, next) => {
    try {
        const accessToken = req.headers['authorization']?.split(" ")[1];

        if (!accessToken) return res.status(401).json({
            ok: false,
            reason: "Can't find acccess token on the request "
        });

        jwt.verify(accessToken, process.env.JWT_SECRET,
            (error, decoded) => {

                if (error) return res.status(401).json({
                    ok: false,
                    reason: "invalid token "
                });

                req.user = {
                    id: decoded.id,
                    email: decoded.email
                }

                return next()
            }
        );

    } catch (error) {
        return res.status(401).json({
            ok: false,
            reason: "no access"
        })
    }
};


export default CheckAccess;