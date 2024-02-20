const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware");
const userController = require("../controllers/userController");
//user
router.post("/createUser", userController.createUser);
router.post("/verifyUser/:email/:otp", userController.verifyUser);
router.post("/loginUser", userController.loginUser);
router.post("/updateAvatar", authVerifyMiddleware, userController.updateAvatar);
router.post(
  "/updatePassword",
  authVerifyMiddleware,
  userController.updatePassword
);
router.get("/userInfo", authVerifyMiddleware, userController.userInfo);
router.get("/logout", userController.logout);

// router.get("/RecoverVerifyEmail/:email", userController.RecoverVerifyEmail);

//product
router.post(
  "/createProduct",
  authVerifyMiddleware,
  productController.createProduct
);
router.post(
  "/updateProduct/:id",
  authVerifyMiddleware,
  productController.updateProduct
);
router.get("/readProducts", productController.readProducts);
router.get(
  "/readAllProducts",
  authVerifyMiddleware,
  productController.readAllProducts
);
router.get("/readSliders", productController.readSliders);
router.get("/productByBrand", productController.productByBrand);
router.get("/productByCategory", productController.productByCategory);
router.get(
  "/listByBrand/:brandID",
  authVerifyMiddleware,
  productController.listByBrand
);
router.get(
  "/listByCategory/:categoryID",
  authVerifyMiddleware,
  productController.listByCategory
);
router.get(
  "/listByKeyword/:keyword",
  authVerifyMiddleware,
  productController.listByKeyword
);
router.post(
  "/productListByFilter",
  authVerifyMiddleware,
  productController.productListByFilter
);

router.delete(
  "/deleteProduct/:id",
  authVerifyMiddleware,
  productController.deleteProduct
);
module.exports = router;
