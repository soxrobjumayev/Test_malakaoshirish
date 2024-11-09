
import {bannerSchema3} from '../../validator/user.validator.js'

export default (req, res, next) => {
    try {
            let { error } = bannerSchema3.validate(req.body)

            if (error) throw error
        return next()
    } catch (error) {
        res.status(400).json(
            {
                status: 400,
                message: error.message
            }
        )
    }

}


// message: error.message