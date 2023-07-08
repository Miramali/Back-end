const opportunitys = require("../Models/opportunityModel");

exports.getCalendar = (req, res) => {
  const opportunity = opportunitys.find({ owner: req.user._id });
  const daysInOpportunity = opportunity.daysInWeek;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const daysInMonth = new Date(year, month, 0).getDate();
  const monthName = today.toLocaleString("default", { month: "long" });

  const unavailableDays = daysInOpportunity;

  const calendarData = {
    year,
    month,
    monthName,
    daysInMonth,
    unavailableDays,
  };

  res.send(calendarData);
};
