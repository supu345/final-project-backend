const {
  createUserService,
  verifyUserService,
  loginUserService,
  updateAvatarService,
  updatePasswordService,
  userInfoService,
  RecoverVerifyEmail,
} = require("../services/userService");

exports.createUser = async (req, res) => {
  let data = await createUserService(req);
  res.status(201).json(data);
};

exports.verifyUser = async (req, res) => {
  let data = await verifyUserService(req);
  res.status(200).json(data);
};

exports.loginUser = async (req, res) => {
  let data = await loginUserService(req);
  let cookieOption = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: false,
  };
  res.cookie("token", data["token"], cookieOption);
  return res.status(200).json(data);
};

exports.logout = async (req, res) => {
  let cookieOption = {
    expires: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    httpOnly: false,
  };
  res.cookie("token", "", cookieOption);
  return res
    .status(200)
    .json({ status: "success", message: "logout successfully" });
};

exports.updateAvatar = async (req, res) => {
  let data = await updateAvatarService(req);
  res.status(200).json(data);
};

exports.updatePassword = async (req, res) => {
  let data = await updatePasswordService(req);
  res.status(200).json(data);
};

exports.userInfo = async (req, res) => {
  let data = await userInfoService(req);
  res.status(200).json(data);
};
// exports.RecoverVerifyEmail = async (req, res) => {
//   let data = await RecoverVerifyEmail(req);
//   res.status(200).json(data);
// };
