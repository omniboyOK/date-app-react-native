const nameList = [
  "ben",
  "betty",
  "bobby",
  "patty",
  "robert",
  "susan",
  "will",
  "joseph",
];

const imageList = ["ben", "betty", "bobby", "pili", "robert", "susan", "will"];

export const generateList = (amount) => {
  let list = [];

  for (let i = 0; i < amount; i++) {
    let profile = {
      name: nameList[Math.floor(Math.random() * nameList.length)],
      description: "This is a generic description",
      image: imageList[Math.floor(Math.random() * imageList.length)],
    };
    list.push(profile);
  }

  return list;
};
