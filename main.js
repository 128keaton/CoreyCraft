var url = "https://api.minetools.eu/ping/minecraft.coreycraft.us";

$.getJSON(url, function(r) {
  if (r.error) {
    $('#rest').html('Server Offline');
    return false;
  }
  
  
  $('#rest').html(r.description.replace(/§(.+?)/gi, '') + '<br><b>Players Online:</b> ' + r.players.online);
  $('#favicon').attr('src', r.favicon);
});
