const plivo = require("plivo");

const sendSMS = () => {};

const FormattedDate = (isoDateTime) => {
  if (isoDateTime == "" || isoDateTime == undefined) return isoDateTime;
  const date = new Date(isoDateTime);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const formattedDateTime = `${day}:${month}:${year} ${hours}:${minutes}`;
  return formattedDateTime;
};

const calculateAge = (dateOfBirth) => {
  const dob = new Date(dateOfBirth);
  const today = new Date();

  const dobYear = dob.getFullYear();
  const todayYear = today.getFullYear();

  let age = todayYear - dobYear;

  const dobMonth = dob.getMonth();
  const todayMonth = today.getMonth();

  if (todayMonth < dobMonth) {
    age--;
  } else if (todayMonth === dobMonth) {
    const dobDay = dob.getDate();
    const todayDay = today.getDate();
    if (todayDay < dobDay) {
      age--;
    }
  }

  return age;
};

module.exports = {
  FormattedDate,
  calculateAge,
};
