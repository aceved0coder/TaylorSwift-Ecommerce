const { Router } = require('express')
const {login, register} = require('../controllers/sessions.controller')
const userManager = require('../dao/user.mongo')
const { isValidPassword, createHash } = require('../utils/bcryptHash')


// sirve para usar en las rutas que necesitan protección
const { passportAuth } = require('../passport-jwt/passportAuth')
const { authorizaton } = require('../passport-jwt/passportAuthorization')




const router = Router()

router.post('/login', async (req, res) => {
    console.log("etoy", req.body)
    const { email, password } = req.body;
    // Realizar la lógica de autenticación y verificación del email y la contraseña
    // ...
  
    try {
    //   // Aquí deberías validar las credenciales del usuario, por ejemplo, consultando la base de datos
       const user = await userManager.getUserByEmail(email);
       console.log("user", user);
       
       const pasValid =  isValidPassword(password, user);
      if (!user ||  !pasValid) {
    //     // Las credenciales son inválidas
       return res.status(401).json({ status: 'error', message: 'Credenciales inválidas' });
   }
  
   //Las credenciales son válidas, generar el token JWT
    
      res.status(200).json({ status : "Bienvenido usuario " + user.first_name });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error en el servidor' });
    }
  });
  
  router.post('/register', async (req, res) => {
    console.log("etoy", req.body)
    const { first_name, last_name, email, password } = req.body;
    // Realizar la lógica de autenticación y verificación del email y la contraseña
    // ...

  
    try {
    //   // Aquí deberías validar las credenciales del usuario, por ejemplo, consultando la base de datos
       const passwordHash = createHash(password);
       const user = await userManager.addUser({first_name, last_name, email, password: passwordHash});
       console.log("user", user);

      if (!user ) {
    //     // Las credenciales son inválidas
       return res.status(401).json({ status: 'error', message: 'Error, no se creo el usuario' });
   }
  
   //Las credenciales son válidas, generar el token JWT
    
      res.status(200).json({ status : "Usuario " + user.first_name + " creado con exito"});
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error en el servidor' });
    }
  });
  
// router.post('/login', login)

router.post('/register', register)
    
router.get('/current', 
        passportAuth('jwt'), 
        authorizaton('admin'),
        (req, res)=> {
            res.send('current')
    })
    router.get('/allUsers', passportAuth('jwt'), authorizaton('user'),async (req,res)=>{
        try {
            const users = await userManager.getUsers()
            res.status(200).send({
                status: 'success',
                payload: users
            })
            
        } catch (error) {
            cconsole.log(error)
        }
    })

module.exports = router
