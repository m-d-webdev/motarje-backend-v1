import * as ProfileServices from '../services/ProfileServices.js'


export const Get_profile_data = async (req, res) => {
    try {

        const { target, user } = req.body;
        if (!target) return res.status(400).json({
            ok: false,
            error: "no target userId founded on requeust !"
        });
        
             
        const TargetUser = await ProfileServices.Get_a_user_data({ id: target })
        
        return res.status(200).json({
            ok: true,
            data: {
                TargetUser
            },
        });
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message,
        });
    }
};
