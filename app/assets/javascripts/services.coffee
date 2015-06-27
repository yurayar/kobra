# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  $("#haha").on("ajax:success", (e, data, status, xhr) ->
    $("#haha").append xhr.responseText
  ).on "ajax:error", (e, xhr, status, error) ->
    $("#haha").append "<p>ERROR</p>"