import { birthdays } from "../assets/Constants";

export const useBirthdaysLogic = () => {
  const curYear = new Date().getFullYear();
  const curMonth = new Date().getMonth();
  const curDay = new Date().getDate();

  const curYearBirthdays = birthdays
    .map((birthday) => {
      const birthdayDate = new Date(birthday.date);
      birthdayDate.setFullYear(curYear);

      if (
        birthdayDate.getMonth() > curMonth ||
        (birthdayDate.getMonth() === curMonth &&
          birthdayDate.getDate() >= curDay)
      ) {
        return {
          name: birthday.name,
          date: birthdayDate,
          bornYear: birthday.bornYear,
        };
      }

      return null;
    })
    .filter((birthday) => birthday !== null);

  if (curYearBirthdays.length === 0 && birthdays.length > 0) {
    const firstBirthday = birthdays[0];
    const birthdayDate = new Date(firstBirthday.date);
    birthdayDate.setFullYear(curYear + 1);
    curYearBirthdays.push({
      name: firstBirthday.name,
      date: birthdayDate,
      bornYear: firstBirthday.bornYear,
    });
  }

  const timeUntilNextBirthday = (nextBirthday) => {
    const curDate = new Date();
    const nextBirthdayDate = new Date(
      nextBirthday.date.getFullYear(),
      nextBirthday.date.getMonth(),
      nextBirthday.date.getDate()
    );

    const difference = nextBirthdayDate - curDate;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    const formattedDays = days < 10 ? `0${days}` : days;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
      days: formattedDays,
      hours: formattedHours,
      minutes: formattedMinutes,
      seconds: formattedSeconds,
    };
  };

  return { curYearBirthdays, timeUntilNextBirthday };
};
