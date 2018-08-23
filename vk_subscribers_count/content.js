if(subscribersCountFieldExist()) changeSubscribersCount();

function changeSubscribersCount() {
  let sunscribers_count = document.getElementsByClassName("count")[1];
  sunscribers_count.innerHTML = '123 457'
}

function subscribersCountFieldExist() {
  return document.getElementsByClassName("count").length > 1 ? true : false
}
