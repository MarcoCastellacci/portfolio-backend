const User = require('../models/user')

const UserController = {
    signUpUser: async (req, res) => {
        const {fullName, email, password,role,image, from} = req.body
        try{
            const uniqueString = crypto.randomBytes(15).toString('hex')
            const userExist = await User.findOne({email})
            if(userExist){
                if(userExist.from.indexOf(from) !== -1){
                    res.json({
                        success: false,
                        from: from,
                        message: 'User already exist'
                        })  
                } else {
                const passwordHased = await bcrypt.hashSync(password, 10)
                userExist.verification = true   
                userExist.password.push(passwordHased)
                userExist.from.push(from)
                await userExist.save()
                res.json({
                    success: true,
                    from: from,
                    message: 'User created'
                    })
                }
            }else {
            const passwordHased = await bcrypt.hashSync(password, 10)
            const newUser = await new User({
                fullName,
                email,
                password: passwordHased,
                role,
                image,
                uniqueString,
                verification: true,
                from: [from]
                })
                }
            } catch(error){
                res.json({
                    success: false,
                    message: "Something went wrong",
                    console: console.log('Error en SignUpUser: ', error)
                    })
                }
        }, 
    signInUser: async (req, res) => {
        const {email, password, from} = req.body
        try {
            const userExist = await User.findOne({email})
            if(!userExist){
                res.json({
                    success: false,
                    message: 'User not found'
                    })
            } else {
                let passwordMatch = userExist.password.filter(pass => bcryptjs.compareSync(password, pass))
                if(passwordMatch.length > 0){
                const userdata = {
                    fullName: userExist.fullName,
                    email: userExist.email,
                    role: userExist.role,
                    image: userExist.image,
                    uniqueString: userExist.uniqueString,
                    verification: userExist.verification,
                    from: userExist.from,
                    id: userExist._id
                }
                const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn: 60 * 60 * 24})
                await userExist.save()
                res.json({
                    success: true,
                    from: from,
                    response: { userdata, token },
                    message: 'Welcome' + " " + userExist.fullName + " " + "you are logged in"
                    })
                } else {
                    res.json({
                        success: false,
                        message: 'Password or User incorrect'
                        })
                }
            }
        }catch (error){
            res.json({
                success: false,
                message: "Something went wrong",
                console: console.log('Error en SignInUser: ', error)
                })
            }
    },
    signOut: async (req, res) => {
        const email = req.body
        const user = await User.findOne({email})
        await user
        res.json({
            success: true,
            message: user + 'User signed out'
            })
    },
    verifyToken: async (req, res) => {
        if(req, res){
            res.json({
                success: true,
                message: 'Welcome' + " " + userExist.fullName + " " + "you are logged in",
                response: {
                    fullName: userExist.fullName,
                    image: userExist.image,
                    }
                })
        } else {
            res.json({
                success: false,
                message: 'Please Sign In Again'
                })
        }
    }
}
module.exports = UserController
