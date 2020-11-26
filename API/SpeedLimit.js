
const APP_CODE = "2yr3WpztHY5_Zjz-ckU7WA";
const APP_ID = "mNmyKc1gLR0JAvuNURqh";

/*export function getSpeedLimit (text) {
  const url = 'https://route.cit.api.here.com/routing/7.2/calculateroute.json?waypoint0='+text+'&waypoint1='+text+'&legattributes=li&linkattributes=nl,fc&mode=fastest;car;traffic:enabled&app_code='+APP_CODE+'&app_id='+APP_ID;
  fetch(url)
  .then((response) => response.json() )
  .then((responseJson) =>{
      console.log("aa");
      console.log(responseJson.response.route[0].leg[0].link[0].speedLimit);
      return responseJson.response.route[0].leg[0].link[0].speedLimit;
    })
    .catch((error) => console.error(error))

}*/

export function getSpeedLimit(text, callBack) {
  const url =
    "https://route.cit.api.here.com/routing/7.2/calculateroute.json?waypoint0=" +
    text +
    "&waypoint1=" +
    text +
    "&legattributes=li&linkattributes=nl,fc&mode=fastest;car;traffic:enabled&app_code=" +
    APP_CODE +
    "&app_id=" +
    APP_ID;
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      callBack(responseJson.response.route[0].leg[0].link[0]);
    })
    .catch((error) => console.error(error));
}
