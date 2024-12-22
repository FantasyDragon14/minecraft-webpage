var url = "https://api.minetools.eu/ping/minecraft.fantasydragon.xyz/25565";
setInterval(() => {
        $.getJSON(url, function (r) {
                //data is the JSON string
                if (r.error) {
                        $('#status').html("<span class='red'>offline</span>")
                        $('#players').html("none")
                        return false
                }
                $('#favicon').attr('src', r.favicon)
                $('#status').html("<span class='green'>online</span>")
                $('#players').html(+r.players.online)

        });
}, 5000)


