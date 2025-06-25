const { verfiyToken } = require('../utils/tokenService.js')

function chekForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const ifCookie = req.cookies[cookieName]
        if (!ifCookie) {
             res.locals.user = null;
            return next();
        }
        try {
            const payload = verfiyToken(ifCookie)
            req.user = payload
             res.locals.user = payload ;
        } catch (error) {
             res.locals.user = null;
        }
        return next()

    }
}

module.exports = {chekForAuthenticationCookie}