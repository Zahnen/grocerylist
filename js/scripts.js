$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let item1 = $("input#item1").val();
    let item2 = $("input#item2").val();
    let item3= $("input#item3").val();
    let item4 = $("input#item4").val();
    let item5 = $("input#item5").val();
    let item6 = $("input#item6").val();
    let listInputs = [];

    listOutputs = [listInputs.push(test);

    $("#list").append(listOutputs);

    $("#list").show();
    $("#formOne").hide();
  });
});