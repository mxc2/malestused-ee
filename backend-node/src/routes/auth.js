const router = require("express").Router();
const authController = require("../controllers/auth");
const validationMiddleware = require("../middleware/validationMiddleware");
const { check } = require("express-validator");


router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Email ei ole õiges formaadis"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Parool peab olema vähemalt 6 tähte pikk"),
  ],
  validationMiddleware,
  authController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .isLength({ min: 3 })
      .withMessage("Esinimi peab olema vähemalt 3 tähe pikk")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Esinimi pole õiges formaadis"),
    check("lastName")
      .isLength({ min: 3 })
      .withMessage("Perekonna nimi peab olema vähemalt 3 tähe pikk")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Perekonna nimi pole õiges formaadis"),
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Email pole õiges formaadis"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Parool peab olema vähemalt 6 tähte pikk"),
  ],
  validationMiddleware,
  authController.signup
);

module.exports = router;
