export const roundToTwo = (num: number) => {
  if (num >= 1024 ** 2) {
    const m = Number(((Math.abs(num) / 1024 ** 2) * 100).toPrecision(15));
    return `${((Math.round(m) / 100) * Math.sign(num)).toFixed(2)}MB`;
  } else if (num >= 1024) {
    const m = Number(((Math.abs(num) / 1024) * 100).toPrecision(15));
    return `${((Math.round(m) / 100) * Math.sign(num)).toFixed(2)}KB`;
  }
  const m = Number((Math.abs(num) * 100).toPrecision(15));
  return `${((Math.round(m) / 100) * Math.sign(num)).toFixed(2)}BYTE`;
};

export const getRestMilliSeconds = (
  createdAt: number,
  expiresAt: number,
  baseDate: number,
  nowDate: number
): number => (expiresAt - createdAt) * 1000 - (nowDate - baseDate);

export const milliToTimeForm = (
  createdAt: number,
  expiresAt: number,
  baseDate: number,
  nowDate: number
) => {
  const milliSeconds = getRestMilliSeconds(
    createdAt,
    expiresAt,
    baseDate,
    nowDate
  );
  if (milliSeconds <= 0) return "만료됨";

  const oneToTwo = (num: number) => (num >= 10 ? `${num}` : `0${num}`);
  let hours = (milliSeconds / 1000 / 60 / 60) % 60;
  let days = oneToTwo(Math.floor(hours / 24)) + "일";
  let time = `${oneToTwo(Math.floor(hours))}시간 ${oneToTwo(
    Math.floor((milliSeconds / 1000 / 60) % 60)
  )}분`;

  if (hours >= 48) return days;
  return time;
};

export const DateFormat = (createDate: number) => {
  const date = new Date(createDate * 1000);
  let week = new Array("일", "월", "화", "수", "목", "금", "토");
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let dayName = week[date.getDay()];

  return `${year}년 ${month}월 ${day}일 ${dayName}요일`;
};
