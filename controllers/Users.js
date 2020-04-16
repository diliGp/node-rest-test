const bcrypt = require('bcrypt')

const usersList = []

class Users {
    /**
     * Get all users list.
     */
    get = (req, res) => {
        res.json(usersList);
    }

    /**
     * Create new user.
     */
    create = async (req, res, next) => {
        console.log('here', req.body)
        try {
            const password = await bcrypt.hash(req.body.password, 2)
            const user = {
                name: req.body.name,
                email: req.body.email,
            }
    
            usersList.push(user)
            res.json(user)
        } catch (error) {
            res.status(500).send()
        }
    }

    /**
     * Login users
     */
    login = (req, res, next) => {

    }
}

module.exports = new Users()