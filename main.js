// citiesパッケージをインポート
const cities = require("cities");

// zip_lookupメソッドを使い、結果をmyCityに代入
var myCity = cities.zip_lookup("10016");

console.log(myCity);
